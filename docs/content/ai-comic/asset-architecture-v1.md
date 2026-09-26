# Relationship AI Comic｜资产架构 v1

> 目的：把“真人是谁”“他在故事里演谁”“漫画怎么画”“一篇漫画具体需要什么”分开管理。  
> 原则：固定的东西长期复用；变化的东西只在对应层变化；角色设定卡是汇总视图，不是 Source of Truth。

---

## 1. 顶层模型：不是一条线，而是两条真人使用线 + 一套共享视觉系统

~~~text
                         Person Identity
                         这个真人是谁
                              │
              ┌───────────────┴───────────────┐
              │                               │
      A. Identity Asset Line           B. Story Role Line
      这个人本人怎么被表现               这个人去演谁
              │                               │
      Identity × Visual Style          Identity × Story Role
              │                       × Role Transformation
      Identity Style Assets            × Visual System
              │                               │
      仍然是“本人”                     Story Character Assets
                                              │
                                      进入具体 Comic Episode

                 ───────── Shared ─────────
                    Relationship Visual System
                 人物画风 / 场景 / 构图 / 色彩 /
                     文字 / 页面版式
~~~

三个概念必须长期分开：

- **Identity**：这个真人是谁；
- **Story Role**：这个真人在故事里演谁；
- **Visual System**：这部漫画用什么视觉语言表达。

---

# 2. A 线｜Person Identity Asset Line

这一条线始终回答：

> **这个真人本身是谁，以及在不同视觉表现下怎样仍然是他。**

Identity 的正式方法与状态由共享真人视觉身份底座维护：

- `Darcy-Jin/personal-ai-system/work-frameworks/human-visual-identity.md`
- `Darcy-Jin/personal-ai-system/agents/visual-identity-agent/AGENT.md`
- `Darcy-Jin/personal-ai-system/skills/character-identity-preservation/SKILL.md`

Relationship 不复制这套方法。

## 2.1 Identity 不是一张图

一个真人 Identity 至少由下面几类资产共同构成：

~~~text
Person Identity
├─ Evidence Pool
│  ├─ 当前照片
│  ├─ 年轻照片
│  ├─ 不同角度 / 表情
│  ├─ 视频帧
│  └─ 其他真人视觉证据
│
├─ Identity Representation
│  ├─ 稳定头脸结构
│  ├─ 五官关系
│  ├─ 典型动态 / 表情
│  ├─ 年龄 / 胖瘦 / 发型等变化边界
│  ├─ 容易漂移的特征
│  └─ 已知 / 未知 / 低置信部分
│
├─ Validated Visual Assets
│  ├─ Root Master
│  ├─ Support Master
│  └─ 其他已验证状态
│
├─ Coverage Map
│  └─ 哪些目标状态已经验证，哪些仍未知
│
└─ Human Decisions / Provenance
   └─ 谁确认过什么、为什么通过 / Reject
~~~

关键规则：

> **Evidence 是证据；Master 是高置信度资产；Identity Representation 才是系统当前对“这个人是谁”的整体认识。**

## 2.2 年轻与现在怎么处理

同一个人的年轻照片和现在照片都可以属于 Evidence Pool。

但必须区分：

~~~text
当前年龄状态
→ 当前照片权重更高

年轻照片
→ 帮助理解长期稳定结构、年龄变化轨迹、过去状态
~~~

不能因为年轻照片更好看，就让它重新定义当前年龄状态。

## 2.3 Identity Style Assets｜不同画风下仍然是“本人”

真人 Identity 可以被不同视觉语言表现。

例如：

~~~text
Darcy Identity
× 轻手绘少女漫画
→ Darcy / 轻手绘 Identity Style Asset

Darcy Identity
× 半写实插画
→ Darcy / 半写实 Identity Style Asset
~~~

它们仍然回答：

> **“如果把这个真人用这种画风表现，他应该长什么样？”**

不增加虚构职业、性格或故事条件。

### Identity Style Master

当某种画风下已经验证“像本人”，可以形成：

> **Identity Style Master｜该真人在该画风下的高置信标准身份资产。**

它属于 Identity 资产线。

---

# 3. B 线｜Story Role Line

这一条线回答：

> **这个真人作为“演员”，在某个虚构故事里演谁。**

核心公式：

~~~text
Person Identity
+
Story Role
+
Role Transformation
+
Visual System
↓
Story Character
~~~

## 3.1 Story Role｜故事角色设定

