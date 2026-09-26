# Relationship｜Identity Coverage Asset Plan v1

> Date: 2026-09-26  
> Status: Approved Plan / Ready for Incremental Execution  
> Scope: Darcy + Wife 两位长期 Actor 的真人视觉身份资产  
> Purpose: 为 Relationship 长期漫画生产建立较完整、可复用、可追溯的真人视觉身份覆盖，而不是只依赖单张 Baseline。

---

# 1. 先统一概念

本方案沿用 `personal-ai-system` 的正式概念。

## 1.1 真人身份（Person Identity）

回答：

> **这个真人是谁。**

它不包含虚构职业、剧情性格、故事穿搭。

Relationship 中：

- `darcy` = Darcy Person Identity；
- `wife` = Wife Person Identity。

---

## 1.2 原始证据（Source Evidence）

真人原始照片、视频帧等现实观察。

它回答：

> **现实中的这个人到底是什么样。**

Source Evidence 是现实证据，不要求每张都适合直接进入生成模型。

---

## 1.3 已验证生成证据（Validated Generated Evidence）

经过人工身份识别（Human Recognition）和必要的一致性 Gate 后通过的生成资产，例如：

- 根主图（Root Master）；
- 支撑主图（Support Master）；
- 分支主图（Branch Master）；
- 身份风格主图（Identity Style Master）。

它们可以成为高效的生产资产，但不能抹掉 Source Evidence 的现实依据地位。

---

## 1.4 身份覆盖（Identity Coverage）

回答：

> **系统已经看清这个人的哪些状态，哪些还没有。**

当前 v1 使用：

- 视角 / 几何（View / Geometry）；
- 表情 / 动态（Expression / Dynamics）；
- 全身 / 身体与姿势（Whole-person / Body & Pose）；
- 外观状态（Appearance State）；
- 时间状态（Temporal State）；
- 成像状态（Imaging State）；
- 渲染 / 画风（Rendering / Style）。

---

## 1.5 覆盖槽位（Coverage Slot）

`Coverage Slot` 是当前方法已经使用的运行概念。

一个 Slot 例如：

- `view_pose / front`
- `expression_dynamics / speaking`
- `whole_person / full_body`

本方案的“全部补出来”指：

> **把 Relationship 长期漫画真正需要的 v1 Coverage Slot 都建立出来。**

不是穷举所有人类可能状态，也不做视角 × 表情 × 穿搭 × 姿势的笛卡尔积。

---

## 1.6 身份表示（Identity Representation）

不是某一张图片。

它是：

> **所有可信 Evidence 共同支持的“这个人是谁”的当前模型。**

Master 只是高置信资产，不等于整个 Identity。

---

## 1.7 任务就绪度（Task Readiness）

回答：

> **当前 Coverage 对某一个具体任务够不够。**

例如：

- 单张画风预览可以只靠高质量 Anchor；
- 长期漫画生产需要更丰富的 View / Dynamics / Whole-person Coverage。

---

## 1.8 最少充分参考包（Minimal Sufficient Reference Pack）

长期 Evidence Pool 可以很丰富。

但某一次 Run 不把全部资产都塞给模型。

正式原则：

> **从长期 Coverage 中，只选当前 Target 真正需要的最少互补证据。**

---

# 2. “最有效的图”怎么定义

本方案不使用：

> “原图优先”  
> 或  
> “生成图优先”

这种单一规则。

而是按资产角色决定。

## 2.1 现实证据优先保存 Source Evidence

只要是：

- 真实脸型；
- 真实身体比例；
- 真实动态；
- 真实年龄 / 外观状态；

都应保留 Source Evidence。

---

## 2.2 生产时优先使用最适合当前 Slot 的已验证资产

为了描述这个计划中的选择，本文件使用一个项目字段：

> **生产首选资产（Preferred Production Asset，当前计划字段）**

它不是新的 AI System 顶层对象。

它只表示：

> **在这个 Coverage Slot 已有多个 Evidence / Master 时，当前生产最优先从哪一个 Exact Asset 开始。**

选择顺序不是“生成图永远更好”，而是看：

1. 身份保真（Identity Fidelity）；
2. Slot 信息是否直接、干净；
3. 是否已经通过 Human Gate；
4. 是否标准化到适合重复生产；
5. 当前 Runtime 是否能 Exact Binding；
6. 是否会携带无关背景 / 服装 / 人物导致属性串线。

---

# 3. 每个 Coverage Slot 允许三层资产同时存在

~~~text
Source Evidence
= 现实依据

Validated Production Asset
= 已验证、适合稳定生产的 Master / Validated Asset

