# 确定性游戏引擎 v0｜规则决定游戏，AI 完全不参与

> 状态：实现规格 v0.1  
> 上位产品模型：[简化游戏模型](../game-model-v0.md)  
> First Playable：[文本原型](../first-playable-v0.md)

## 1. v0 的目标只有一个

把现在的 First Playable 变成一个：

> **相同输入一定得到相同结果、所有判断都能追溯到明确规则的关系模拟器。**

v0 不调用任何大模型。

不让 AI：

- 生成人物；
- 写剧情；
- 理解自由文本；
- 判断玩家真正想要什么；
- 决定下一轮出什么人；
- 生成最终报告。

整个游戏只使用：

```text
固定数据
+
固定规则
+
固定状态机
+
固定事件模板
+
固定对照选择算法
+
固定结果模板
```

这样第一轮真人验证测到的是：

> **我们的游戏模型有没有用。**

不是：

> ChatGPT 当时会不会聊天。

---

# 2. 引擎只分六块

```text
Player Profile
玩家当前表达的偏好和硬约束

Candidate Library
固定候选人物库

Scenario Engine
固定人生事件和分支

Evidence Engine
把玩家真实反应记成结构化证据

Contrast Selector
根据未解决问题选择下一组对照人物

Choice Map
按固定模板输出当前选择地图
```

这六块就是 v0。

---

# 3. 所有会影响游戏的输入必须结构化

纯规则系统不能“理解一句话”。

所以玩家可以自由写备注，但只有结构化输入参与运算。

## 3.1 硬约束

第一版支持：

- `children_intent`：want / do_not_want / open / unsure
- `long_distance`：accept / conditional / reject

候选人如果和玩家存在明确硬冲突：

> 第一轮候选池直接排除。

第一版不自动处理复杂宗教、地域、开放关系等自由文本约束。

以后增加时要：

> 新增明确字段和规则。

不能靠自然语言匹配。

---

## 3.2 玩家开局的八项“自我认识”

继续使用：

- attraction
- economic_stability
- career_growth
- companionship
- responsiveness
- autonomy
- family_investment
- social_energy

每项选择：

```text
MUST_HIGH
PREFER_HIGH
NORMAL_OK
LOW_OK
DONT_CARE
```

注意：

> 这不是效用权重。

它只表示：

> **开局时玩家自己认为这项有多重要。**

后面的行为证据可以支持，也可以推翻它。

---

## 3.3 两个开放问题改成“结构化选择 + 可选备注”

原来：

> 最怕选错什么？  
> 最希望伴侣给什么感觉？

v0 改成固定选项。

### 最怕选错

可多选最多 3 个：

- no_attraction：没有真正喜欢 / 生理吸引
- financial_insecurity：长期经济不稳定
- no_growth：对方没有成长 / 事业动力
- loneliness：长期缺少陪伴
- not_understood：不被理解和回应
- loss_of_freedom：没有个人空间
- unequal_family_load：家庭责任长期不公平
- social_boundary：社交 / 异性边界让我不舒服
- unpredictability：生活长期不可预测
- wrong_life_direction：孩子 / 城市 / 人生目标方向冲突

### 最希望得到的感觉

可多选最多 3 个：

- attraction：我真的喜欢这个人
- security：安心和稳定
- admiration：欣赏、佩服、一起成长
- togetherness：有人陪、一起生活
- understood：被理解和重视
- freedom：亲密但有自己的空间
- home：家庭感、共同承担
- vitality：生活有趣、有活力
- reliability：关键时刻靠得住
- fairness：关系里是公平的

可选自由备注仍然保存，但：

> **v0 不读取、不计算。**

---

# 4. 候选人物不是总分，而是一组独立字段

候选人全部预先写在固定人物库里。

v0 使用 0～10 的离散整数表示底层特征。

## 4.1 主要人物维度

| 字段 | 含义 |
|---|---|
| economic_stability | 当前经济稳定程度 |
| career_intensity | 事业投入强度 |
| daily_availability | 日常可用于伴侣的时间 |
| responsiveness | 玩家表达需要以后愿不愿意理解和回应 |
| crisis_reliability | 关键事件里是否靠得住 |
| autonomy_need | 对个人空间和独立生活的需要 |
| family_investment | 对家庭 / 伴侣长期投入 |
| social_energy | 聚会、朋友、外部社交强度 |
| predictability | 作息和计划是否稳定可预期 |
| fairness | 家务、钱、责任等是否愿意公平协商 |

