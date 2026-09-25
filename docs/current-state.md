# Current State｜当前工作状态

更新时间：2026-09-25

## 项目级状态

**Relationship 与 AI Comic 的知识体系已经合并。**

现在项目正式按三层理解：

~~~text
Relationship
│
├─ 底层
│  ├─ 人物模型
│  ├─ 关系 / 共同生活模型
│  └─ 选择 / 时间 / 取舍
│
├─ 游戏层
│  └─ 把底层模型变成可体验的可能人生
│
└─ AI 漫画层
   └─ 把底层模型变成可快速理解和传播的漫画内容
~~~

游戏层和 AI 漫画层是两个平级应用层，共享同一个底层。

本轮已经完成：

- 原 ai-comic 的 5 份研究资料完整迁入 Relationship；
- AI Comic 已成为 Relationship 的正式 AI 漫画层，不再维护平行人物知识；
- 新增 [人物模型 v0.1](models/person-model.md)；
- “标签 → 场景 → 行为 → 条件性模式 → 变化方向 → 共同生活”已进入正式 Current Model；
- 游戏模型已接入人物模型作为上位约束；
- 原 ai-comic 仓库已删除；它的正式资产和研究资料已并入 Relationship。
- [本次重构记录](history/2026-09-25-relationship-ai-comic-consolidation.md) 已保存，记录旧资产去向和新路由。

### 当前真实验证状态

人物模型当前是：

> **已正式晋升（Promoted），但还没有完成跨游戏 / 漫画的真实验证。**

所以这次没有直接重写 Rule Engine 或候选人 Spec。

下一步真实运行会分别验证：

- **游戏**：现有人物是否仍然像几个标签拼成的“人设”；
- **漫画**：标签误判、场景反差、长期取舍能不能形成真正有用的内容。

---

## AI 漫画当前阶段

**第一版内容结构和第一篇选题已经确认，不再继续打磨脚本，下一步直接出图并发布验证。**

当前 MVP：

~~~text
两页 = 一个小章节

第 1 页
→ 熟悉的标签 / 好坏反差

第 2 页
→ 换一种需要 / 生活方式 / 视角
→ 立刻把刚才的判断翻过来

复制 2 组
→ 4 页内容

最后 + 1 页
→ 轻量点题 + 互动 / 评论引导
~~~

当前第一篇：

> **互联网大厂男友：高薪，但没时间**

正式脚本：

- `docs/content/ai-comic/scripts/001-big-tech-boyfriend-v0.md`

本轮原则：

> **先发真实样本，不为了“更完美”继续拖。**

发布以后再用真实反馈决定哪些结构需要调整。


---

## 游戏当前阶段

**确定性 Rule Engine + 信息/交互模型 v0.2 已正式晋升 → /play-v2/ 相亲试玩版已按新模型重构 → 下一步继续试玩并迭代第一次相亲。**

现在有三个明确分开的入口：

```text
/play-v2/
→ 当前正式相亲开场试玩版

/play/
→ 旧版完整 First Life，保留作为历史体验参考

/
→ Engine Debug UI
```

当前迭代相亲开场时只使用：

> **/play-v2/**

---

## 已经完成

- 完整关系领域研究；
- 目标用户 / 认知—体验差距研究；
- 相亲信息、择偶判断与交互设计研究；
- 四层 Information Model 正式晋升；
- 七种信息获取方式正式晋升；
- Interaction Contract 正式晋升；
- “未来体验 → 自我校准”机制研究，并已晋升到正式产品定位；
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

### 当前玩家体验

- `play-v2/`
- `docs/product/first-life-v2-blind-date-opening.md`
- `spec/v0/information-model.json`
- `spec/v0/interaction-contracts.json`

### 旧版完整 First Life

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

### 当前相亲试玩版

```text
http://127.0.0.1:4173/play-v2/
```

### 旧版完整 First Life

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

## 手机端

当前 /play-v2/ 与 /play/ 都支持手机和电脑。/play-v2/ 桌面优先 4 人并排，手机自动切成 2×2。

### 同一 Wi-Fi

电脑执行 `npm start` 后，终端会直接打印手机可访问的局域网地址：

```text
Phone on the same Wi-Fi:
http://<电脑局域网IP>:4173/play/
```

### 公网测试

GitHub Pages 部署工作流已准备好。

由于 GitHub App 不能替仓库 Owner 第一次开启 Pages，需要用户在 GitHub Settings -> Pages 手动把 Source 设为 GitHub Actions 一次。

之后可以从 Actions 手动运行 `Deploy Relationship Player`。

预期公网玩家地址：

```text
https://darcy-jin.github.io/Relationship/play-v2/
```

旧版：

```text
https://darcy-jin.github.io/Relationship/play/
```

详细：`docs/product/mobile-testing.md`

---
## 当前新模型

正式区分：

```text
Candidate Facts
→ 现实中直接知道

Resource Allocation
→ 时间 / 钱 / 精力 / 注意力 / 空间 / 计划性

Relationship Process
→ 回应 / 可靠 / 公平 / 边界 / 冲突 / 修复

Event Domains
→ 钱 / 房 / 工作 / 家务 / 孩子 / 父母 / 社交 / 健康 / 亲密 / 迁移 / 休闲
```

信息获取方式：Show / Ask / Compare / Conversation / Scene-Probe / Consequence / Clarify。

凡要求玩家点击的节点必须有 Interaction Contract。

## 游戏当前下一步

**只继续打磨 /play-v2/ 的第一次相亲。**

试玩重点看：

1. 四个人的现实条件是否一眼看懂；
2. 钱、房、学历等信息是否够用但不压过人物本身；
3. 每次点击是否都有明确作用；
4. 四个人的对话是不是明显不同；
5. 对方是否真的根据玩家回答接话；
6. 是否出现真实 trade-off，而不是寻找正确答案；
7. 最后的“还想不想见”是否有足够依据。

这一阶段不继续扩三个月后的人生。
