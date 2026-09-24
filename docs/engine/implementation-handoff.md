# 确定性引擎 v0｜开发交接

> 任务类型：实现已经确认的方案。  
> 当前阶段：**已实现并通过自动测试。**  
> 实现结果见：[implementation-result-v0.md](implementation-result-v0.md)。本文件继续保留为当时的开发输入和验收依据。

## 1. 要实现什么

做一个最小 Web 产品，让用户可以完整跑通：

```text
SETUP
↓
首轮 4 人
↓
选人
↓
固定人生事件
↓
Evidence 更新
↓
确定性选择 Contrast Pack
↓
第二轮 3 人
↓
针对性事件
↓
必要时第三轮
↓
Choice Map
```

整个 v0：

> **完全不使用 AI。**

---

## 2. 开发前必须读取

通用开发角色：

`Darcy-Jin/personal-ai-system/agents/development-engineer/AGENT.md`

Relationship 正式依据：

1. `README.md`
2. `docs/current-state.md`
3. `docs/current-model.md`
4. `docs/game-model-v0.md`
5. `docs/engine/deterministic-engine-v0.md`
6. `docs/engine/rulebook-v0.md`
7. `spec/v0/README.md`
8. `spec/v0/*.json`

历史 / 依据按需再读：

- `docs/research/`
- `docs/first-playable-v0.md`
- `docs/validation/01-first-playable-design-stress-test.md`

不要从历史研究重新设计规则。

---

## 3. 开发可以自己决定什么

技术范围内可以自行决定：

- 前端框架；
- TypeScript / JavaScript 组织；
- 状态管理方式；
- 路由；
- CSS；
- JSON 加载方式；
- 单元测试框架；
- 如何组织纯函数；
- 日志 / 导出文件实现。

前提：

> 不改变业务规则。

---

## 4. 不允许开发自行改变什么

不能因为代码方便改变：

- 人物维度；
- Hypothesis；
- Evidence 权重；
- Hypothesis status 阈值；
- 首轮过滤和排序；
- Contrast Pack 选择算法；
- 第三轮触发条件；
- Choice Map 分类规则；
- “无总分”原则；
- “无 AI”原则；
- 安全问题不进入 trade-off；
- 玩家自由文本不参与计算。

如果这些规则有问题：

> 记录问题，交回设计。

---

## 5. 推荐的最小代码边界

这只是技术建议，不是产品规则。

```text
src/
├─ engine/
│  ├─ setup
│  ├─ candidate-selection
│  ├─ event-resolvers
│  ├─ relationship-state
│  ├─ evidence
│  ├─ contrast-selector
│  ├─ choice-map
│  └─ replay
├─ data/
│  └─ 从 spec/v0 加载
├─ ui/
└─ tests/
```

核心原则：

> Engine 必须可以脱离 UI 单独测试。

---

## 6. 引擎函数必须尽量是纯函数

例如：

```text
selectFirstRound(player, candidates)
→ candidate_ids

resolveEvent(event, candidate, player_action, relationship_state)
→ outcome

applyEvidence(session, outcome, tolerance, reason_codes)
→ new_hypotheses

selectContrastPack(hypotheses, packs)
→ pack_id

buildChoiceMap(session)
→ choice_map
```

同样输入：

> 永远同样输出。

不要依赖：

- 当前时间；
- 随机数；
- 网络；
- 浏览器环境；
- LLM。

---

## 7. UI 第一版只需要能跑通

需要页面：

1. 开局设置；
2. 4 人候选卡；
3. 主观吸引 + 是否考虑；
4. 选人；
5. 事件卡；
6. 玩家 action；
7. 承受程度；
8. 原因选择；
9. 第二轮 3 人；
10. Choice Map；
11. 导出 Session JSON。

不要求：

- 精美动画；
- 注册登录；
- 云数据库；
- 多端同步；
- AI；
- 无限剧情。

---

## 8. 第一版文案可以非常朴素

核心是验证规则。

人物、事件可以先直接显示：

> JSON 中的固定 description / template。

不要为了文案自然：

> 接入 AI。

如果某个结果缺文案：

> 新增固定模板。

---

## 9. 必须实现可回放

Session JSON 必须包含：

- 玩家输入；
- 每轮候选人；
- attraction / would_consider；
- 选择谁；
- 每个事件；
- action；
- response code；
- outcome tags；
- 关系状态 before / after；
- tolerance；
- reason code；
- evidence delta；
- Hypothesis 状态；
- Contrast Pack；
- Choice Map。

给同一份 Session 输入重跑：

> 必须得到同样结果。

---

## 10. 自动测试最低要求

必须把：

`spec/v0/test-fixtures.json`

变成自动测试。

至少证明：

- 硬约束过滤；
- 首轮顺序；
- Career/Time/Reliability Pack；
- Social/Predictability Pack；
- attraction gate；
- Evidence 主因 / 次因权重；
- 没 probe 不记 evidence；
- Lifestyle tie break；
- 第三轮反转触发；
- 重放一致。

另外每个 Event Resolver：

> 至少 HIGH / MID / LOW 三个边界测试。

---

## 11. 完成定义

只有同时满足才算开发完成：

### 文件

- 可以本地启动；
- 所有 spec 能加载；
- 无 schema / ref 错误。

### 行为

- 完整跑通 2～3 轮；
- 无 AI；
- 无随机；
- Session 可导出；
- Choice Map 可追溯。

### 测试

- test fixtures 全通过；
- event resolver 边界测试通过；
- 同一 fixture 连续重放 10 次完全一致。

### 原需求

用户可以：

> 不和 ChatGPT 对话，单独打开这个产品，按固定规则完成一次关系模拟。

达到这里以后，才进入：

> 真人 First Playable 验证。

---

## 12. 开发结束以后回传什么

返回：

- 当前 commit；
- 本地运行方法；
- 自动测试结果；
- 哪些 fixture 通过；
- 哪些规则实现中发现歧义；
- 哪些没有实现；
- 可供真人试玩的入口。

不要开发完以后偷偷修改产品文档来适配代码。