这些维度：

> **没有统一总分。**

---

## 4.2 人生目标字段

至少包括：

- children_intent
- mobility：low / medium / high
- relationship_seriousness：v0 全部为 serious

未来需要新的硬方向，再增加明确字段。

---

## 4.3 玩家主观吸引不是候选人的固有字段

候选人可以有照片 / 形象。

玩家看到后，对每个候选人单独给：

```text
0 完全没有吸引
1 比较无感
2 顺眼
3 明显喜欢
4 很强吸引
```

这个值保存为：

> `player_candidate_attraction[player_id][candidate_id]`

它属于：

> **玩家 × 候选人。**

不是候选人自己的“颜值”。

---

# 5. 第一轮人物完全固定，不动态生成

v0 第一轮默认从人物库中的 4 个 Base Candidate 开始。

人物必须满足：

- 没有安全红线；
- 没有统一明显优胜者；
- 每个人都有清晰生活方向；
- 每个人至少有 2 个明显优势；
- 每个人至少有 1 个真实机会成本；
- 不显示“事业型 / 家庭型”等类型标签。

如果硬约束冲突：

> 使用固定替补人物补足 4 人。

第一版不随机抽卡。

这样方便复现和比较真人试玩。

---

# 6. 游戏状态不使用一个“爱情值”

每一段关系维护 6 个状态。

范围：

```text
-10 ～ +10
```

初始全部为 0。

| 状态 | 含义 |
|---|---|
| connection | 亲密和连接感 |
| trust | 信任 / 安全 |
| autonomy_balance | 个人空间是否舒服 |
| resentment | 累积消耗和怨恨；越高越差 |
| commitment | 主观上想继续的程度 |
| exit_constraint | 离开成本；高不代表关系好 |

注意：

> 游戏绝不把 6 个状态加成一个“关系分”。

每个状态独立保存。

---

# 7. 一段人生由固定事件模板运行

v0 第一轮固定 4 个事件：

1. weekend：普通周末
2. cohabitation：同居 / 日常分工
3. career_opportunity：事业机会
4. crisis：真正需要对方的时候

第二轮从固定事件库里选择 3 个最有区分度的事件。

不使用随机事件。

---

# 8. 每个事件只做四件事

```text
当前人物
+
当前事件
+
玩家选择
↓
固定规则决定人物回应
↓
固定 effects 修改关系状态
↓
玩家给真实承受反馈
```

## 8.1 玩家行动都是固定选项

例如 weekend：

- join：跟着对方安排
- negotiate：提出一个双方都能接受的方案
- separate：各过各的
- protest：明确表示不满意，希望对方改变

不同事件有自己的固定 action list。

---

## 8.2 人物回应由阈值规则决定

例如玩家选择 `negotiate`：

```text
responsiveness >= 8
→ ACCEPT_AND_ADJUST

responsiveness 5..7
→ PARTIAL_ADJUST

responsiveness <= 4
→ DEFEND_OWN_PLAN
```

如果同时：

```text
autonomy_need >= 8
且玩家要求大幅取消个人安排
```

则回应最多只能到：

> PARTIAL_ADJUST

除非当前事件是 crisis 且 `crisis_reliability >= 8`。

所有例外都必须写进规则表。

---

# 9. 玩家真实感受比系统计算更重要

每个事件结束后，玩家必须选择一个承受档位：

```text
LIKE
ACCEPT
CHANGE_REQUIRED
CANNOT_CONTINUE
```

对应：

- LIKE：舒服 / 喜欢
- ACCEPT：有点不爽，但长期能接受
- CHANGE_REQUIRED：很消耗，必须调整
- CANNOT_CONTINUE：不能长期这样过

这个选择：

> **不由系统替玩家计算。**

这是整个 v0 最重要的人类输入。

---

# 10. 每个负面反馈必须绑定固定“原因码”

如果玩家选择：

- CHANGE_REQUIRED
- CANNOT_CONTINUE

