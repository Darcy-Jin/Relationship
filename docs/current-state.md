# Current State｜当前工作状态

更新时间：2026-09-26

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

**当前已经从“身份校准 / 大范围画风探索”进入“正式设计底座 + 第一版 Character Style 选择”阶段。**

### 已完成

#### 1. 两位长期 Actor Identity 已进入可用状态

~~~text
Male Actor Identity
= Darcy

Female Actor Identity
= Wife
~~~

女主：

- Root / Support Master 已建立；
- `profile_subject_left` 已验证为 `MASTER-SUP-06`。

男主：

- 当前 + 年轻真人 Evidence 已正式进入共享 Identity Runtime；
- Front / 3Q 当前保留 Candidate；
- `profile_subject_left` 已人工确认并登记为 `DARCY-SUP-PROFILE-LEFT-01`。

原则：

> **真人 Identity 继续由 personal-ai-system 的 Human Visual Identity 能力维护，Relationship 不再复制一套身份方法。**

#### 2. 漫画资产架构已经重构

正式区分：

~~~text
Person Identity
= 真人是谁

Story Role
= 真人在故事里演谁

Role Transformation
= 允许角色离真人多远

Visual System
= 整部漫画怎么呈现

Comic Episode
= 这一篇具体讲什么
~~~

正式入口：

- `docs/content/ai-comic/asset-architecture-v1.md`

#### 3. Visual System v1 已建立

过去分散在：

- `character-style-model-v0.md`
- `visual-style-space-v0.md`
- `character-and-viewpoint-v0.md` 的部分视觉内容

已经重新整理。

当前正式视觉设计底座：

- `docs/content/ai-comic/visual-system-v1.md`

Visual System 正式拆成：

~~~text
Character Style
Scene Style
Composition
Color / Lighting
Text System
Page Layout
~~~

并使用四种状态管理：

- Locked；
- Default；
- Open；
- Episode。

这样单篇漫画不会重新决定已经确认的长期规则。

#### 4. 角色与叙事视角已重构

`character-and-viewpoint-v0.md` 已缩回它真正负责的范围：

> **一格画谁、站谁的处境、谁可以缺席。**

它不再维护：

- 真人面部定义；
- 画风候选；
- 资产架构；
- 历史身份校准。

原长版已归档到 `docs/history/`。

#### 5. 旧画风探索已退出 Runtime

原：

- `character-style-model-v0.md`
- `visual-style-space-v0.md`

已归档后从当前 ai-comic 目录删除。

历史探索继续保留在：

- `docs/history/2026-09-26-ai-comic-visual-style-exploration-v0.md`

当前 Runtime 不再从旧 A～F 方案读取。

---

### 当前 Character Style 状态

当前只保留三个正式候选：

1. **A｜Identity-safe 轻手绘都市漫画**
2. **B｜清爽都市线稿平涂**
3. **C｜轻半写实生活插画**

三套候选统一要求：

> **漫画化不能覆盖真人 Identity。**

第一次画风试验不进入 Story Role，并进一步简化为两个独立单人实验：

~~~text
Darcy Exact Identity Baseline
→ A / B / C

Wife Exact Identity Baseline
→ A / B / C
~~~

本轮不先生成双人图，也不额外生成中性 Baseline。

优先使用：

- Darcy：`DARCY-SRC-005`
- Wife：`MASTER-ROOT-01`

这样先回答：

> **同一套 Character Style 能不能对两个不同真人都稳定成立？**

选出 Style v1 后，再回头做双人验证。

### 2026-09-26 实际执行反馈：第一轮 A/B/C 被判 Invalid

本轮真实执行暴露了 Runtime 问题，不是画风候选本身的问题。

连续出现两次错误路径：

1. 没有把 Darcy / Wife Exact Identity 真正绑定进图像执行器，结果重画成陌生夫妻；
2. 后续虽然系统先检索并查看了正确 Identity 资产，但图像调用仍是自由生成，模型自己画了假的 Reference + A/B/C 比较海报。

因此两次结果全部：

> **Rejected / 不进入任何 Style Preference 证据。**

失败分类：

~~~text
Execution Protocol Failure
+
Runtime Capability Gap
~~~

不是：

~~~text
Identity Profile Failure
Style Candidate Failure
~~~

当前已经回灌到 `personal-ai-system`：

