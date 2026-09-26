# Relationship AI Comic｜Visual System v1

> 状态：Design Foundation / Production Candidate  
> 作用：这是 Relationship AI Comic 当前**正式视觉设计底座**。  
> 它负责“整部漫画怎么呈现”，但不重新定义真人是谁，也不重新定义故事角色是谁。

---

## 1. 先把边界讲清楚

Relationship 现在有四个不同对象：

~~~text
Person Identity
= 这个真人是谁

Story Role
= 这个真人在故事里演谁

Visual System
= 这部漫画怎么画、怎么呈现

Comic Episode
= 这一篇具体讲什么
~~~

正式关系：

~~~text
Person Identity
+
Story Role / Role Transformation
+
Visual System
+
Episode Content
↓
Final Comic Page
~~~

所以：

> **Visual System 不是 Identity，不是 Story Role，也不是单篇脚本。**

真人身份统一读取：

- `Darcy-Jin/personal-ai-system/skills/character-identity-preservation/SKILL.md`

人物画风通用方法统一读取：

- `Darcy-Jin/personal-ai-system/skills/visual-style-design/SKILL.md`
- `Darcy-Jin/personal-ai-system/skills/visual-style-design/references/character-style-dimensions.md`

资产关系统一读取：

- [AI 漫画资产架构 v1](asset-architecture-v1.md)

---

# 2. Visual System 到底包含什么

Visual System 分 6 个模块：

~~~text
Relationship Visual System
├─ 1. Character Style
│     人物怎么画
├─ 2. Scene Style
│     环境怎么画
├─ 3. Composition
│     镜头和信息怎么摆
├─ 4. Color / Lighting
│     色彩和光怎么组织
├─ 5. Text System
│     文字怎么进入画面
└─ 6. Page Layout
      一页怎么组织、怎么适配平台
~~~

这 6 个模块相关，但不能混成一个“画风”。

例如：

- 人物用手绘细线，是 Character Style；
- 餐厅只画桌椅和两三个关键物件，是 Scene Style；
- 两个人一左一右隔着电脑，是 Composition；
- 整页偏暖、低饱和，是 Color / Lighting；
- 手机消息直接做成聊天 UI，是 Text System；
- 小红书 3:4、上下两格，是 Page Layout。

---

# 3. 设计底座不是“全部写死”

为了以后真正可使用，所有视觉规则都标记成 4 种状态。

| 状态 | 含义 | 使用方式 |
|---|---|---|
| **Locked** | 当前生产阶段已经确认 | 单篇不重新讨论 |
| **Default** | 当前默认方案 | 没有特殊理由就直接用 |
| **Open** | 还需要真实试画确认 | 进入受控实验 |
| **Episode** | 本来就应该按单篇决定 | 不升成全局规则 |

原则：

> **把稳定的东西锁住，把没验证的东西保持开放，把本来应该变化的东西留给 Episode。**

这样设计底座既稳定，又不会过早把自己锁死。

---

# 4. 当前已经确定的设计约束

## 4.1 内容与平台｜Locked

第一阶段：

- 平台：小红书；
- 输出：3:4 竖图；
- 主要读者：女性；
- 内容：关系 / 婚恋轻漫画；
- 阅读环境：手机快速扫读；
- 文字：少；
- 基调：娱乐优先，不做知识海报；
- 内容目标：让人通过具体生活片段看见“选择一种人，也是在选择一种生活”。

这些不是 Character Style 本身，但会约束整个 Visual System。

## 4.2 真人身份｜Locked outside Visual System

长期演员：

- 男主真人 Identity → Darcy；
- 女主真人 Identity → Wife。

但：

> **固定的是 Person Identity，不是每篇 Story Role。**

Story Role、Role Transformation、Appearance State 可以变。

Visual System 不允许为了“画得更漂亮”把真人改成另一张模板脸。

---

# 5. Character Style｜人物怎么画

这是当前最需要先锁定的模块。

## 5.1 通用维度

人物画风沿用 personal-ai-system 的 13 个维度：

~~~text
画谁
1. 角色载体

怎么造型
2. 风格家族
3. 形状语言
4. 人体比例
5. 写实—抽象程度
6. 脸部语言

怎么表演
7. 表情语言
8. 姿态与动作

怎么画出来
9. 轮廓 / 线条
10. 上色
11. 明暗 / 体积
12. 材质 / 媒介
13. 细节密度
~~~

这些维度只描述人物本身。

不要把：

- 场景复杂度；
- 构图；
- 页面比例；
- 真人身份；
- Story Role；
- 服装具体款式；

混进 Character Style。

---

# 6. Relationship Character Style 的硬边界

下面这些当前已经确定。

## 6.1 角色载体｜Locked

> **真实人类原型。**

不是动物拟人，不是现成 IP，不是完全抽象人物。

