# Relationship · Blind Date v2

当前正式相亲开场试玩入口。

## 目标

先把一件事做对：

> **用尽量少、但真正有信息量的交互，让玩家看见不同的人，并形成“还想不想继续见”的真实判断。**

## 当前流程

```text
4 个候选人一眼看全
↓
现实资料直接展示
↓
选一个见面
↓
2～3 个角色特异 Probe
↓
人物根据玩家回答真实回应
↓
还想不想再见
↓
回到 4 人总览，可继续比较
```

## 设计依据

- `docs/product/first-life-v2-blind-date-opening.md`
- `spec/v0/information-model.json`
- `spec/v0/interaction-contracts.json`
- `docs/research/10-mate-selection-decision-factor-and-interaction-design.md`

## 本地

```text
http://127.0.0.1:4173/play-v2/
```

## GitHub Pages

```text
https://darcy-jin.github.io/Relationship/play-v2/
```

桌面端 4 人并排；手机端自动 2×2。

## 现在明确不做

- 不继续扩三个月后；
- 不显示匹配分；
- 不自动认为相似更适合；
- 不用 AI 生成对话或判断；
- 不做无功能的“继续 / 坐下聊聊”按钮。