- Visual Style Design 新增 Style Comparison Execution Gate；
- 新增 Style Comparison Run Contract；
- Character Identity Regression 增加“不能伪造 Reference / Comparison Board”；
- Work Routing 增加 Exact Asset / Multi-subject Runtime Gate；
- Visual Identity Cloud Runtime v0.2.4 增加 Capability Preflight。

随后已经继续补齐 Runtime。

当前 Cloud Runtime v0.3.0 能力：

~~~text
Exact Target Binding
→ Supported

Single Identity Asset Binding
→ Supported

Multi-subject Binding
→ Supported

Cross-identity Reference Binding
→ Supported

Project / Composite Experiment Target
→ Supported
~~~

新增 `experiment_edit`：

> **允许一个 Exact Target + 多个不同 Identity 的 Exact Reference 进入同一次视觉实验，并把实验 Artifact 与 Run Sidecar 单独保存在 Object Storage。**

因此“多人绑定能力缺失”已经解决。

Direct Binary Transfer 这条缺口随后又做了真实验证。

曾尝试：

~~~text
ChatGPT Library Exact Asset
↓
Private Personal Plugin
↓
mcp.json
↓
remote visual-identity-mcp
↓
Supabase Storage
~~~

但该方案被验证为：

> **当前 ChatGPT Web 路线错误。**

原因不是 MCP Server 在本地。

而是 OpenAI 当前产品规则：

> **Imported / portable plugin 只要声明 MCP server（例如 `mcp.json` / `.mcp.json`），即使 Server 是 remote HTTPS，也会进入 Desktop-only 范围，不能作为 ChatGPT Web Plugin 使用。**

因此：

- `personal-ai-visual-identity v0.1.0` 不再代表可用 Web Runtime；
- `visual-identity-mcp` 后端保留为 Future Adapter；
- Google Drive 临时中转继续禁止；
- 不能再把“远程 MCP 已部署”写成“ChatGPT Web 已打通”。

当前真实状态：

~~~text
ChatGPT Library Exact Asset
→ 当前 ChatGPT 可以读取 / materialize

Supabase Storage
→ Cloud Runtime 可以读取

ChatGPT Web → Supabase 的 Direct Binary Handoff
→ 当前 personal surface 尚无已验证可用路径
~~~

另外，OpenAI 当前自定义 MCP App 属于另一套能力：

- 可用于 Web；
- 当前官方主要面向 Business / Enterprise / Edu；
- MCP Apps 当前不支持 Mobile。

所以它也不能被当成当前个人 ChatGPT Web + Mobile 的通用解法。

随后单人 Style A 又做了一次真实执行，仍然暴露同一个根因：

~~~text
系统正确找到并显示 DARCY-SRC-005
↓
但 image_gen 实际运行：
edit_op = null
parent_gen_id = null
↓
自由生成陌生人物 + A/B/C 海报
~~~

因此该输出再次：

> **Rejected / 不进入 Style Preference 证据。**

这次以后不再把问题描述成“ChatGPT Web Direct Binary Handoff”这么窄。

personal-ai-system 已把正式架构改为：

~~~text
identity_id / asset_key
↓
Asset Resolver
↓
READY / NEEDS_CANONICALIZATION / BLOCKED
↓
Executable Asset Handle
↓
Provider Adapter
~~~

并明确分工：

- Skill：只定义 Exact Asset / Preserve / Gate；
- Visual Identity Agent：选择 asset_key、调用 Resolver、编排执行；
- Asset Resolver / Runtime：真正找到 Binary、canonicalize、生成 Executable Handle；
- Plugin / App / Work / Web UI：只是 Source / Surface Adapter；
- Provider Adapter：真正把 Exact Handle 送进图片模型。

正式入口：

- `Darcy-Jin/personal-ai-system/runtime/visual-identity/asset-resolution-and-handoff.md`

当前真实资产状态：

~~~text
Wife MASTER-ROOT-01
→ canonical_ready
→ Supabase Storage
→ Resolver READY

Darcy DARCY-SRC-005
→ canonical_ready
→ Supabase Storage
→ Resolver READY
~~~

2026-09-26，Darcy 历史 Library Source 已通过 ChatGPT Work 完成一次性 Canonicalization：

- Exact Library source：`current-02.jpg`，181576 bytes；
- Canonical object：`identity-assets/identities/darcy/sources/current-02.jpg`；
- Source / Canonical SHA-256 一致；
- Source MD5 与 Storage object eTag 一致；
- Asset Resolver 已实际重查返回 `READY`；
- Executable Asset Handle 可取得。