Presentation Artifact
= Coverage Board / Character Sheet 等确定性展示
~~~

正确关系：

~~~text
Source Evidence
↓
Identity Representation + Coverage
↓
Validated Production Asset
↓
Presentation Artifact
~~~

Presentation Artifact 不反向定义 Identity。

---

# 4. Relationship v1 Coverage Target

这是两位长期 Actor 的 v1 目标集合。

## 4.1 View / Geometry

- Front
- Light 3/4
- Opposite 3/4
- Profile Subject Left
- Profile Subject Right

## 4.2 Expression / Dynamics

- Neutral
- Slight Smile
- Broad / Teeth Smile
- Speaking
- Serious / Focused
- Tired / Thinking

## 4.3 Whole-person / Body & Pose

- Half Body
- Full Body
- Standing
- Seated
- Walking
- Common Gesture

## 4.4 Appearance State

只维护真正高频、会反复进入漫画的状态。

当前：

- Default Hair
- Glasses（Wife 已明确；Darcy 暂不作为必选）

服装不在这里固定。

服装进入：

> Story Role / Appearance State / Episode。

## 4.5 Temporal State

- Current
- Younger（只有已有价值或故事需要时维护）

当前：

- Darcy：Current + Younger；
- Wife：Current 为主。

## 4.6 Imaging State

至少保证两类 Evidence：

- 受控身份图（Controlled Identity Portrait）
- 自然生活证据（Naturalistic Life Evidence）

前者负责“看清”。

后者负责“看真”。

## 4.7 Rendering / Style

当前目标：

- Relationship Character Style v1

Style Lock 后，再建立对应：

> Identity Style Master。

---

# 5. Darcy｜Coverage Asset Plan

> 当前 Identity Scope：Face Identity  
> Whole-person Evidence 已有，但是否提升为 Whole-Person Identity 以后单独过 Human Gate。

| Dimension | Coverage Slot | Current State | Current Evidence / Asset | Preferred Production Asset | Gap / Next Action |
|---|---|---|---|---|---|
| View | Front | Validated | DARCY-SRC-004/005 + DARCY-CAND-FRONT-01 | DARCY-CAND-FRONT-01 | Human Gate 已通过；已晋升 Support Master。当前 Binary 仍在 Library，正式 Controlled Runtime 使用前需 canonicalize |
| View | Light 3/4 | Validated | DARCY-SRC-004/005 + DARCY-CAND-3Q-01 | DARCY-CAND-3Q-01 | Human Gate 已通过；已晋升 Support Master。当前 Binary 仍在 Library，正式 Controlled Runtime 使用前需 canonicalize |
| View | Opposite 3/4 | Missing | — | 待建立 | 用当前 Source + validated geometry 生成 Working Candidate |
| View | Profile Left | Validated | DARCY-SUP-PROFILE-LEFT-01 | DARCY-SUP-PROFILE-LEFT-01 | 已完成 |
| View | Profile Right | Missing | — | 待建立 | 不能镜像左侧；从多视角 Evidence 生成并过 Cross-view Gate |
| Dynamics | Neutral | Evidence Available | DARCY-SRC-005 | 当前先用 DARCY-SRC-005 | 若需要标准生产图，再建立 Dynamics Support Master |
| Dynamics | Slight Smile | Missing / weak | 当前 Source 没有干净标准版本 | 待建立 | 优先从现有真人 Evidence 查找；没有再 Controlled Generate |
| Dynamics | Broad Smile | Evidence Available | DARCY-SRC-004 + younger sources | 当前证据用 DARCY-SRC-004 | 建标准化当前年龄 Dynamics Support Asset |
| Dynamics | Speaking | Missing | — | 待建立 | 高价值 Gap；优先真实视频帧 / 真人 Evidence，其次生成 Candidate |
| Dynamics | Serious / Focused | Missing | — | 待建立 | 用于工作 / 决策类漫画；生成后 Human Gate |
| Dynamics | Tired / Thinking | Missing | — | 待建立 | 用于长期关系 / 工作状态表达 |
| Whole-person | Half Body | Weak | younger / current sources可提供部分信息 | 待标准化 | 当前年龄专用 Half-body asset |
| Whole-person | Full Body | Evidence Available | DARCY-SRC-004 | 先以 DARCY-SRC-004 为 Source | 若 Whole-Person Scope 确认，建立标准 Full-body Support Master |
| Whole-person | Standing | Evidence Available | DARCY-SRC-004 | 同上 | 与 Full Body 共用证据，不重复造资产 |
| Whole-person | Seated | Missing | — | 待建立 | 漫画高频，优先补 |
| Whole-person | Walking | Missing | — | 待建立 | 作为动作稳定性 Coverage |
| Whole-person | Common Gesture | Evidence Available / weak | DARCY-SRC-004 等生活照 | 暂不固定 | 观察 Episode 高频动作后再锁代表动作 |
| Appearance | Default Hair | Evidence Available | DARCY-SRC-004/005 | 跟随 Current Identity Anchor | 不单独造 Master，除非发型变化成为真实需求 |
| Temporal | Current | Evidence Available | DARCY-SRC-004/005 | DARCY-SRC-005 为 Face Anchor | 已满足当前生产 |
| Temporal | Younger | Evidence Available | DARCY-SRC-001/002/003 | 不作为 current 默认生产资产 | 只作为年龄轨迹辅助 Evidence |
| Imaging | Controlled Portrait | Validated | Front / 3Q / Profile 已通过 Human Gate | 对应 Validated Support Master | 三个核心受控视角均已验证；Front / 3Q 仍需 canonicalize 到正式 Binary Store |
| Imaging | Naturalistic Life | Evidence Available | DARCY-SRC-004/005 | Source only | 已有 |
| Rendering | Relationship Style v1 | Missing | A/B/C 尚未合法执行完成 | 待建立 Identity Style Master | Style Screening → Stress Test → Lock |

