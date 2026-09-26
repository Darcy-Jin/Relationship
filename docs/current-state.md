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

### 2026-09-26 方法升级：Style Screening ≠ Style Lock

本轮对标 Human Visual Identity Evidence、动画 Character Model Sheet 和 subject personalization 后，正式修正：

> **单一 Baseline 的 A/B/C 只负责筛选画风方向，不足以直接证明长期生产稳定。**

新的正式路径：

~~~text
Darcy / Wife
Exact Baseline → A/B/C
↓
Human Screening
↓
Shortlist
↓
Representative Identity Coverage Stress Test
- different view
- expression
- half / full body（业务需要时）
↓
Style v1 Lock
↓
双人验证
~~~

真人长期资产同时从单纯 View Coverage 上提为：

> **Identity Coverage**

包含 View / Dynamics / Whole-person / Appearance / Temporal / Imaging / Rendering 等维度。

通用方法继续由：

- `Darcy-Jin/personal-ai-system/skills/character-identity-preservation/references/identity-evidence-coverage.md`

维护，Relationship 不复制方法。

### 2026-09-26 Identity Coverage 盘点已完成

已按新方法直接读取云端现有资产，没有要求用户重新上传，也没有生成新图。

Darcy：

- 当前 Exact Baseline：`DARCY-SRC-005`；
- 左侧纯侧脸：Validated；
- Front / Light 3Q：Validated；
- 当前自然 / 轻微表情：已有 Source Evidence；
- 当前大笑：已有 `DARCY-SRC-004`；
- 当前全身 / 站姿：已有 `DARCY-SRC-004`；
- 年轻时期：已有 3 张辅助 Evidence；
- 当前说话 / 坐姿 / 右侧纯侧脸：当前 Missing；
- 当前 identity_scope 仍为 Face，Whole-person Evidence 已登记，但未升级成正式 Whole-Person Identity。

Wife：

- 当前 Exact Baseline：`MASTER-ROOT-01`；
- Front / Light 3Q / 左侧纯侧脸：Validated；
- Neutral / Slight Smile / Speaking / Teeth Smile：Validated；
- Glasses：Validated；
- Full Body / Standing：已有多张高置信 Source Evidence；
- Half Body / Seated：已有自然生活 Evidence；
- 右侧纯侧脸：当前 Missing，但不是当前 Character Style 实验的前置阻塞；
- 当前 identity_scope 仍为 Face，Whole-person Source Evidence 很丰富，但未升级成正式 Whole-Person Identity。

Task Readiness：

~~~text
Phase 1｜Single-person A/B/C Screening
Darcy → Ready
Wife  → Ready

Phase 2｜Representative Coverage Stress Test
Darcy → Partial
Wife  → Ready from Coverage perspective
~~~

Darcy 的 Partial 不是“没有全身图”，而是：

- 部分 Stress-test 资产还在 Library，需要真正执行时再 canonicalize；
- Dynamics 覆盖弱于 Wife；
- Whole-Person Identity 还没正式确定 Scope。

下一步不先补拍大批照片。

先继续现有 Character Style Phase 1；Shortlist 以后，再只为实际选中的 Stress-test Coverage 补运行准备或真人 Evidence。


### 2026-09-26 Identity Coverage Asset Plan v1 已建立

正式项目方案：

- `docs/content/ai-comic/experiments/identity-coverage-asset-plan-v1.md`

本方案明确：

- Relationship 两位长期 Actor 使用较完整的 v1 Identity Coverage，而不是只为当前单张任务补最小缺口；
- 每个 Coverage Slot 同时区分 Source Evidence、Validated Production Asset 和 Presentation Artifact；
- 不要求原图直接承担所有生产任务；
- 原图负责现实依据，经过 Gate 的 Root / Support / Branch / Identity Style Master 可以作为更有效的生产资产；
- 当前项目字段“生产首选资产（Preferred Production Asset）”只用于指明某个 Slot 当前最适合的 Exact Asset，不新增平行 Source of Truth；
- Character Sheet 继续是 Deterministic Presentation Artifact，不反向定义 Person Identity；
- Person Identity 与 Story Role / Appearance State / Visual System 保持分离。