系统必须让玩家从当前场景提供的 2～4 个原因中选 1 个主因，可选 1 个次因。

例如事业事件可能提供：

- LOW_TIME：陪伴时间太少
- LOW_PRIORITY：我感觉自己永远排在工作后面
- LOW_RESPONSE：我表达以后仍然不调整
- UNPREDICTABLE：生活太不可预测
- RELOCATION_COST：我不想为对方搬迁 / 放弃自己的安排

纯规则系统不能让玩家写一句话再由程序分析。

---

# 11. Evidence Engine 只做“证据计分”，不声称发现真相

每个原因码映射到一个固定 Hypothesis。

例如：

```text
LOW_TIME
→ NEED_DAILY_COMPANIONSHIP

LOW_PRIORITY
→ NEED_RELATIONSHIP_PRIORITY

LOW_RESPONSE
→ NEED_RESPONSIVENESS

UNPREDICTABLE
→ NEED_PREDICTABILITY
```

---

## 11.1 负面证据加分

当玩家明确把某件事当主因：

```text
CHANGE_REQUIRED
主因 +2
次因 +1

CANNOT_CONTINUE
主因 +3
次因 +1
```

一段人生结束时：

> “如果只能改一件事，你最想改什么？”

对应 Hypothesis 再 +2。

---

## 11.2 正面承受形成反证

如果人物在某维度明显低 / 高，且对应事件真正暴露了这个特点：

```text
LIKE
→ 对“我不能接受这种情况”的假设 -2

ACCEPT
→ -1
```

只有事件真的 probe 到这个维度，才记反证。

不能因为人物“陪伴低”，但这局根本没出现陪伴场景，就自动记证据。

---

## 11.3 初始自评只是弱先验

开局：

```text
MUST_HIGH → +2
PREFER_HIGH → +1
NORMAL_OK → 0
LOW_OK → -1
DONT_CARE → -2
```

这个分只作为初始 evidence。

真实生活反馈权重大于开局声明。

---

# 12. Hypothesis 不使用百分比，只使用证据等级

每个 Hypothesis 保存：

- score
- positive_evidence_count
- counter_evidence_count
- rounds_seen

状态规则：

```text
score >= 6 且 rounds_seen >= 2
→ STABLE

score 3..5
→ LIKELY

score 1..2
→ POSSIBLE

score <= 0
→ UNSUPPORTED
```

另外：

> 硬性吸引门槛使用单独规则，不与普通 Hypothesis 混在一起。

如果玩家连续两轮：

- attraction <= 1 时拒绝进入关系；
- attraction >= 2 才会选择；

则：

> `ATTRACTION_GATE = STABLE`

第一版只记录现象，不推断门槛究竟是 2 还是 3。

---

# 13. 第二轮不“生成”人物，而是选择固定 Contrast Pack

纯规则 v0 不动态造人。

人物库预先准备多组：

> **Contrast Pack。**

每个 Pack 专门区分一组容易混淆的解释。

第一版至少有：

1. CAREER_TIME_RELIABILITY
2. TOGETHERNESS_AUTONOMY
3. SOCIAL_PREDICTABILITY
4. MONEY_GROWTH_TIME
5. FAMILY_FAIRNESS_SPACE

例如：

```text
CAREER_TIME_RELIABILITY
├─ 高事业 + 低陪伴 + 高可靠
├─ 中事业 + 高陪伴 + 中回应
└─ 高事业 + 低陪伴 + 低可靠
```

人物是固定数据。

算法只决定：

> 本轮加载哪个 Pack。

---

# 14. Contrast Selector 使用固定优先级

第二轮选择逻辑：

## Step 1｜找到本轮最强的 3 个未稳定 Hypothesis

条件：

- status = POSSIBLE 或 LIKELY
- 本轮至少产生一条真实证据

按：

```text
score 降序
→ 若同分，最近一次负面强度高的优先
→ 再同分，固定 hypothesis_order
```

排序。

---

## Step 2｜寻找能同时区分最多 Hypothesis 的 Pack

每个 Pack 预先声明：

> `tests: [H1, H2, H3]`

计算：

```text
coverage =
Pack.tests 与 Top Hypotheses 的交集数量
```

选 coverage 最大的 Pack。

并列时：

> 使用固定 `pack_priority`。