### Darcy 当前优先顺序

~~~text
P0 completed
Front / 3Q Human Gate → Passed
↓
P1
Opposite 3Q + Right Profile
↓
P1
Speaking + Serious / Focused + Tired / Thinking
↓
P1
Half Body + Seated
↓
P2
Walking / Common Gesture
↓
Style v1 Identity Style Master
~~~

注意：

> Broad Smile / Full Body 已有真人 Evidence，不应因为背景不标准就把它当“缺失”。

正确动作是：

> Source 保留 → 需要生产时再建立标准化 Validated Asset。

---

# 6. Wife｜Coverage Asset Plan

> 当前 Identity Scope：Face Identity  
> Whole-person Evidence 已经很丰富，但是否提升 Whole-Person Identity 同样以后过 Human Gate。

| Dimension | Coverage Slot | Current State | Current Evidence / Asset | Preferred Production Asset | Gap / Next Action |
|---|---|---|---|---|---|
| View | Front | Validated | MASTER-ROOT-01 + Source | MASTER-ROOT-01 | 已完成 |
| View | Light 3/4 | Validated | MASTER-SUP-04 | MASTER-SUP-04 | 已完成 |
| View | Opposite 3/4 | Candidate | ROBUST-01 | Candidate，不作为默认生产资产 | 需要 Human Gate / 重新建立更清晰 Candidate |
| View | Profile Left | Validated | MASTER-SUP-06 | MASTER-SUP-06 | 已完成 |
| View | Profile Right | Missing | — | 待建立 | 不能镜像左侧；生成后过 Cross-view Gate |
| Dynamics | Neutral | Validated | MASTER-ROOT-01 | MASTER-ROOT-01 | 已完成 |
| Dynamics | Slight Smile | Validated | MASTER-SUP-01 | MASTER-SUP-01 | 已完成 |
| Dynamics | Broad / Teeth Smile | Validated | MASTER-SUP-03 | MASTER-SUP-03 | 已完成 |
| Dynamics | Speaking | Validated | MASTER-SUP-02 | MASTER-SUP-02 | 已完成 |
| Dynamics | Serious / Focused | Missing | Source 里有自然状态但无标准资产 | 待建立 | 漫画高频，补标准 Dynamics Asset |
| Dynamics | Tired / Thinking | Missing | — | 待建立 | 漫画高频，补标准 Dynamics Asset |
| Whole-person | Half Body | Evidence Available | SRC-001 / SRC-003 | 当前先用 Source Evidence | 如 Whole-Person Scope 确认，建立标准 Half-body Support |
| Whole-person | Full Body | Evidence Available | SRC-002/005/006/007 | Source Evidence 很充分 | 建一个最干净的标准 Full-body Support |
| Whole-person | Standing | Evidence Available | SRC-002/005/006/007 | 可与 Full Body 共用 | 不重复造 Master |
| Whole-person | Seated | Evidence Available | SRC-009 等自然生活证据 | Source Evidence | 若漫画高频坐姿，再做标准 Seated Support |
| Whole-person | Walking | Missing | — | 待建立 | 动作稳定性 Coverage |
| Whole-person | Common Gesture | Evidence Available | SRC-003/005/006 等 | 暂不固定 | Episode 高频后再确定代表 Gesture |
| Appearance | Default Hair | Validated by current master set | MASTER-ROOT-01 / SUP assets | 跟随当前 Master | 已满足 |
| Appearance | Glasses | Validated | MASTER-SUP-05 + Sources | MASTER-SUP-05 | 已完成 |
| Temporal | Current | Validated | Root + 多张 Source | MASTER-ROOT-01 为 Face Anchor | 已完成 |
| Imaging | Controlled Portrait | Validated | Root / Support Master Bank | 对应 Slot Master | 已完成大部分 |
| Imaging | Naturalistic Life | Evidence Available | SRC-001~009 | Source only | 已有 |
| Rendering | Relationship Style v1 | Missing | A/B/C 尚未合法执行完成 | 待建立 Identity Style Master | Style Screening → Stress Test → Lock |