Story Role 描述角色本身，而不是描述真人本人。

可以包含：

- 年龄 / 人生阶段；
- 职业；
- 收入与工作方式；
- 城市；
- 性格；
- 时间使用方式；
- 生活方式；
- 兴趣；
- 关系行为；
- 当前心理 / 精神状态；
- 这篇故事里的叙事功能。

例如：

~~~text
Identity
= Darcy

Story Role
= 29～30 岁大厂高薪男友
  工作忙
  时间少
  周末愿意高质量陪伴
~~~

这不代表真实 Darcy 就一定拥有这些属性。

## 3.2 Role Transformation｜真人到故事角色允许改多少

进入 Story Role 后，不要求永远 100% 像真人。

更像：

> **演员接到角色以后做妆造、造型和角色化改造。**

当前使用四档理解：

### L1｜本人出演

- 第一眼就是本人；
- 主要只发生画风转换、服装、场景变化；
- 适合真实情侣日常、个人 IP、Build in Public。

### L2｜轻角色化

- 明显来自本人；
- 核心识别特征保留；
- 允许为了角色气质做轻度造型 / 特征强化或弱化；
- 仍然容易认出原型。

### L3｜原型化

- 保留“这个人的感觉”和部分识别锚点；
- 不追求逐点像；
- 角色可以拥有更独立的视觉身份；
- 更利于虚构故事和隐私模糊化。

### L4｜灵感化

- 真人只提供原型灵感；
- 角色已经基本独立；
- 不要求读者认出真人。

这四档不是好坏等级。

每个 Story Role 在建立角色资产前先明确：

> **本角色需要多像真人？**

## 3.3 Appearance State｜这个角色此刻看起来怎样

Identity 和 Story Role 都确定后，角色仍会随状态变化。

例如：

~~~text
大厂员工状态
├─ 发型略乱
├─ 黑眼圈
├─ T 恤 / 工牌
├─ 身材偏瘦
└─ 精神疲惫

约会状态
├─ 发型整理
├─ 精神状态更好
├─ 穿搭更完整
└─ 表情更放松
~~~

Appearance State 常见维度：

- 年龄状态；
- 胖瘦；
- 发型 / 发量；
- 胡须；
- 妆容；
- 服装；
- 配饰；
- 精神状态；
- 身体状态。

规则：

> **Role 可以改变 Appearance State，但不能无意中把 Identity 改成另一个人。**

除非该 Story Role 明确选择了 L3 / L4 的更低身份保真目标。

---

# 4. Relationship Visual System｜共享视觉系统

Visual System 是 Identity Asset Line 和 Story Role Line 都会调用的共享设计底座。

当前正式 Source of Truth：

- [Visual System v1](visual-system-v1.md)

它统一维护：

~~~text
Character Style
Scene Style
Composition
Color / Lighting
Text System
Page Layout
~~~

这里不再重复维护具体画风维度、候选 Style Pack 或页面视觉规则。

资产架构只保留关系：

~~~text
Person Identity
+
Story Role / Role Transformation
+
Relationship Visual System
↓
Comic Character / Comic Episode Assets
~~~

其中：

- Character Style 回答“人物怎么画”；
- 其他模块回答“场景、镜头、色彩、文字、页面怎么呈现”。

> **Visual System 不负责重新定义真人 Identity，也不负责决定 Story Role。**

# 5. Comic Character Assets｜真正用于生产漫画的角色资产

当 Identity / Story Role / Visual System 足够清楚以后，开始形成生产资产。

这里也要区分两类 Master。

## 5.1 Identity Style Master

~~~text
Person Identity
× Character Style
↓
Identity Style Master
~~~

回答：

> **这个真人在这套画风下，标准情况下长什么样。**

它仍属于真人 Identity Asset Line。

## 5.2 Story Role Master

~~~text
Person Identity
× Story Role
× Role Transformation
× Character Style
↓
Story Role Master
~~~

回答：

> **这个真人扮演这个故事角色时，标准情况下长什么样。**

例如：

~~~text
Darcy Identity
+
29～30 岁大厂男友
+
L2 轻角色化
+
Relationship 轻手绘风
↓
“大厂男友” Role Master
~~~

## 5.3 Character Sheet｜角色设定卡

Character Sheet 是：

> **把已经确认的角色资产组织到一张工作视图里，方便人和 AI 使用。**

它可以包含：