没有随机数。

---

## Step 3｜避免已经确认的无关维度抢戏

如果某个 Hypothesis 已经 STABLE：

> 第二轮人物尽量保持该维度在玩家可接受范围内。

v0 通过：

> 为每个 Pack 预先配置适用于不同 Stable Gate 的候选变体

解决。

暂时不做动态优化算法。

---

# 15. 第二轮事件也由 Pack 固定指定

每个 Contrast Pack 配：

- 3 个候选人；
- 3 个 probe event。

例如 CAREER_TIME_RELIABILITY：

```text
event 1：普通工作周
→ 测日常陪伴

event 2：玩家明确表达需要
→ 测回应

event 3：突发重要事件
→ 测关键可靠
```

这样第二轮不是“换故事”。

而是真正区分竞争解释。

---

# 16. 第三轮只在固定条件下触发

任一满足：

### 条件 A｜出现明显反向证据

例如某个 Hypothesis：

```text
上一轮 score >= 4
本轮产生 <= -3 的净反证
```

说明可能矫枉过正或解释错了。

### 条件 B｜两个 Hypothesis 仍然同分且 >= 3

还无法区分。

### 条件 C｜出现新的玩家硬门槛

例如主观吸引门槛突然稳定。

否则：

> 第二轮结束后直接进入 Choice Map。

v0 最多 3 轮。

---

# 17. Choice Map 完全由规则生成

不用 AI 写总结。

每个 Hypothesis 有预先配置的中文模板。

---

## 17.1 “目前必须有”

条件：

```text
status = STABLE
且 hypothesis_type = NEED
```

或者：

> 已稳定的硬门槛。

---

## 17.2 “明显喜欢，但不是硬门槛”

条件：

```text
status = LIKELY
且没有 CANNOT_CONTINUE 证据
```

---

## 17.3 “最难长期承受”

条件：

```text
至少 1 次 CANNOT_CONTINUE
或
至少 2 次 CHANGE_REQUIRED
且 score >= 4
```

---

## 17.4 “其实能接受的不完美”

条件：

某个负面特点在至少 2 个不同事件 / 轮次真正暴露，同时：

```text
LIKE / ACCEPT >= 2 次
且该 Hypothesis score <= 0
```

---

## 17.5 “愿意做的交换”

使用固定 Trade-off Pattern。

例如：

```text
高事业 + 低日常陪伴
但高可靠 / 高回应
被玩家连续接受
```

输出：

> 为了对方的事业 / 成长，你目前可以接受较少的日常陪伴，只要重要时刻可靠、你的需要会被回应。

v0 的 Trade-off Pattern 全部预先配置。

---

## 17.6 “真正喜欢的共同生活”

不生成自由文。

从固定 Lifestyle Template 里选择最匹配的一条。

第一版模板例如：

- CLOSE_AND_INDEPENDENT：亲密，但双方都有自己的事业和兴趣
- HIGH_TOGETHERNESS_HOME：大量共同生活和家庭投入
- GROWTH_AND_RELIABILITY：重视成长，平时各忙，关键时刻高度可靠
- SOCIAL_AND_FREE：社交丰富，关系亲密但空间很大
- STABLE_AND_PREDICTABLE：生活稳定、规律、责任清晰

选择算法按 Stable / Likely Hypothesis 匹配，不算统一总分。

若没有一个模板满足最低匹配条件：

> 输出“目前还没有形成稳定共同生活类型”。

这是合法结果。

---

# 18. State Machine 固定为六个阶段

```text
SETUP
↓
ROUND_1_SELECT
↓
ROUND_1_LIFE
↓
EVIDENCE_REVIEW
↓
ROUND_2_SELECT
↓
ROUND_2_LIFE
↓
[ROUND_3_SELECT / ROUND_3_LIFE 可选]
↓
CHOICE_MAP
↓
END
```

任何实现都必须保存：

- 当前 state；
- round；
- candidate；
- event；
- player_action；
- candidate_response；
- tolerance；
- reason_codes；
- evidence change；
- relationship state before / after。

这样每个结论都能回放。

---

# 19. v0 明确禁止的隐式判断

程序不能：

