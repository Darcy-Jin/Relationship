# Current State｜当前工作状态

更新时间：2026-09-24

## 当前阶段

**确定性 Rule Engine 已实现并通过自动测试 → 发现 Player UI 视角错误 → 游戏体验完成重新建模 → 准备实现 First Life 垂直切片。**

当前原 Web 不再作为正式真人试玩 UI。

---

## 已经完成

- 完整关系领域研究；
- 简化游戏模型；
- 纯固定规则引擎；
- 25/25 自动测试；
- 游戏模式对标；
- 明确 Relationship 不是婚恋测评，而是亲密关系模拟人生；
- 明确不同人生阶段可以使用不同游戏形态；
- 完成 First 10 Minutes + First Life v0 体验设计；
- 明确现有 Web 降级为 Engine Debug UI；
- 明确 Rule Engine 与 Experience Layer 分离。

---

## 当前正式入口

### 产品

- `README.md`
- `docs/current-model.md`
- `docs/decisions.md`
- `docs/game-model-v0.md`

### 体验设计

- `docs/research/07-gameplay-benchmark-experience-model.md`
- `docs/product/first-10-minutes-first-life-v0.md`

### 后台规则

- `docs/engine/deterministic-engine-v0.md`
- `docs/engine/rulebook-v0.md`
- `spec/v0/`

### 当前代码

当前确定性 Web 已实现，但定位调整为：

> **Engine Debug UI**

它继续用于：

- 规则测试；
- Evidence 检查；
- Session 回放；
- Contrast Pack 检查；
- 自动测试。

不用于正式玩家体验验证。

---

## 当前玩家体验主线

```text
开始这一年
↓
先后遇见几个人
↓
发生很短的自然互动
↓
选择最想继续认识的人
↓
第一次约会
↓
决定是否继续
↓
三个月后
↓
轻量日常事件
↓
半年 / 一年时间推进
↓
共同生活开始形成
↓
重大事业场景
↓
真正需要对方的 Crisis
↓
几年后的继续 / 改变 / 离开决定
↓
这一段人生的回忆
↓
再活一次
```

玩家只面对：

> 人、生活、选择和后果。

后台继续运行：

> Candidate / State / Evidence / Hypothesis / Contrast Pack。

---

## 当前最重要的体验规则

### 不从测评开始

第一分钟不再让玩家填写：

- 钱多重要；
- 陪伴多重要；
- 最怕选错什么；
- 理想伴侣是什么。

第一版只保留真正必要的世界设定。

### 不显示人物分数

人物先成为：

> 一个具体的人。

玩家看到：

- 长相 / 形象；
- 名字；
- 工作；
- 生活；
- 对话；
- 行为。

不是：

> 事业 9 / 陪伴 3 / 可靠 8。

### 不显示 Evidence 语言

`LIKE / ACCEPT / CHANGE_REQUIRED / CANNOT_CONTINUE`

继续保留在后台。

前台改成：

> 玩家那个时刻自然会说 / 会做的事。

### 不显示 reason code

需要原因时问：

> **“你现在最想跟他说什么？”**

选项是自然对白。

后台再映射固定 reason code。

### 第一段人生结束先给 Memory

不立刻输出：

> “你的真实需求是什么。”

先让玩家看：

> 这一段人生里真正发生过什么。

至少两段人生以后，才允许进入可选 Reflection。

---

## 当前下一步

实现：

> **First 10 Minutes + First Life 的 Player Experience 垂直切片。**

只做：

1. 开始人生；
2. 4 个 Encounter；
3. 选择继续认识谁；
4. First Date；
5. 三个月后的关系；
6. 3 个轻 Event；
7. 共同生活 Scene；
8. Career Opportunity Scene；
9. Crisis Scene；
10. Final Decision；
11. Memory Timeline；
12. “再活一次”入口。

暂时不做完整第二段人生。

---

## 下一阶段验证问题

垂直切片完成以后，第一个真人测试只看：

> **玩家会不会忘记后台有规则，只觉得自己真的和一个人过了几年。**

主要观察：

- 前十分钟有没有想继续认识某个人；
- 人物有没有存在感；
- 选择像不像真实反应；
- 普通 Event 是否够轻；
- 大 Scene 是否真的有重量；
- 时间跳跃是否还能保持关系连续；
- 第一段人生结束时，玩家能不能说：
  > “和这个人生活，大概就是这种感觉。”

只有这层成立，再进入第二段人生和多 Run 校准。
