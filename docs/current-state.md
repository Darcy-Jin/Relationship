# Current State｜当前工作状态

更新时间：2026-09-24

## 当前阶段

**确定性游戏引擎 v0 已实现并通过自动测试 → 准备第一次正式真人试玩。**

正式试玩必须跑当前程序，不再使用 ChatGPT 临场主持替代引擎。

---

## 已经完成

- 完成亲密关系与共同生活系统研究；
- 形成完整领域模型和简化游戏模型；
- 完成确定性引擎规格、Rulebook 和机器可读 Spec；
- 实现纯规则 Web 产品；
- 实现固定人物、固定事件、Evidence、Hypothesis、Contrast Pack、Choice Map；
- 实现第二轮和必要时第三轮；
- 实现 Session JSON 导出；
- 实现显式 attraction 评分和是否考虑；
- 第二轮全部不考虑时允许结束，不强迫选择；
- 完成 25 个自动测试；
- 完成静态 Web smoke test；
- GitHub 源码快照与本地测试快照 SHA-256 校验一致。

---

## 当前正式入口

### 产品和模型

- `README.md`
- `docs/current-model.md`
- `docs/game-model-v0.md`
- `docs/decisions.md`

### 确定性引擎

- `docs/engine/deterministic-engine-v0.md`
- `docs/engine/rulebook-v0.md`
- `spec/v0/README.md`
- `spec/v0/*.json`

### 实现和验证

- `docs/engine/implementation-result-v0.md`
- `docs/engine/spec-validation-v0.md`
- `docs/validation/playtest-template.md`

---

## 怎么运行

仓库根目录：

```bash
npm start
```

浏览器打开：

```text
http://127.0.0.1:4173
```

自动测试：

```bash
npm test
```

需要查看普通源码文件时：

```bash
npm run materialize
```

---

## 当前实现的核心循环

```text
结构化开局
↓
固定 4 个候选人
↓
玩家逐个给主观吸引和“是否考虑”
↓
选 1 人
↓
固定生活事件
↓
玩家行动
↓
固定规则决定对方回应
↓
玩家自己判断能不能接受
↓
负面时选择结构化原因
↓
Evidence / Hypothesis 更新
↓
确定性选择 Contrast Pack
↓
第二轮 / 必要时第三轮
↓
Choice Map
↓
导出 Session JSON
```

没有 AI、没有随机数、没有隐藏总分。

---

## 自动验证结果

当前：

> **25 / 25 tests passed。**

覆盖：

- 11 个规则 fixture；
- 11 类 Event Resolver 的 HIGH / MID / LOW 边界；
- 确定性重放；
- Evidence 更新；
- 固定事件顺序；
- 完整两轮路径到 Choice Map。

静态启动 Smoke Test：

> **PASS**

源码快照：

- 长度：`29896`
- SHA-256：`ed330f1cdc51d64cba91df0242cef64181c047c8ed561a98d6acae2892d25684`

GitHub 端拼接结果与本地测试快照一致。

---

## 当前仍然不知道什么

自动测试只能证明：

> 程序按我们写的规则稳定运行。

还不能证明：

- 人物是否真实；
- 游戏是否好玩；
- 玩家会不会觉得像做题；
- Evidence 权重是否合适；
- Contrast Pack 是否真的有启发；
- Choice Map 是否让玩家认识自己；
- 玩家会不会出现“原来我在乎的不是 X，是 Y”。

这些只能靠真人试玩。

---

## 下一步

**第一次正式真人试玩。**

试玩时：

1. 直接运行当前程序；
2. 不向玩家解释后台 Hypothesis；
3. 完整玩到 Choice Map；
4. 导出 Session JSON；
5. 使用 `docs/validation/playtest-template.md` 记录真实反馈；
6. 根据真实证据局部修改人物、事件、规则或交互。

在真人试玩前，不继续扩大功能范围。