Runtime 已同步本 Plan 的核心 Coverage Slot 和 P0/P1/P2 状态。

当前 Human Gate 结果：

- Darcy `DARCY-CAND-FRONT-01` → Validated Support Master；
- Darcy `DARCY-CAND-3Q-01` → Validated Support Master；
- 用户原话：`这4张图可以的`；
- 对应 Runtime Coverage：Front / Light 3Q = Validated / high confidence；
- 两张新 Support Master 当前仍是 Library Binary，后续正式 Controlled Runtime 使用前需要 canonicalize。

当前下一步：

~~~text
Darcy + Wife P1
补关键 View / Dynamics / Whole-person Production Asset
↓
Character Style Screening
↓
Coverage Stress Test
↓
Style v1 Lock
~~~

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

### 2026-09-26 当前执行状态：Matter 与 Adapter 已重新分层

此前 `Darcy Style A` 已经完成一次合法的 OpenAI Direct Adapter 验证：

~~~text
DARCY-SRC-005
→ Asset Resolver READY
→ Exact Target Binding
→ OpenAI Direct Adapter
→ HTTP 429 / credit_balance_exhausted
~~~

这条 Run 证明：

- Darcy Exact Asset / Resolver / Exact Binding 链路成立；
- **OpenAI Direct Adapter** 当前因 Provider credits 暂停。

但它只是一条 Adapter 的运行证据，不再上升为整个 Character Style Matter 的唯一 Blocker。

当前正式系统已经把 Provider 与真人身份方法解耦：

~~~text
Identity / Asset / Gate
= 稳定业务层

Execution Adapter
├─ ChatGPT Web
├─ OpenAI Direct
├─ 国内模型
└─ 其他 Provider
~~~

当前开发 / 自用优先 Surface 是 ChatGPT Web，但受控 A/B/C 仍要求：

> **Exact Baseline 必须真实进入图像编辑上下文，不能用自由生成代替。**

当前两张 Baseline 都已经在 Supabase Canonical Store，Resolver = READY：

- Darcy：`DARCY-SRC-005`；
- Wife：`MASTER-ROOT-01`。

当前已经把 Self-use Exact Asset Handoff 的**后端段**真正实现并验证：

~~~text
Supabase Exact Asset
↓
purpose-bound one-time export token
↓
visual-identity-surface-mcp
↓
MCP image content
~~~

Darcy `DARCY-SRC-005` 回归结果：

- returned bytes = `181576`；
- returned SHA-256 = `6ae0d8b4f546689e4acc07c3889ac5ac8e6a92591f3c8d6213e6c1811d504d24`；
- 与 Canonical Asset 一致；
- one-time token 已消费；
- MCP 返回 `text + image`。

私有 Plugin 已升级为：

> `personal-ai-visual-identity v0.2.0`

当前剩下的是**ChatGPT Surface 最后一跳**：

~~~text
Plugin tool 在当前 Surface 可发现？
↓
MCP 返回的 exact image 真正进入 Current Image Context？
↓
Image Executor 能证明 Exact Target Binding？
~~~

当前控制面出现不一致：

- Plugin suggestion 报 `already_installed`；
- App permission 检查报 `not_installed`；
- 当前聊天 Tool Discovery 没有发现 v0.2 工具。

因此当前自用路线的准确停点进一步收窄为：

> **blocked_surface_plugin_discovery**

执行前现在必须读取：

- `Darcy-Jin/personal-ai-system/runtime/visual-identity/execution-routing.json`

并形成唯一 `Execution Route Snapshot`；历史 Run 只作为 Evidence，不能重新决定 Adapter。

而不是：

