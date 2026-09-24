# Relationship

一个关于亲密关系选择的模拟游戏。

它不是“理想对象匹配器”。

它想帮助玩家通过几段不同的共同生活，慢慢看清：

1. **我真正需要什么？**
2. **我最不能承受什么？**
3. **为了得到真正需要的东西，我愿意接受哪些不完美？**

最终问题：

> **什么样的不完美的人，和什么样的不完美生活，对我来说仍然值得选择？**

## 当前核心

我们最后选择的不只是一个人。

> **我们是在选择：和这个人在一起以后，我会过什么样的人生。**

所以 v0 不使用：

- 人类价值总分；
- 固定 100 点人物；
- 隐藏匹配分；
- “事业高就一定不顾家”这类机械因果；
- AI 临场解释。

当前核心循环：

```text
我以为自己要什么
↓
选择一个人
↓
真的过一段生活
↓
发现哪里舒服、哪里痛苦
↓
系统按固定证据规则形成多个 Hypothesis
↓
下一轮加载固定对照人物
↓
继续体验
↓
形成自己的 Choice Map
```

目标不是把玩家调成所有属性都中等。

> **可以很挑，但要知道自己到底在挑什么。**

## 当前阶段

**纯固定规则 v0 已经开发完成。**

现在进入：

> **第一次正式真人试玩。**

当前版本：

- 无 AI；
- 无随机数；
- 无第三方运行依赖；
- 支持 2～3 轮模拟；
- 支持导出完整 Session JSON；
- 25 / 25 自动测试通过。

## 运行

需要 Node.js。

```bash
git clone https://github.com/Darcy-Jin/Relationship.git
cd Relationship
npm start
```

然后打开：

```text
http://127.0.0.1:4173
```

运行自动测试：

```bash
npm test
```

如果想把当前已测试源码快照还原成普通 `src/` 和 `tests/` 文件：

```bash
npm run materialize
```

源码快照为什么这样保存，见：

- [.source/README.md](.source/README.md)

## 现在从哪里继续

默认恢复顺序：

```text
personal-ai-system/README.md
↓
本 README
↓
docs/current-state.md
↓
docs/current-model.md
↓
docs/game-model-v0.md
↓
docs/engine/implementation-result-v0.md
```

### 当前工作状态

- [Current State](docs/current-state.md)

### 当前正式模型

- [当前核心模型 v0.2](docs/current-model.md)
- [简化游戏模型 v0.1](docs/game-model-v0.md)
- [确定性引擎 v0](docs/engine/deterministic-engine-v0.md)
- [确定性规则 Rulebook v0](docs/engine/rulebook-v0.md)
- [机器可读 Spec v0](spec/v0/README.md)

### 实现

- [实现结果 v0](docs/engine/implementation-result-v0.md)
- [开发交接](docs/engine/implementation-handoff.md)
- [开发交付与验证](docs/engine/development-evidence-v0.md)

### 当前验证

- [Engine Spec Validation](docs/engine/spec-validation-v0.md)
- [真人试玩记录模板](docs/validation/playtest-template.md)
- [First Playable 设计压力测试](docs/validation/01-first-playable-design-stress-test.md)

### 历史原型

- [First Playable v0.1（ChatGPT / 人工主持原型）](docs/first-playable-v0.md)

它只保留设计历史，不再作为正式真人验证方式。

## 研究档案

- [01｜第一轮研究](docs/research/01-initial-findings.md)
- [02｜完整共同生活模型研究计划](docs/research/02-comprehensive-model-plan.md)
- [03｜证据地图](docs/research/03-evidence-map.md)
- [04｜完整共同生活模型](docs/research/04-comprehensive-relationship-model.md)
- [05｜System Impact](docs/research/05-system-impact.md)
- [06｜自适应选择机制依据](docs/research/06-adaptive-choice-playtest-basis.md)

Research 保存“为什么”。

日常继续工作优先读：

> `current-state` + `current-model` + `game-model-v0`。

## 和 personal-ai-system 的关系

`Darcy-Jin/personal-ai-system` 保存通用的研究、建模、开发和系统演化方法。

Relationship 只保存这个具体产品的长期上下文和实现。

> **通用方法不复制，具体成果留在这里。**
