# 确定性引擎 Rulebook v0.1

> 这份文件定义程序必须怎样算。  
> 所有规则都是 v0 产品规则，不等于科学定律。  
> 配置数据见 `spec/v0/`。

# 1. 公共函数

## 1.1 trait band

所有 0～10 人物维度统一分档：

```text
0..3  = LOW
4..7  = MID
8..10 = HIGH
```

函数：

```text
band(value)
```

必须纯函数、无随机数。

---

## 1.2 clamp

关系状态范围：

```text
-10..+10
```

所有更新：

```text
new = min(10, max(-10, old + delta))
```

---

# 2. 首轮候选人选择

## 2.1 硬约束过滤

### children_intent

不兼容只有两种：

```text
player = want
candidate = do_not_want
→ reject

player = do_not_want
candidate = want
→ reject
```

candidate = open：

> 永远兼容。

player = open / unsure：

> 不因 children_intent 过滤。

### long_distance

```text
player = reject
candidate.long_distance_risk = high
→ reject
```

其他组合：

> 保留。

---

## 2.2 固定选 4 人

过滤后：

```text
按 first_round_priority 升序
→ 取前 4 个
```

没有随机。

如果不足 4 人：

> 返回配置错误，不偷偷放宽玩家硬约束。

---

# 3. 主观吸引怎么处理

玩家看到人物后，对每个人输入：

```text
attraction = 0..4
would_consider = true / false
```

`would_consider=false` 的人物：

> 不允许被选中。

但继续保留：

> attraction evidence。

---

## 3.1 attraction gate evidence

满足下面一次：

```text
attraction <= 1
且 would_consider = false
```

记录：

> `ATTRACTION_LOW_REJECT += 1`

满足：

```text
attraction >= 2
且 would_consider = true
```

记录：

> `ATTRACTION_PASS += 1`

如果跨至少 2 个 round：

```text
ATTRACTION_LOW_REJECT >= 2
且
ATTRACTION_PASS >= 2
```

则：

> `NEED_ATTRACTION_GATE = STABLE`

这里不计算精确阈值。

---

# 4. 关系状态

每段关系开始：

```json
{
  "connection": 0,
  "trust": 0,
  "autonomy_balance": 0,
  "resentment": 0,
  "commitment": 0,
  "exit_constraint": 0
}
```

---

# 5. Outcome Tag 与关系状态更新

事件 Resolver 不直接随意改状态。

它先输出一组 Tag。

统一由 Tag 表更新。

| Tag | connection | trust | autonomy | resentment | commitment | exit_constraint |
|---|---:|---:|---:|---:|---:|---:|
| RESPONSIVE | +1 | +1 | 0 | -1 | +1 | 0 |
| PARTIAL_RESPONSE | 0 | 0 | 0 | 0 | 0 | 0 |
| UNRESPONSIVE | -1 | -1 | 0 | +1 | -1 | 0 |
| RELIABLE | +1 | +2 | 0 | -1 | +1 | 0 |
| UNRELIABLE | -1 | -2 | 0 | +2 | -1 | 0 |
| SPACE_RESPECTED | 0 | +1 | +2 | -1 | 0 | 0 |
| SPACE_PRESSURED | -1 | -1 | -2 | +1 | -1 | 0 |
| FAIR | 0 | +1 | 0 | -1 | +1 | 0 |
| UNFAIR | -1 | -1 | 0 | +2 | -1 | 0 |
| PREDICTABLE | 0 | +1 | 0 | 0 | 0 | 0 |
| UNPREDICTABLE | 0 | -1 | 0 | +1 | 0 | 0 |
| TOGETHER_POSITIVE | +2 | 0 | 0 | -1 | +1 | 0 |
| DISTANCE | -1 | 0 | 0 | 0 | -1 | 0 |
| SHARED_COST | 0 | 0 | 0 | 0 | 0 | +1 |
| MAJOR_SHARED_COST | 0 | 0 | 0 | 0 | 0 | +2 |

同一事件可以返回多个 Tag。

所有 Delta 累加后再 clamp。

`exit_constraint`：

> 只表示分开成本，不是好感。

---

# 6. Common Response Rule

很多事件都需要判断：