- 标准形象；
- 必要角度；
- 表情；
- 常用动作；
- 常用穿搭；
- Appearance State；
- Story Role 文字设定；
- 道具；
- 角色气质。

但它不是 Source of Truth。

正确关系：

~~~text
Underlying Approved Assets
+
Role / Identity Metadata
↓
Deterministic Character Sheet
~~~

禁止：

> 让生成模型重新画整张 Character Sheet，然后拿里面重新生成的脸反向覆盖 Master。

---

# 6. 除了人物，还需要哪些漫画资产

真正进入长期漫画生产，还会积累下面这些资产。

## 6.1 Scene Library

高频场景可以形成共享视觉资产，例如：

- 家；
- 餐桌；
- 卧室；
- 公司工位；
- 会议室；
- 商场；
- 咖啡馆；
- 机场；
- 餐厅。

不要求第一篇就全部建立。

按真实重复使用逐步沉淀。

## 6.2 Prop Library

例如：

- 手机；
- 电脑；
- 工牌；
- 背包；
- 汽车；
- 戒指；
- 餐具。

只有需要长期一致的道具才进入 Library。

## 6.3 Expression / Pose Assets

高频表情与动作可以在角色稳定后逐步建立。

例如：

- 自然笑；
- 疲惫；
- 无奈；
- 认真；
- 开心；
- 看手机；
- 工作；
- 吃饭；
- 等人。

仍然按真实生产需要增加，不机械补齐。

---

# 7. 单篇漫画 Comic Episode

前面的资产准备好以后，一篇漫画只维护它自己真正变化的东西。

~~~text
Comic Episode
├─ Topic / Matter
├─ Story Point
├─ Script
├─ Storyboard
├─ Cast / Story Role
├─ Role State
├─ Scene
├─ Props
├─ Page Composition
├─ Dialogue / Caption
└─ Final Pages
~~~

例如当前：

> **《互联网大厂男友：高薪，但没时间》**

会选择：

~~~text
Actor Identity
→ Darcy

Story Role
→ 大厂高薪男友

Role Transformation
→ 待确定

Visual System
→ Relationship 当前漫画视觉系统

Episode
→ 001 脚本 / 5 页
~~~

---

# 8. 哪些东西固定，哪些变化

这是提升生产效率的关键。

## 长期稳定 / 少动

- Person Identity；
- Identity Representation；
- Validated Identity Assets；
- 已确认的 Identity Style Master；
- Relationship Visual System 的稳定部分；
- 已确认角色的 Story Role Master。

## 按 Story Role 变化

- 职业；
- 年龄状态；
- 性格表现；
- 生活方式；
- Role Transformation；
- Appearance State；
- 角色服装 / 发型 / 精神状态。

## 按 Episode 变化

- 这一篇讲什么；
- 场景；
- 动作；
- 情绪；
- 对白；
- 页面构图；
- 道具；
- 临时角色状态。

判断原则：

> **这一篇不需要重新决定已经确认的长期资产。**

---

# 9. Source of Truth 与资产位置

## 真人 Identity

正式 Source of Truth：

> `personal-ai-system` 的 Human Visual Identity 能力 + 对应 Runtime State / Asset Store。

Relationship 只引用：

- `identity_id`；
- `asset_id / asset_key`；
- 已验证状态。

不复制一套真人身份方法。

## Relationship Story Role / Visual System / Episode

正式保存在：

> `Darcy-Jin/Relationship/docs/content/ai-comic/`

这里维护：

- Story Role；
- Role Transformation；
- Relationship Visual System；
- Story Role Master 的项目引用；
- Character Sheet；
- Scene / Prop；
- Episode Script / Storyboard / Pages。

---

# 10. Relationship 开始正式漫画生产前的最小准备

不是先把所有资产做满。

只需要：

~~~text
1. 两位主角的 Person Identity
   → 已有可信身份资产

2. Relationship Visual System
   → 先锁定 Character Style v1；其他模块按 Visual System 当前 Locked / Default / Episode 状态执行

3. 第一篇 Story Role
   → 谁演谁
   → Role Transformation 多大

4. 两个 Story Role Master
   → 在当前画风 + 当前角色条件下确认

5. Character Sheet
   → 用已确认资产确定性整理

6. Episode 001
   → 脚本
   → 分镜
   → 5 页成品
~~~

然后直接进入生产。

不要为了“体系完整”提前做几十个场景、表情和角色。

> **第一篇真正需要什么，就补什么；重复出现以后再升成长期资产。**
