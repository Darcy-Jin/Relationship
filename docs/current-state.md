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

**第一版内容结构和第一篇选题已经确认。当前正在完成正式出图前的角色 / 视觉基线，完成后直接生成第一篇并发布验证。**

2026-09-25 本轮已经完成一项新的视觉验证：

- 明确区分“角色设定”和“画风”：先固定人，再比较画风；
- 女性代入角色不采用理想化“大美女”路线；
- 当前视觉基线为：普通、真实、有少量不完美，靠妆容 / 发型 / 穿搭 / 状态变得更好看；
- 已完成“素颜 / 居家 → 上班 / 淡妆 → 约会 / 认真打扮”的同一人物三状态试画；
- 用户已确认这一版人物方向可以继续使用；
- 该试画只确认**人物基线**，不代表最终画风已经确定。
- 女性代入角色新增一个**并行的“老婆脸版”**；原普通女性角色基线继续保留，不删除、不覆盖。
- 老婆脸版正式 Source of Truth：`docs/content/ai-comic/characters/female-wife-face-v0.md`，已重构为 **Current Definition v1**。
- 此前 v0.1–v0.10 的试画、纠偏、比例假设和参考策略已完整归档到 `docs/history/2026-09-26-wife-face-identity-calibration-v0.1-v0.10.md`，不再作为当前运行入口。
- 当前阶段：**Current Identity Calibration｜当前身份校准**。
- 当前只使用最开始上传的近期扎发生活照作为主生成参考；年轻时期披发 / 短发照片只在漂移时用于历史身份纠偏。
- 当前已确认的核心方向：**视觉上小而紧凑、偏窄长椭圆的头脸；五官相对集中；头顶圆润；颧骨 / 苹果肌有体积；柔和下颌；圆润下巴；下颊 / 下巴两侧保留少量软组织；眼神软、松、略朦胧；习惯性微笑有一点努嘴角和略僵的本人特点。**
- “真实物理头围是否明显更小”、粗测比例等继续保留为**工作假设 / 辅助观察**，不作为生成硬规则。
- 胖瘦和软组织多少全部后置：先让用户确认“这张脸基本就是她”，再微调胖瘦。
- 当前验证方式改为**单张真人原图 → 单张 AI 生成 → 非生成式并排比较**。原真人照片必须保持原文件，禁止让图像模型重画“原图”。
- 下一轮只验证第一张近期正脸；通过后再逐张验证戴眼镜、笑容和轻 3/4。全部通过后才冻结 **Female Current Identity Master v1**，之后再进入多画风。

- 男性角色正式采用“固定 IP 脸 + 可变故事角色”：以后使用用户本人作为男性 IP 原型，同一张脸可以进入不同职业、条件、生活方式和关系故事；未来切换男性视角时，同一 IP 从“对方”转为“我”。
- 用户已提供正脸、左右侧脸、不同笑容、穿衣近景和全身照，第一版男性 IP 参考已经足够；
- 《男性 IP 外貌与形象约束》已更新为 V2：采用“轻优化还原”，保留本人真实五官身份，但默认取更瘦一点、更精神一点、更适合长期内容呈现的状态；头发 / 发型不作为身份锚点；
- 证件类照片不进入后续主要生成参考，普通生活照片已经足够。
- 用户补充了较年轻、较瘦、精神状态更好的历史生活照；这些照片已提升为男性 IP 状态主参考，当前浴室裸上身近景降级为结构辅助参考，不再代表长期 IP 的默认状态。
- 第一版男性角色设定板实测后，用户判断“脸不太像本人”；当前问题已从“继续调提示词”上提为 **Identity Fidelity（身份相似度）+ Character Consistency（角色一致性）**。
- 已完成一轮外部研究并保存到 `docs/research/2026-09-25-ai-comic-character-identity-preservation.md`。当前研究结论：先建立 Identity Master，再测试漫画化，不应直接用真人参考去一次性生成复杂角色板。
- 这轮仍是 **Research-only / 待实测**，尚未修改正式生产规范。
- 男性 IP 当前视觉目标进一步明确为：**本人真实身份 + 合理的最佳日常状态**。验收优先级：像本人 > 状态好 > 好看 > 画风。
- 男性 IP 的笑容机制已进一步锁定：笑时颧骨和苹果肌上提、下眼睑与外眼角参与、眼睛自然变窄但保持有神；亲和力不再只写抽象气质词，而要通过“笑到眼睛”的可见结构变化表现。
- 男性 IP 的身份边界进一步确认：**骨相、面相、五官关系永久锁定；胖瘦可以根据职业、年龄、生活方式和故事变化。**
- 用户已确认一组正脸 / 侧脸版本“真的很像”，后续应冻结为 Identity Master；大厂员工等角色只在 Identity Master 上改变发型、胖瘦、皮肤、穿搭、精神状态和场景，不再重新生成一套脸。
- 男性 IP 的发型、发量、发际线、胖瘦、胡须、皮肤和体态已正式视为**故事角色状态变量**，不参考用户本人当前现实状态；由角色年龄、职业、工作压力、生活方式、性格和人生阶段决定。
- 第一篇“大厂员工男主”已形成独立视觉设定：`docs/content/ai-comic/characters/001-big-tech-boyfriend-v0.md`。

正式入口：

- `docs/content/ai-comic/character-and-viewpoint-v0.md`
- `docs/content/ai-comic/visual-style-space-v0.md`

### AI 漫画接下来

按顺序继续：

~~~text
保留普通女性角色基线
↓
老婆脸版：只选 1 张近期真人正脸做第一轮校准
↓
真人原图保持不变，AI 只生成对应角色图
↓
非生成式并排比较
↓
先修身份结构 / 五官位置 / 眼神 / 表情
↓
用户确认“基本就是她”
↓
再调胖瘦 / 苹果肌 / 下颊软组织
↓
再验证眼镜 / 笑容 / 轻 3/4
↓
冻结 Female Current Identity Master v1
↓
进入多画风对比
↓
生成《互联网大厂男友》正式图
~~~

仍然遵守：

> **先发真实样本，不为了“更完美”无限继续设计。**

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
