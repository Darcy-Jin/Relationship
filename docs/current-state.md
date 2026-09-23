# Current State｜当前工作状态

更新时间：2026-09-24

## 当前阶段

**确定性游戏引擎 v0 规格已完成 → 规格一致性验证通过 → 下一步进入程序实现。**

当前不再用 ChatGPT 主持的试玩作为正式验证。

---

## 已经完成

- 完成亲密关系与共同生活系统研究；
- 形成完整领域模型；
- 形成简化游戏模型；
- 完成文本版 First Playable；
- 完成设计压力测试；
- 确认第一版正式产品采用纯固定规则，不使用 AI；
- 形成确定性引擎架构；
- 定义人物维度、Hypothesis、Evidence Rule；
- 建立固定人物库；
- 建立固定事件库；
- 建立 5 组 Contrast Pack；
- 定义关系状态和 Event Resolver；
- 定义 Choice Map 固定生成规则；
- 定义 Session JSON Schema；
- 建立固定 Test Fixtures；
- 做完机器级引用一致性检查；
- 修复社交边界隐式推断，新增独立 `boundary_respect`；
- 完成开发交接。

---

## 当前正式入口

### 项目

- `README.md`
- `docs/current-model.md`
- `docs/decisions.md`

### 当前产品

- `docs/game-model-v0.md`

### 确定性引擎

- `docs/engine/deterministic-engine-v0.md`
- `docs/engine/rulebook-v0.md`
- `spec/v0/README.md`
- `spec/v0/*.json`

### 开发

- `docs/engine/implementation-handoff.md`

### 规格验证

- `docs/engine/spec-validation-v0.md`

---

## v0 正式运行原则

```text
固定人物
+
固定事件
+
固定规则
+
结构化玩家输入
+
固定 Evidence 更新
+
固定 Contrast Pack 选择
+
固定输出模板
```

不使用：

- LLM；
- 随机人物生成；
- AI 剧情；
- 自由文本语义分析；
- 隐藏总分；
- 动态“猜你真正想要什么”。

---

## 当前引擎六块

```text
Player Profile
↓
Candidate Library
↓
Scenario Engine
↓
Evidence Engine
↓
Contrast Selector
↓
Choice Map
```

所有判断都要求：

> 能从最终结果追溯到玩家具体做过的选择和具体事件。

---

## 当前已经固定的关键规则

### 人物没有总分

候选人由独立维度构成。

不能把 trait 相加排序。

### 玩家自由文本不参与计算

可以保存备注。

但只有结构化字段影响运行。

### 玩家的真实承受反馈是核心证据

每个事件结束以后由玩家自己选：

- LIKE；
- ACCEPT；
- CHANGE_REQUIRED；
- CANNOT_CONTINUE。

程序不能替玩家算“你应该痛苦”。

### 负面原因必须结构化

CHANGE_REQUIRED / CANNOT_CONTINUE 后：

> 玩家从当前场景固定 reason code 里选主因 / 次因。

程序不做自然语言理解。

### 第二轮不动态生成人

系统根据当前 Hypothesis：

> 从 5 个固定 Contrast Pack 中确定性选择一组 3 人。

### 最终不是匹配分

输出：

> Choice Map。

包括：

- 必须有；
- 喜欢但不是必须；
- 最难承受；
- 能接受的不完美；
- 愿意交换；
- 当前共同生活类型；
- 仍然未知。

---

## 规格一致性验证

当前机器检查：

> **0 个引用错误。**

已经验算：

- 首轮硬约束过滤；
- Career / Time / Reliability Pack；
- Social / Predictability Pack；
- reason code 映射；
- Candidate / Event / Hypothesis / Pack 引用。

详细：

`docs/engine/spec-validation-v0.md`

---

## 下一步

进入：

> **程序实现。**

开发依据：

`docs/engine/implementation-handoff.md`

实现完成的最低要求：

1. 本地 Web 可运行；
2. 不联网、不调用 AI；
3. 能完整跑 2～3 轮；
4. 能导出 Session JSON；
5. `test-fixtures.json` 自动测试全部通过；
6. 所有 Event Resolver 有 HIGH / MID / LOW 边界测试；
7. 同一输入重放 10 次结果完全一致。

只有这些完成以后：

> 才开始第一次正式真人试玩。

---

## 当前暂不做

- 不继续扩关系论文；
- 不用 ChatGPT 代替游戏运行；
- 不加入 AI；
- 不润色大量剧情；
- 不做账号系统；
- 不做云数据库；
- 不做商业模式；
- 不重新设计已确认的业务规则。
