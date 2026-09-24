# Relationship Deterministic Engine v0 Spec

这里是 **纯固定规则版本**的机器可读 Source of Truth。

v0 明确：

> **不联网、不调用 AI、不理解自由文本。**

实现入口先读：

1. `../../docs/engine/deterministic-engine-v0.md`
2. `../../docs/engine/rulebook-v0.md`
3. 本目录 JSON
4. `test-fixtures.json`

## 文件职责

- `information-model.json`：正式四层信息模型（现实条件 / 资源分配 / 关系过程 / 生活领域）与七种信息获取方式；
- `interaction-contracts.json`：要求玩家操作的交互节点 Contract 与首轮人物差异化 Probe；
- `dimensions.json`：当前仍参与确定性计算的人物维度、开局自评映射、结构化输入选项；
- `hypotheses.json`：Hypothesis、证据权重、reason code 映射；
- `candidates.json`：固定候选人物库；
- `events.json`：固定事件、action、probe、reason code；
- `contrast-packs.json`：第二轮固定对照包；
- `lifestyle-templates.json`：最终共同生活模板；
- `output-templates.json`：Trade-off 和结果模板；
- `session-schema.json`：完整 Session 数据结构；
- `test-fixtures.json`：必须通过的固定规则夹具。

## Source of Truth 优先级

出现冲突时：

```text
已确认 Decisions
↓
deterministic-engine-v0.md
↓
rulebook-v0.md
↓
spec/v0/*.json
↓
历史 First Playable / Research
```

如果实现发现规则无法落地：

> 不允许开发自行改变产品规则。

先把冲突交回产品设计。

## 修改规则时

任何影响运行结果的修改必须同时检查：

- 对应 Markdown 规则；
- 对应 JSON；
- test fixtures；
- 已有真实试玩记录是否仍可解释。

不要只改代码。


## v0.2 信息层与计算层

从 2026-09-24 起正式区分：

```text
Information / Experience Model
→ 决定玩家应该看到什么、怎样得到信息、为什么值得交互

Deterministic Engine
→ 决定哪些结构化输入当前真的参与 Evidence / State / Contrast 计算
```

`information-model.json` 中存在、但尚未进入 `dimensions.json` / Resolver 的字段：

> 可以用于展示和确定性 Probe，但暂时不能声称已经参与最终 Evidence 计算。

新增计算规则时必须补：dimensions / hypothesis / resolver / fixture，不能只在前端读一个新字段就影响结论。
