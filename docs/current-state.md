# Current State｜当前工作状态

更新时间：2026-09-24

## 当前阶段

**确定性 Rule Engine 已完成 → Player Experience 已重构 → First 10 Minutes + First Life 垂直切片已实现 → 下一步真人试玩。**

现在有两个明确分开的产品入口：

```text
/play/
→ 给玩家玩的模拟人生体验

/
→ Engine Debug UI
```

正式真人试玩只使用：

> **/play/**

---

## 已经完成

- 完整关系领域研究；
- 简化游戏模型；
- 纯固定规则引擎；
- Engine Debug UI；
- 游戏模式对标；
- First 10 Minutes + First Life 体验设计；
- 4 个初始人物 Encounter；
- 4 套不同 First Date；
- 三个月后的关系推进；
- 3 个轻量日常 Event；
- 半年时间跳跃；
- 1 个候选人专属反复问题；
- 共同生活 / 公平 Scene；
- Career Opportunity 重大 Scene；
- Crisis Scene；
- 四年后的关系决定；
- Memory Timeline；
- First Life JSON 导出；
- Player Experience 12/12 规则适配测试；
- Player Experience GitHub 源码与本地测试源码 SHA 对齐；
- 服务入口支持 /play/。

---

## 当前正式入口

### 玩家体验

- `play/README.md`
- `play/`
- `docs/product/first-10-minutes-first-life-v0.md`
- `docs/product/first-life-implementation-v0.md`

### 后台规则

- `docs/engine/deterministic-engine-v0.md`
- `docs/engine/rulebook-v0.md`
- `spec/v0/`

### 调试

- 根目录 `/`
- Engine Debug UI

---

## 怎么运行

仓库根目录：

```bash
npm start
```

然后打开：

### 正式玩家版

```text
http://127.0.0.1:4173/play/
```

### 后台调试版

```text
http://127.0.0.1:4173/
```

测试：

```bash
npm test
```

---

## 玩家当前会经历什么

```text
开始这一年
↓
先后遇见四个人
↓
短互动 + 第一感觉
↓
选择最想继续认识的人
↓
第一次约会
↓
决定是否继续
↓
三个月后
↓
日常生活
↓
半年后
↓
反复出现的小问题
↓
真正一起过日子
↓
事业机会
↓
真正需要对方的时候
↓
四年后的继续 / 改变 / 犹豫 / 离开
↓
这一段人生的回忆
```

玩家不会看到：

- trait 数值；
- Hypothesis；
- Evidence；
- reason code；
- Contrast Pack；
- Relationship State。

这些只在后台。

---

## 当前还没做

- 第二段人生的正式 Contrast Experience；
- 多段人生后的 Reflection；
- 正式人物图片 / 立绘；
- 性别和恋爱对象偏好；
- 孩子 / 婚姻 / 老年完整系统；
- AI；
- 商业化。

当前“再活一次”只是重新开始 First Life。

这是当前范围，不是 Bug。

---

## 下一步

**第一次真人试玩 Player Experience。**

现在不再继续加功能。

试玩重点只看：

1. 前 10 分钟有没有想继续认识某个人；
2. 人物有没有存在感；
3. 选择像不像真实反应；
4. 日常 Event 是否轻；
5. Career / Crisis 是否有重量；
6. 时间跳跃后关系是否仍然连续；
7. Memory Timeline 是否产生“一段人生”的感觉；
8. 哪些地方仍然像做题；
9. 玩家玩完能不能自然说：
   > “和这个人生活，大概就是这种感觉。”

有真实证据以后，再局部修改 Experience Layer。