> 玩家表达需要以后，人物怎样回应。

统一函数：

```text
resolve_response(responsiveness, autonomy_need, request_pressure)
```

request_pressure：

- LOW
- MID
- HIGH

规则：

### responsiveness HIGH

```text
request_pressure LOW/MID
→ ACCEPT

request_pressure HIGH 且 autonomy_need HIGH
→ NEGOTIATE_BOUNDARY

request_pressure HIGH 且 autonomy_need 非 HIGH
→ ACCEPT
```

### responsiveness MID

```text
request_pressure LOW
→ ACCEPT

request_pressure MID
→ PARTIAL

request_pressure HIGH
→ RESIST
```

### responsiveness LOW

```text
任何 pressure
→ RESIST
```

映射 Tag：

```text
ACCEPT
→ RESPONSIVE

NEGOTIATE_BOUNDARY
→ RESPONSIVE + SPACE_RESPECTED

PARTIAL
→ PARTIAL_RESPONSE

RESIST
→ UNRESPONSIVE
```

---

# 7. WEEKEND Resolver

## 7.1 人物默认周末计划

优先级从上到下，只命中一个：

```text
social_energy HIGH
→ SOCIAL_PLAN

family_investment HIGH
且 daily_availability HIGH
→ COUPLE_PLAN

autonomy_need HIGH
→ INDEPENDENT_PLAN

其他
→ MIXED_PLAN
```

---

## 7.2 玩家行动

### JOIN

```text
→ TOGETHER_POSITIVE
```

如果人物 autonomy_need HIGH 且 default_plan=INDEPENDENT_PLAN：

```text
额外 PARTIAL_RESPONSE
```

### NEGOTIATE

调用：

```text
resolve_response(..., request_pressure=MID)
```

ACCEPT：

> 加 `TOGETHER_POSITIVE`

### SEPARATE

人物 autonomy_need HIGH：

```text
SPACE_RESPECTED
```

人物 autonomy_need LOW 且 family_investment HIGH：

```text
DISTANCE
```

其他：

> 无额外 Tag。

### PROTEST

调用：

```text
resolve_response(..., request_pressure=HIGH)
```

若 RESIST：

> 再加 `SPACE_PRESSURED`

---

# 8. COHABITATION Resolver

## 8.1 人物初始分工方式

```text
fairness HIGH
→ EXPLICIT_FAIR_SPLIT

fairness MID
→ INFORMAL_SPLIT

fairness LOW
→ PARTNER_CARRIES_MORE
```

对应 Tag：

```text
EXPLICIT_FAIR_SPLIT
→ FAIR

INFORMAL_SPLIT
→ 无

PARTNER_CARRIES_MORE
→ UNFAIR
```

---

## 8.2 玩家行动

### ACCEPT_SPLIT

只保留初始 Tag。

### NEGOTIATE_SPLIT

调用 `resolve_response(..., MID)`。

如果 ACCEPT / NEGOTIATE_BOUNDARY：

> 加 FAIR。

### SET_ROTATION

request_pressure=HIGH。

如果人物 fairness HIGH：

> pressure 强制降为 MID。

接受：

> FAIR + PREDICTABLE。

拒绝：

> UNRESPONSIVE。

### WITHDRAW

```text
DISTANCE + resentment +1
```

实现方式：

> 额外直接加 `resentment += 1`，这是 v0 唯一允许的 event local delta 之一。

---

# 9. CAREER_OPPORTUNITY Resolver

事件：

> 出现明显职业机会，但未来半年会更忙 / 有出差 / 可能搬迁。

## 9.1 人物默认倾向

```text
career_intensity HIGH
→ PURSUE

career_intensity MID
→ DISCUSS

career_intensity LOW
→ RELATIONSHIP_FIRST
```

---

## 9.2 玩家 SUPPORT

PURSUE：

```text
career_intensity HIGH
且 responsiveness HIGH
→ RESPONSIVE + PREDICTABLE

career_intensity HIGH
且 responsiveness MID/LOW
→ PARTIAL_RESPONSE

其他
→ RESPONSIVE
```

如果机会含迁移：

> `SHARED_COST`

---

## 9.3 NEGOTIATE_TERMS