### Wife 当前优先顺序

~~~text
P0
Opposite 3Q Gate / Right Profile
↓
P1
Serious / Focused + Tired / Thinking
↓
P1
标准 Full-body / Half-body Production Asset
↓
P2
Walking / Seated Standardization（按漫画需要）
↓
Style v1 Identity Style Master
~~~

---

# 7. 什么要“生成标准图”，什么继续用原图

## 7.1 原图直接够用

如果 Source Evidence：

- 信息直接；
- 主体清楚；
- 没有严重遮挡；
- 不会导致 Reference Role 混淆；

就可以直接承担 Evidence 或 Runtime Reference。

不为了“看起来整齐”重新生成。

---

## 7.2 应该建立标准化 Validated Asset

下面情况优先把真人 Source 转成标准生产资产：

- 原图背景 / 人物过多；
- 目标 Slot 信息不集中；
- 需要长期反复作为 Identity Anchor；
- 要和其他角度 / 表情做一致性比较；
- 长期 Character Style / Episode 生产需要稳定输入。

流程：

~~~text
Source Evidence
+
Existing Identity Anchors
↓
Working Candidate
↓
Human Recognition
+
Cross-evidence / Control Gate
↓
Validated Support / Branch Master
~~~

---

## 7.3 不能因为缺原图就一律自由生成

Coverage 缺失时继续按正式 Acquisition Strategy：

~~~text
现有 Evidence Pool
↓
Library / History / Video 能否恢复？
↓
是否值得补真人 Source？
↓
再决定生成 Working Candidate
↓
Human Gate
~~~

生成 Candidate 仍是 Hypothesis。

---

# 8. Character Sheet 怎么做

当上述 v1 Coverage 基本建立后，再生成：

> **角色设定卡（Character Sheet）**

但必须是：

> **确定性组合（Deterministic Composition）**

使用：

- Exact Source / Master；
- Approved Production Asset；
- Coverage metadata。

不得让生成模型重画整张 Sheet。

第一版 Character Sheet 可以组织：

~~~text
Face / View
- Front
- 3Q
- Left Profile
- Right Profile

Dynamics
- Neutral
- Smile
- Speaking
- Focused
- Tired / Thinking

Whole-person
- Half Body
- Full Body
- Standing
- Seated / Walking

Appearance
- Glasses / Default Hair 等

Identity Style
- Character Style v1 标准资产
~~~

Story Role 的：

- 职业；
- 穿搭；
- 配饰；
- 生活方式；
- 道具；

另做 Story Role Character Sheet / Section，不污染 Person Identity。

---

# 9. 当前执行路线

正式顺序：

~~~text
A. 补齐 Person Identity v1 Coverage
   ↓
   先复用已有 Source / Master
   ↓
   再建立真正需要的标准生产资产

B. Phase 1｜Character Style Screening
   Darcy / Wife A/B/C
   ↓
   Shortlist

C. Phase 2｜Coverage Stress Test
   Shortlisted Style
   × View
   × Dynamics
   × Whole-person
   ↓
   Identity + Style Stability

D. Style Lock
   ↓
   Identity Style Master

E. Deterministic Character Sheet
   ↓
   Story Role / Episode
~~~

---

# 10. 完成标准

本 Plan v1 完成不是：

> “图片数量够了”。

而是：

1. v1 Coverage Slot 都有明确状态；
2. 重要 Slot 至少有可信 Source Evidence；
3. 高频生产 Slot 有 Validated Production Asset；
4. 每个 Slot 的 Preferred Production Asset 明确；
5. Missing 是真的缺，不是系统没发现已有图；
6. Character Style v1 在代表性 Coverage 上验证；
7. Character Sheet 只组织已确认资产，不重新发明人物。