> `Provider credits` 或 `Backend Handoff`。

`credit_balance_exhausted` 继续只保留为 OpenAI Direct Adapter 的组件状态；如果未来主动选择该 Adapter，再处理它的额度即可。

当前不允许的 fallback 继续不变：

- 普通自由 `image_gen` 冒充 Exact Edit；
- 根据文字重建一个“像的人”；
- 让用户重新上传系统已经持有的资产；
- 因某个 Provider 不可用就改变 A/B/C 实验语义。

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
确认 v0.2 Plugin 在当前 ChatGPT Surface 的安装 / Tool Discovery
↓
验证 MCP Exact Image → Current Image Context → Exact Target Binding
↓
Darcy Exact Baseline → A / B / C
↓
Wife Exact Baseline → A / B / C
↓
Identity + Control Variable Gate
↓
Human Screening
↓
Representative Identity Coverage Stress Test
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

内容规划已经完成一轮 **Coverage-first Research → Multi-view Modeling → Combination Space → Priority Set**，不再从少量标签直接向下展开。

当前正式内容空间：

- `docs/content/ai-comic/content-map-v0.2.md`

研究底座：

~~~text
Person Space
20 sources
290 Raw Items
47 Canonical Concepts

Scene Space
20 sources
364 Raw Items
50 Canonical Coordinates

Need / Fit Space
20 sources
212 Raw Items
47 Canonical Concepts
~~~

当前内容生成主线：

~~~text
Person
×
Scene
×
Need / Fit
↓
Constrained Combination Space
↓
Topic Gate
↓
Priority Set
↓
Content Brief
↓
Episode Script
~~~

重要修正：

- Person 不再是一棵“七类标签树”，而是 Profile / Context / Lay Labels / Values / Capabilities / Lifestyle / Relationship Process 等多个 View；
- Scene 不再只是“人生阶段 × 生活领域 × 事件”，而是继续加入 Task / Resource Reallocation、Concrete Scene 和 Pattern / Time Dynamics；
- Need 不再只是“陪伴 / 空间 / 安全”等清单，而是继续区分 Need Content、Need Shape、Fulfillment Mechanism、Fit Mode、Trade-off 和 Safety Boundary；
- 旧 15 个标签已降级为 Seed / Regression Set，不再作为研究前确定的 Priority；
- `candidate-combinations-v0.1.csv` 保留第一轮弱组合作为失败证据；
- `candidate-combinations-v0.2.csv` 已收紧阶段 / Trigger / Feature 语义约束，共 2733 个候选组合；
- `topic-priority-audit-v0.1.csv` 已形成 30 个 Priority Candidate；
- `docs/content/ai-comic/topic-priority-set-v0.1.md` 已形成首批 15 + 后备 15。

当前首批 15 不是“最重要的 15 种人”。

它们是为了用较少真实内容覆盖：

- 事业 / 工作；
- 钱 / 房；
- 父母 / 家庭边界；
- 自主 / 社交；
- 生活习惯；
- 情绪 / 沟通；
- 可靠 / 修复；
- 婚育方向；
- 家务 / Mental Load；

以及恋爱、同居、婚后、育儿、中年、Crisis 等不同阶段 / 场景。

### 内容规划下一步

当前不继续扩大标签数量，也不继续把 2733 个组合自动写成标题。

下一步从首批 15 里挑 **3～5 个差异足够大的 Topic**，正式进入：

~~~text
Topic
↓
Content Brief
↓
标题
↓
2 页小章节 × N
↓
收口
↓
Episode Script
~~~

用真实内容验证：

1. 这套大内容空间能不能稳定产生好内容；
2. Scene 是否具体、自然、能画；
3. Need / Fit 的 Reframe 是否真实；
4. 当前两页小章节结构是否够用；
5. 哪些后台研究维度在真正生产时仍有缺口。

这条内容规划线不依赖 Character Style 先完成。

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