调用 `resolve_response(..., MID)`。

人物 career_intensity HIGH 且 response=ACCEPT：

> 仍然 PURSUE，但固定安排共同时间。

Tags：

```text
RESPONSIVE + PREDICTABLE + SHARED_COST
```

MID：

> PARTIAL_RESPONSE + SHARED_COST

RESIST：

> UNRESPONSIVE + UNPREDICTABLE + SHARED_COST

---

## 9.4 OPPOSE

request_pressure=HIGH。

人物 career_intensity HIGH：

- responsiveness HIGH → NEGOTIATE_BOUNDARY
- 其他 → RESIST

人物 career_intensity LOW：

> ACCEPT

---

## 9.5 ASK_DELAY

人物 predictability HIGH 且 responsiveness >= MID：

> RESPONSIVE + PREDICTABLE

否则：

> PARTIAL_RESPONSE 或 UNRESPONSIVE，按 responsiveness band。

---

# 10. CRISIS Resolver

事件：

> 玩家真的需要伴侣。

这一个事件优先使用：

`crisis_reliability`

而不是日常陪伴。

## 10.1 ASK_DIRECTLY / ASK_PRACTICAL_HELP

```text
crisis_reliability HIGH
→ RELIABLE

crisis_reliability MID
→ PARTIAL_RESPONSE

crisis_reliability LOW
→ UNRELIABLE
```

再根据 responsiveness：

```text
HIGH → RESPONSIVE
LOW  → UNRESPONSIVE
MID  → 不加
```

---

## 10.2 HANDLE_SELF

不用于判断可靠性。

只记录：

> 玩家没有给对方真实响应机会。

本事件：

> `probe_validity = PARTIAL`

不能用来形成 `LOW_RELIABILITY` 证据。

---

# 11. WORKWEEK Resolver

根据 `daily_availability`：

```text
HIGH → HIGH_TIME
MID  → MID_TIME
LOW  → LOW_TIME
```

如果 `predictability HIGH`：

> 加 PREDICTABLE。

如果 LOW：

> 加 UNPREDICTABLE。

玩家：

### ACCEPT

无响应测试。

### REQUEST_FIXED_TIME

request_pressure=LOW。

响应 ACCEPT：

> RESPONSIVE + PREDICTABLE

### REQUEST_MORE_TIME

request_pressure=MID。

### PROTEST

request_pressure=HIGH。

---

# 12. EXPRESS_NEED Resolver

无其他人物属性混入。

目的：

> 单独 probe responsiveness。

玩家三个 action 都调用 `resolve_response`：

```text
STATE_NEED → LOW
ASK_CHANGE → MID
STATE_BOUNDARY → HIGH
```

这使第二轮可以专门区分：

> “时间少”与“你说了以后他不理”。

---

# 13. EXPRESS_SPACE Resolver

目的：

> probe autonomy / togetherness。

玩家：

```text
ASK_ONE_NIGHT → LOW
ASK_WEEKLY_SPACE → MID
ASK_SEPARATE_HOBBY → MID
```

如果人物 autonomy_need HIGH：

> SPACE_RESPECTED

如果人物 autonomy_need MID：

> 看 responsiveness。

如果人物 autonomy_need LOW 且 family_investment HIGH：

- responsiveness HIGH → RESPONSIVE
- responsiveness MID → PARTIAL_RESPONSE
- responsiveness LOW → SPACE_PRESSURED + UNRESPONSIVE

---

# 14. FRIEND_GATHERING Resolver

人物默认：

```text
social_energy HIGH → 经常有聚会
MID → 偶尔
LOW → 很少
```

但：

> 社交多不等于边界差。

边界单独看：

`boundary_respect`。

玩家 DISCUSS_BOUNDARY：

```text
boundary_respect HIGH
→ RESPONSIVE + PREDICTABLE

boundary_respect MID
→ PARTIAL_RESPONSE

boundary_respect LOW
→ UNRESPONSIVE
```

玩家 SKIP：

autonomy_need HIGH：

> SPACE_RESPECTED

autonomy_need LOW：

> DISTANCE

---

# 15. PLAN_CHANGE Resolver

`predictability` 决定临时改计划的频率和说明方式。