因此：

> **“Darcy Exact Asset 还不能进入 Cloud Runtime”这个 Blocker 已关闭。**

Work 浏览器本身仍会拦截原 import page，但 Runtime Adapter 已通过 token-bound JSON upload + Supabase `pg_net` 完成端到端验证。

当前剩余 Blocker：

1. **Darcy Style A 已做第一次合法真实执行；**
2. **Exact Asset Binding 已通过，请求真实到达 OpenAI Image API；**
3. **Provider 返回 HTTP 429 / `credit_balance_exhausted`，因此没有生成图片。**

本次 OpenAI request id：

> `req_73c91ada69294f8596c3ee48f6b71ac4`

因此现在可以明确排除：

- Identity Asset 问题；
- Resolver 问题；
- Exact Binding 问题；
- Style A Contract 问题。

当前唯一真实 Blocker：

> **Provider credits。**

所以现在准确停点是：

> **补 Provider credits → 原样重试 Darcy A → 通过 Gate 后再做 B / C → Wife A / B / C。**

仍然不允许回到 ChatGPT Web 自由 generation 代替 Exact Controlled Edit。

---

### 当前 Visual System 状态

| 模块 | 状态 |
|---|---|
| 平台 / 3:4 竖图 | Locked |
| 真人 Identity 边界 | Locked |
| Character Style | Open / 单人 A-B-C 待执行；双人验证后置 |
| Scene Style | Default |
| Composition | Episode |
| Color / Lighting | Default |
| Text System | Default |
| Page Layout | Default + 3:4 Locked |

---

### AI 漫画下一步

当前改为两条线并行，不再让 Character Style 阻塞内容规划。

#### A｜视觉生产线

~~~text
补 Provider credits
↓
Darcy A / B / C
↓
Wife A / B / C
↓
Identity + Control Variable Gate
↓
Human Comparison
↓
锁定 Relationship Character Style v1
↓
双人同画面验证
↓
Story Role + Role Transformation
↓
Story Role Master
↓
Character Sheet
↓
进入正式页面生产
~~~

正式实验入口：

- `docs/content/ai-comic/experiments/single-person-character-style-experiment-v1.md`

#### B｜内容规划线

`docs/content/ai-comic/content-model.md` 已整理为完整两层模型：

~~~text
第一层｜Content Generation
这个人 × 这个特点 × 这段生活 × 我的需要
↓
形成真正值得讨论的问题
↓
形成标题与 Content Brief

第二层｜Content Composition
标题
↓
若干两页小章节
↓
每个小章节：特点进入生活 → 换一种需要重新看
↓
最后一页收口 / 互动
~~~

当前内容规划已经新增：

- `docs/content/ai-comic/content-map-v0.1.md`

当前正式内容空间：

~~~text
人物 / 标签 / 特点
×
生活场景
  = 人生阶段 × 共同生活领域 × 事件 / 压力
×
伴侣需要 / 生活方式
↓
Topic Candidate
↓
Content Brief / 标题 / Episode Script
~~~

首轮已用 `docs/content/ai-comic/topic-pool-v0.1.md` 的 9 个不同候选题验证三维结构。当前没有发现必须新增第四个平级内容维度；“关系过程”继续作为跨维机制，“时间”继续放在生活场景的人生 / 关系阶段中。

人物 / 标签 / 特点库 v0.1 已建立：`docs/content/ai-comic/person-label-feature-library-v0.1.md`。

当前先保留七组用户语言入口：现实条件 / 身份、工作 / 事业 / 经济、性格 / 气质、关系表现、生活方式 / 习惯、家庭 / 婚育 / 边界、负面警示。标签只作为入口，每个标签继续还原成 Possible Meanings、Do Not Infer、Observable Handles 和 High-value Scenes。

第一批优先深化 15 个高价值标签，包括大厂 / 高收入、事业心强、工作稳定、老实、脾气好、情绪稳定、强势、顾家、靠谱、独立、自律、节俭、爱社交、孝顺、家庭观念强。

下一步建设 **生活场景库 v0.1**：沿“人生 / 关系阶段 × 共同生活领域 × 事件 / 压力”展开，避免把场景做成一张扁平清单。

当前仍不做：

- 双人 Style Experiment；
- 大范围扩画风候选；
- 每页重新设计人物；
- 先做完整 Scene / Prop Library；
- 因视觉卡点停止内容资产建设。


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