## 6.2 Identity-safe｜Locked

漫画化允许：

- 简化；
- 轻度夸张；
- 适当风格化。

但不允许：

- 统一放大眼睛；
- 套娃娃脸；
- 为了好看削掉本人骨相；
- 把男女主自动美化成标准偶像脸。

优先级：

> **还是这个人 > 漂亮。**

## 6.3 成人感｜Locked

Relationship 讲的是成年人关系。

所以第一版不走明显幼态 Q 版。

人物应该：

- 仍像成年人；
- 可以轻夸张；
- 不能因为漫画化变成儿童比例。

---

# 7. 当前正式 Character Style 候选

探索阶段的 A～F 方案已经归档。

当前只保留 3 个真正值得比较的候选。

## Candidate A｜Identity-safe 轻手绘都市漫画

| 维度 | 当前定义 |
|---|---|
| 角色载体 | 真人类 |
| 风格家族 | 清新手绘漫画 / 都市生活插画 |
| 形状语言 | 柔和、自然，不改真人骨相 |
| 人体比例 | 轻夸张，约 5.5～6.5 头身 |
| 写实程度 | 轻漫画化 |
| 脸部语言 | 简化五官细节，但保留真人眼距、眼型、鼻嘴关系、脸型轮廓 |
| 表情语言 | 自然生活表情 + 轻漫画强化 |
| 姿态动作 | 自然生活动作 + 少量 Gesture |
| 线条 | 铅笔感 / 手绘细线 |
| 上色 | 低饱和淡彩 / 轻水彩 |
| 明暗 | 很轻，只保留必要体积 |
| 材质 | 纸张 / 铅笔 / 淡彩质感 |
| 细节 | 低～中 |

它要验证：

> **能不能既有女性向轻漫画感，又保留真人识别度。**

---

## Candidate B｜清爽都市线稿平涂

| 维度 | 当前定义 |
|---|---|
| 角色载体 | 真人类 |
| 风格家族 | 现代都市漫画 / 清爽数字插画 |
| 形状语言 | 干净、平衡、轻度几何化 |
| 人体比例 | 约 6～6.5 头身 |
| 写实程度 | 漫画化 |
| 脸部语言 | 保留真人识别关系，进一步简化局部细节 |
| 表情语言 | 清楚、自然、稍强化 |
| 姿态动作 | 自然生活动作 |
| 线条 | 干净细线 |
| 上色 | 柔和平涂 |
| 明暗 | 简单阴影 |
| 材质 | 干净数字质感 |
| 细节 | 中 |

它要验证：

> **是否更清楚、更稳定、更适合长期批量生产。**

---

## Candidate C｜轻半写实生活插画

| 维度 | 当前定义 |
|---|---|
| 角色载体 | 真人类 |
| 风格家族 | 半写实生活插画 |
| 形状语言 | 接近真人自然结构 |
| 人体比例 | 接近正常成人比例 |
| 写实程度 | 半写实 |
| 脸部语言 | 较真实地保留真人五官与轮廓 |
| 表情语言 | 克制、真实 |
| 姿态动作 | 自然生活动作 |
| 线条 | 弱描边 / 无明显描边 |
| 上色 | 低饱和柔和体积 |
| 明暗 | 柔和体积光影 |
| 材质 | 轻数字绘画质感 |
| 细节 | 中～高 |

它要验证：

> **是否更像真人、更有生活质感，但仍然像漫画而不是写真。**

---

# 8. Character Style Comparison Contract

这一轮正式选画风时，必须做受控比较。

## 8.1 固定变量

三套候选都保持：

~~~text
Person Identity
= 同一位真人

Story Role
= 不变

Role Transformation
= 不变

Appearance State
= 年龄 / 胖瘦 / 发型 / 穿搭不变

Expression / Pose
= 不变

Scene
= 不变

Composition / Camera
= 不变

Text
= 不变

Output Ratio
= 3:4
~~~

只允许改变 Character Style。

如果 A/B/C 同时换了：

- 脸；
- 角色年龄；
- 服装；
- 姿势；
- 场景；
- 构图；

那就不是画风实验。

## 8.2 第一次试画不用 Story Role

为了先把“人物怎么画”单独测清楚，第一次建议直接走 Identity Asset Line：

~~~text
Darcy / Wife 当前真人 Identity
+
L1 本人出演
+
同一中性生活场景
+
同一构图
↓
A / B / C Character Style
~~~

这样不会把“大厂员工”“约会状态”等 Story Role 条件混进画风选择。

---

# 9. Character Style 怎么选

不做复杂总分。

先看下面 6 个问题：

1. **Identity Fidelity**  
   漫画化以后还是不是这个人？

2. **Audience Fit**  
   女性用户愿不愿意继续看？

3. **Readability**  
   手机上一眼能不能看清人物和关系？