玩家 NEGOTIATE / KEEP_ORIGINAL / PROTEST：

> 使用 responsiveness 决定是否调整。

关键原则：

> social_energy 不参与此 Resolver。

这样才能区分：

> “我讨厌社交”还是“我讨厌不可预测”。

---

# 16. BUDGET Resolver

v0 不做完整经济模拟。

只使用：

- economic_stability
- fairness
- career_intensity

人物状态：

```text
economic_stability HIGH
→ SAFE_BUFFER

MID
→ NORMAL_BUFFER

LOW
→ THIN_BUFFER
```

玩家 NEGOTIATE_TARGET：

- fairness HIGH → FAIR + RESPONSIVE
- fairness MID → PARTIAL_RESPONSE
- fairness LOW → UNFAIR + UNRESPONSIVE

玩家 SAVE_MORE：

人物 career_intensity HIGH：

> 更愿意通过增加未来收入解决。

人物 career_intensity LOW：

> 更愿意压支出。

这里只改变剧情路径。

不评价哪一种更成熟。

---

# 17. FAMILY_DUTY Resolver

事件：

> 家务、育儿或老人照护任务明显增加。

初始承担：

```text
family_investment HIGH
且 fairness HIGH
→ 主动共同承担

family_investment HIGH
且 fairness MID
→ 愿意承担，但分工可能不清

family_investment LOW
→ 更容易把任务留给伴侣 / 外包 / 其他人
```

玩家 NEGOTIATE_BY_CAPACITY：

> 优先看 fairness，再看 responsiveness。

关键：

> 不要求五五开。

只看：

> 是否愿意协商、双方是否觉得合理。

---

# 18. 玩家 Tolerance 如何形成 Evidence

## 18.1 先判断 probe 是否有效

事件 Resolver 必须返回：

```text
probed_hypotheses
exposures
```

例如：

```json
{
  "NEED_DAILY_COMPANIONSHIP": "LOW",
  "NEED_CRISIS_RELIABILITY": "HIGH"
}
```

只有 exposure 存在：

> 才能增减该 Hypothesis。

---

## 18.2 负面反馈

玩家：

`CHANGE_REQUIRED`

- 主因 +2
- 次因 +1

玩家：

`CANNOT_CONTINUE`

- 主因 +3
- 次因 +1

原因码必须属于：

> 当前 Event 的 allowed reason_codes。

---

## 18.3 LIKE / ACCEPT 的反证

只有当：

> 当前 exposure 对某个 NEED 是明显不利状态

才形成反证。

例如：

```text
NEED_DAILY_COMPANIONSHIP
exposure = LOW
玩家 LIKE
→ -2

玩家 ACCEPT
→ -1
```

如果 exposure=HIGH：

> LIKE 不自动 +2。

原因：

> v0 更看重“我明确受不了什么”，避免所有舒服体验都被误当强需求。

---

# 19. Round End 的“只能改一件事”

玩家必须从这一轮实际暴露过的 reason_code 中选一个：

`single_change_reason`

对应 Hypothesis：

> +2

不能自由输入一个新概念影响算法。

自由备注可以另外保存。

---

# 20. Hypothesis Status 计算顺序

每次 Evidence 变化后：

1. 更新 score；
2. 更新 positive / counter count；
3. 更新 rounds_seen；
4. 再算 status。

优先：

```text
特殊 Gate
→ 普通 STABLE
→ LIKELY
→ POSSIBLE
→ UNSUPPORTED
```

普通状态按下面顺序计算：

```text
score >= 6 且 rounds_seen >= 2
→ STABLE

否则 score >= 3
→ LIKELY

score 1..2
→ POSSIBLE

score <= 0
→ UNSUPPORTED
```

所以即使同一轮强烈反应让 score 冲到 6 以上：

> **只要还没跨至少两轮验证，仍然只是 LIKELY。**

同一轮重复点同一个原因：

> 可以加 score，但 rounds_seen 只记 1。

---

# 21. Contrast Pack 选择算法

输入：

> Round 结束后的全部 Hypothesis。

## 21.1 Eligible

只选：

```text
POSSIBLE / LIKELY
且本轮产生过 evidence
```