- 根据姓名猜性格；
- 根据职业自动推断人格；
- 根据“事业高”自动把“顾家”调低；
- 根据“外向”自动推断异性边界差；
- 根据“收入高”自动推断陪伴少；
- 根据玩家自由文本修改规则；
- 通过一个隐藏总分排序对象；
- 把没分开解释成关系好；
- 把所有偏好最后调成中等；
- 把安全问题放进 trade-off；
- 输出“你应该和谁结婚 / 分手”。

这些全部属于规则禁区。

---

# 20. v0 真正需要实现的数据文件

```text
spec/v0/
├─ dimensions.json
├─ hypotheses.json
├─ candidates.json
├─ events.json
├─ contrast-packs.json
├─ lifestyle-templates.json
└─ output-templates.json
```

规则本身由程序实现。

这些 JSON 只保存：

> 配置和固定内容。

不在代码里硬编码人物和文案。

---

# 21. v0 完成标准

开发完成后必须满足：

1. 同一输入重放 10 次，结果完全一致；
2. 不联网、不调用 AI；
3. 玩家自由文本不会改变规则结果；
4. 所有 Choice Map 条目都能追溯到具体 evidence；
5. 第二轮 Pack 能说明自己在区分哪些 Hypothesis；
6. 人物没有统一总分；
7. 关系状态没有统一爱情分；
8. 安全红线不进入普通 trade-off；
9. 可导出完整 session JSON；
10. 可以用固定 test fixture 自动验证核心路径。

---

# 22. 这一版做出来以后再真人试玩

之前的“ChatGPT 主持试玩”不再作为 v0 的正式验证方式。

真正的第一轮验证应该跑：

> **确定性引擎。**

如果玩家说：

> “原来我真正介意的不是 X，而是 Y。”

我们才知道：

> 这是规则系统产生的效果。

如果没有产生，也能直接回头检查：

- 人物；
- 事件；
- 原因码；
- Evidence Rule；
- Contrast Pack；
- Choice Map。

而不是猜：

> 当时是不是 AI 聊得不好。


---

# v0.2｜Experience Information Model 正式接入

2026-09-24 起，Rule Engine 与 Experience / Information Model 正式分层。

```text
spec/v0/information-model.json
→ 决定应该认识哪些信息、前台怎样获得这些信息

spec/v0/interaction-contracts.json
→ 决定每个需要玩家操作的节点为什么存在

现有 dimensions / hypotheses / resolvers
→ 继续决定哪些输入当前真正参与 Evidence / State / Contrast 计算
```

## Candidate Facts 与 traits 分开

Candidate Facts 保存现实中可以直接知道的信息，例如年龄、城市、学历、工作、收入区间、住房、家庭情况、婚育意图、吸烟饮酒、迁移可能性。

traits 保存后台关系模拟维度，例如事业投入、可陪伴时间、回应、可靠、公平、边界等。

禁止：

> 用某个现实事实自动推断一个关系 trait。

例如不能因为“高收入”自动推出“陪伴少”，也不能因为“有房”自动推出“经济安全需求已满足”。

## 新信息不自动进入最终 Evidence

`information-model.json` 中的 money_style、attention_priority、conflict_style、repair_capacity 等已经进入正式信息模型，但如果尚未进入 dimensions / hypotheses / resolver / fixture：

> 只能用于展示、确定性对话或 Probe，不能影响最终 Choice Map。

要进入计算层，必须补齐：

1. dimension / field definition；
2. hypothesis / evidence mapping；
3. deterministic resolver；
4. test fixture。

## Interaction Contract

凡要求玩家点击 / 选择的节点，必须存在对应 Contract，至少说明：

- purpose；
- targets；
- candidate_difference；
- choices；
- response_mapping；
- evidence_update。

纯过渡内容允许存在，但默认自动推进或与有功能的节点合并，不要求玩家为了“继续”而做无意义操作。

## 单段人生也使用区分性 Probe

Contrast Pack 的“用下一轮区分竞争解释”继续保留。

v0.2 进一步允许在同一段人生内：

```text
当前已知 Evidence
+
仍未区分的解释
↓
从该人物预先配置的 Interaction Contract 中
选择下一条最有区分力的 Probe
```

第一版仍是固定、确定性的选择逻辑，不使用 AI 动态生成。