4. **Expression Fit**  
   表情、关系距离、生活状态能不能自然演出来？

5. **Production Stability**  
   连续 5 页会不会频繁漂脸、漂风格？

6. **Long-term Fit**  
   连续几十篇以后还能不能耐看、形成账号识别度？

第一轮不问：

> “哪张最漂亮？”

---

# 10. Style Lock｜选完以后怎么保存

选出当前最好方案后：

> **冻结为 Relationship Character Style v1 / Locked for Production。**

至少保存：

~~~yaml
name:
version: v1
status: locked_for_production

purpose:
audience:
platform:

character_style:
  carrier:
  family:
  shape_language:
  body_proportion:
  realism:
  face_language:
  expression_language:
  pose_language:
  line:
  color:
  shading:
  material:
  detail_density:

identity_fidelity_boundary:
explicit_do_not:
known_limitations:
~~~

以后单篇漫画只引用：

> `Character Style v1`

不再重新设计人物画法。

如果真实生产连续暴露问题：

~~~text
Episode Feedback
↓
重复问题
↓
Visual System Review
↓
v1 → v1.1 / v2
~~~

不是一页一改。

---

# 11. Scene Style｜环境怎么画

当前状态：**Default / 继续用 Episode 验证**

第一版默认：

- 真实生活场景；
- 简化非必要背景；
- 保留对关系有信息量的物件；
- 环境必须帮助解释生活状态；
- 不追求电影级背景细节。

例如：

> “一个人吃晚饭”

需要：

- 餐桌；
- 两套餐具 / 空位置；
- 手机；
- 夜晚氛围。

不需要把整个房子画满。

---

# 12. Composition｜镜头和信息怎么摆

当前状态：**Episode**

构图不锁成一种模板。

原则：

> **这一格最重要的信息是什么，就用最省信息的镜头。**

常用：

- 人物近景；
- 半身 + 动作；
- 双人关系构图；
- 人物 + 环境；
- 缺席构图；
- 左右 / 上下对照；
- 必要时的隐喻构图。

具体“这一格画谁”读取：

- [角色与叙事视角](character-and-viewpoint-v0.md)

---

# 13. Color / Lighting｜色彩与光

当前状态：**Default**

第一版默认：

- 低～中饱和；
- 日常自然；
- 不过度商业柔光；
- 不用强电影滤镜抢内容；
- 日 / 夜、公司 / 家可以有真实差异。

Character Style 锁定以后，再把颜色规则收紧。

---

# 14. Text System｜文字怎样进画面

当前状态：**Default**

原则：

> **能用画面演出来，就不再解释一遍。**

优先级：

~~~text
画面 / 动作
↓
必要对白
↓
手机消息 / UI
↓
必要短字幕
↓
解释性文字
~~~

第一版避免：

- 大段知识解释；
- 满屏旁白；
- 一格重复说明画面已经表达的内容。

---

# 15. Page Layout｜一页怎么组织

当前状态：**Default + Episode**

Locked：

> **小红书 3:4 竖图。**

按内容可以：

- 一页一个完整场景；
- 上下两格；
- 左右对照；
- 最后一页做更平面的互动版式。

页面结构服务脚本，不反过来逼脚本套固定模板。

---

# 16. Visual System 给 Episode 提供什么

Episode 不应该重新定义整个视觉系统。

正式输入输出：

~~~text
Visual System
提供：
- Character Style version
- Scene defaults
- Color defaults
- Text rules
- Page constraints

Episode
提供：
- Story Point
- Cast / Story Role
- Role Transformation
- Appearance State
- Scene
- Action / Emotion
- Composition need
- Dialogue / Caption
↓
Final Page Contract
~~~

---

# 17. Character Sheet 在这里是什么位置

Character Sheet 不属于 Visual System 本身。

它是：

~~~text
Person Identity
+
Story Role
+
Role Transformation
+
Character Style
+
Validated Character Assets
↓
Character Sheet
~~~

所以：

> **先锁 Character Style，再做具体 Story Role 的 Character Sheet。**

Character Sheet 只做组织和展示，不反过来定义真人 Identity。

---

# 18. 当前下一步

现在 Visual System 的状态是：

| 模块 | 状态 |
|---|---|
| 平台 / 3:4 | Locked |
| 真人 Identity 边界 | Locked |
| Character Style | **Open：A/B/C 待试画** |
| Scene Style | Default |
| Composition | Episode |
| Color / Lighting | Default |
| Text System | Default |
| Page Layout | Default + 3:4 Locked |

因此现在真正需要解决的只有一个：

> **选出 Relationship Character Style v1。**

选完以后就直接进入：

~~~text
Story Role
↓
Role Transformation
↓
Story Role Master
↓
Character Sheet
↓
Episode 001
~~~

不再回到“大范围画风探索”。