STABLE：

> 已经够稳定，不作为本轮主要待区分对象。

UNSUPPORTED：

> 不优先投入。

---

## 21.2 取 Top 3

排序：

1. score 高；
2. 本轮最严重 tolerance 高：
   `CANNOT_CONTINUE > CHANGE_REQUIRED > ACCEPT > LIKE`
3. hypothesis.order 小。

---

## 21.3 Pack Coverage

```text
coverage =
|pack.tests ∩ top3|
```

取 coverage 最大。

并列：

> `pack_priority` 小的优先。

如果所有 Pack coverage=0：

> 使用 `TOGETHERNESS_AUTONOMY` 作为固定 fallback。

这不是认为它更重要。

只是 v0 保证流程可继续的默认值。

---

# 22. 第二轮人物展示

Pack 直接给出 3 个固定 candidate_id。

仍然：

- 不显示 design_label；
- 显示 presentation；
- 玩家分别给 attraction 和 would_consider；
- 玩家从 would_consider=true 中选 1 个。

如果 3 人全部 would_consider=false：

> 本轮记录 attraction gate evidence，然后从同 Pack 的 fallback_candidate_ids 取固定替补。

如果 Pack 没配置 fallback：

> 本轮结束，Choice Map 输出“当前主要被吸引门槛阻塞”。

---

# 23. 第三轮触发

任一满足：

## A. 解释反转

某 Hypothesis：

```text
进入第二轮前 score >= 4
第二轮净变化 <= -3
```

## B. 无法区分

第二轮结束时：

> 两个或以上 Hypothesis 同分 >=3。

## C. 新 Gate 稳定

例如 attraction gate。

最多：

> 3 轮。

第三轮以后无论如何进入 Choice Map。

---

# 24. Lifestyle Template 选择

只使用：

> STABLE + LIKELY Hypothesis。

对每个 template：

```text
match_count =
requires_any 中命中的 Hypothesis 数
```

选择：

1. match_count 最大；
2. 至少达到 `min_match_count`；
3. 并列按 JSON 顺序。

若不足：

> 输出“目前还没有形成稳定共同生活类型”。

---

# 25. Choice Map 固定分类

## 25.1 必须有

- Gate STABLE；
- 普通 NEED STABLE。

## 25.2 喜欢但不是必须

- NEED LIKELY；
- 且没有任何 CANNOT_CONTINUE 直接指向该 NEED 的相反状态。

## 25.3 最难承受

满足任一：

- 同一 Hypothesis 至少一次 CANNOT_CONTINUE 且 score>=4；
- 同一 Hypothesis 至少两次 CHANGE_REQUIRED 且 score>=4。

## 25.4 能接受的不完美

某 NEED 对应的不利 exposure：

- 至少跨 2 次有效 probe；
- LIKE/ACCEPT 至少 2 次；
- Hypothesis score<=0。

## 25.5 愿意交换

只从预配置 tradeoff pattern 生成。

v0 不允许程序自己组合一句新结论。

## 25.6 共同生活

从 lifestyle template 中确定性选择。

---

# 26. Session Log 是最终 Source of Truth

每一步必须写入：

```json
{
  "state": "ROUND_1_LIFE",
  "round": 1,
  "candidate_id": "P01",
  "event_id": "CAREER_OPPORTUNITY",
  "player_action": "NEGOTIATE_TERMS",
  "candidate_response_code": "PURSUE_WITH_PLAN",
  "outcome_tags": ["RESPONSIVE","PREDICTABLE","SHARED_COST"],
  "relationship_state_before": {},
  "relationship_state_after": {},
  "tolerance": "ACCEPT",
  "primary_reason_code": null,
  "secondary_reason_code": null,
  "evidence_delta": {}
}
```

Choice Map 每一个输出条目：

> 必须带 `evidence_event_ids`。

内部可追溯。

玩家 UI 不一定展示全部技术日志。

---

# 27. v0 的核心原则

最后实现时只检查四件事：

> **规则能不能复现。**

> **玩家有没有真实选择权。**

> **第二轮是不是真的在区分原因。**

> **最后结论能不能追溯到玩家自己做过的选择。**

满足这四点，才值得开始真人测试。
