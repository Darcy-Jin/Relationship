# AI Comic｜Relationship 的 AI 漫画层

AI Comic 已经并入 Relationship，并作为三个正式层之一的 **AI 漫画层**。

它不是另一套“关于人的理论”，而是共享底层的一种独立应用。

它的工作是：

> **把 Relationship 对人、关系、选择和共同生活的理解，变成一眼能看懂、愿意继续看的漫画内容。**

## 1. 它现在负责什么

三个作用继续保留：

1. **内容入口**：让更多人先从一个具体问题进入；
2. **用户验证**：看哪些问题真的让人停下来、讨论、反思；
3. **案例积累**：积累可以继续进入关系游戏的场景、冲突和反例。

但底层人物和关系知识不在这里重复维护。

## 2. 它读什么

默认先读：

- [人物模型](../../models/person-model.md)
- [当前核心模型](../../current-model.md)

漫画自己的正式设计底座按这个顺序读：

1. [AI 漫画资产架构 v1](asset-architecture-v1.md)  
   先看 Identity、Story Role、Visual System、Character Sheet、Episode 之间是什么关系。
2. [Visual System v1](visual-system-v1.md)  
   当前正式视觉设计底座：人物画风、场景、构图、色彩、文字、页面怎么管理。
3. [AI 漫画内容模型](content-model.md)  
   一篇内容从哪里来、标题怎么形成、正文怎么组成。
4. [AI 漫画内容地图 v0.2](content-map-v0.2.md)  
   当前正式内容空间：Person × Scene × Need/Fit，以及受约束组合和 Topic Gate。
5. [Priority Set v0.1](topic-priority-set-v0.1.md)  
   从 2733 个受约束候选组合中形成的 30 个 Priority Candidate、首批 15 + 后备 15。
6. [Content Briefs](briefs/README.md)  
   当前 5 个跨类型 Validation Brief，用来验证 Content Map v0.2 和 Content Model 真正落到单篇时是否稳定。
7. [角色与叙事视角](character-and-viewpoint-v0.md)  
   一格画谁、站谁的处境、谁可以缺席。
8. [老婆脸版 Current Definition v1](characters/female-wife-face-v0.md)  
   仅作为当前具体人物 Case 的人类可读说明。

通用能力不在 Relationship 重复维护：

- 人物画风方法：`Darcy-Jin/personal-ai-system/skills/visual-style-design/SKILL.md`
- 人物画风 13 维：`Darcy-Jin/personal-ai-system/skills/visual-style-design/references/character-style-dimensions.md`
- 真人身份：`Darcy-Jin/personal-ai-system/skills/character-identity-preservation/SKILL.md`

真人固定 IP 的通用身份校准、Human Recognition Gate、Identity Master、身份漂移诊断与确定性对比拼图，不在 Relationship 重复维护。

它属于 `personal-ai-system/products/human-visual-ai-services/` 中的共享真人视觉身份底座；Relationship AI Comic 是一个下游应用。

统一使用：

- `Darcy-Jin/personal-ai-system/skills/character-identity-preservation/SKILL.md`

当前第一篇试稿：

- [001｜互联网大厂男友：高薪，但没时间](scripts/001-big-tech-boyfriend-v0.md)

## 2.1 当前生产前的资产顺序

Relationship 现在不再把“真人身份 → 故事角色 → 漫画”理解成一条线。

正式结构：

~~~text
Person Identity
├─ Identity Asset Line
│  → 真人本人在不同视觉语言下怎样仍然是本人
│
└─ Story Role Line
   → 这个真人作为演员，在故事里演谁

Relationship Visual System
→ 同时服务两条线
~~~

当前真正进入第一篇漫画前，只补最小缺口：

1. 两位主角的 Person Identity；
2. 当前 Character Style；
3. 第一篇 Story Role + Role Transformation；
4. 两个 Story Role Master；
5. Character Sheet；
6. Episode 001 正式生产。

具体资产边界、固定 / 可变项、Character Master / Character Sheet 定义统一读取：

- [AI 漫画资产架构 v1](asset-architecture-v1.md)

## 2.2 当前资产盘点与生产就绪度

按 [AI 漫画资产架构 v1](asset-architecture-v1.md) 盘点，当前不是“什么都没准备”，而是已经完成了一部分底座，剩下的是少量生产前缺口。

| 层 | 当前状态 | 现有资产 | 还缺什么 |
|---|---|---|---|
| Person Identity｜男主真人 | 已正式资产化 / Live Validation | 5 张真人 Evidence 已进入共享 Identity 资产；当前 Front / 3Q 为 Candidate；`profile_subject_left` 已人工通过为 `DARCY-SUP-PROFILE-LEFT-01` | Front / 3Q 暂不机械补确认；真正生产需要时再过 Human Gate |
| Person Identity｜女主真人 | 已建立 | Root Master、Support Masters、真人 Evidence；`profile_subject_left` 已验证为 `MASTER-SUP-06` | 只剩底层资产迁移等后台尾项，不阻塞漫画 |
| Character Style｜人物画风 | Open / 已收敛到 3 个候选 | A 轻手绘都市漫画；B 清爽都市线稿平涂；C 轻半写实生活插画 | 做一次严格受控试画，选出 Character Style v1 |
| Visual System｜场景 / 构图 / 色彩 / 文字 / 页面 | Design Foundation 已建立 | 3:4 已 Locked；Scene / Color / Text 有 Default；Composition 按 Episode | 第一篇按 Visual System v1 直接生产，不再回到大范围视觉探索 |
| Story Role｜001 男主 | 已有 | `characters/001-big-tech-boyfriend-v0.md` | 明确 Role Transformation 等级 |
| Story Role｜001 女主 | 脚本里已有功能，但未独立资产化 | 作为伴侣 / 女性代入者参与 001 | 明确她由 wife Identity 扮演，以及本篇 Role Transformation / Appearance State |
| Story Role Master｜男女主 | 未建立 | — | 在正式 Character Style + 001 Story Role 下各做 1 个标准角色版本 |
| Character Sheet｜男女主 | 未建立 | 有旧样例可参考 | 等 Story Role Master 通过后，用已确认资产确定性组装 |
| Episode 001 Script | 已有 | 《互联网大厂男友：高薪，但没时间》5 页脚本 | 进入 storyboard / page production |
| Scene / Prop Library | 不要求先建 | 零散规则已有 | 第一篇需要什么就建什么；重复出现以后再升长期资产 |

### 当前真正的最小缺口

现在不要继续补“更多角度 / 更多表情 / 更多场景”。

进入第一篇漫画前只剩：

~~~text
1. 做 A / B / C 受控试画，锁定 Character Style v1
2. 明确 Episode 001 的男女 Story Role + Role Transformation
3. 建两个 Story Role Master
4. 用已确认资产做 Character Sheet
5. 直接进入 001 的 storyboard / 5 页生产
~~~

其中第 4～5 步服务生产，不再重新定义真人是谁。

这里的“最小缺口”只指 **Episode 001 进入正式视觉生产前的 Production Readiness**。

它不阻塞上游内容规划。当前正式允许并行：

~~~text
内容规划线
→ 人物 / 标签 / 特点
→ 生活场景 / 人生阶段
→ 不同伴侣需要 / 生活方式
→ Topic / Content Brief / 标题 / Episode Script

视觉生产线
→ Character Style
→ Story Role Master
→ Character Sheet
→ Storyboard / Page Production
~~~

两条线在正式 Storyboard / Page Production 前汇合。

## 2.3 当前 Source of Truth

当前生产阶段只认下面这些正式入口：

~~~text
资产关系
→ asset-architecture-v1.md

视觉设计
→ visual-system-v1.md

内容结构
→ content-model.md

内容规划空间
→ content-map-v0.2.md

当前 Priority Set
→ topic-priority-set-v0.1.md

当前 Content Brief Validation Set
→ briefs/README.md

研究依据 / Raw Corpus / Combination Space
→ ../../research/ai-comic/

角色 / 叙事视角
→ character-and-viewpoint-v0.md

Episode 001
→ scripts/001-big-tech-boyfriend-v0.md
~~~

历史探索统一去：

- `docs/history/`
- `docs/research/ai-comic/`

历史文件保留证据价值，但**不再参与当前 Runtime Routing**。

## 3. 当前最重要的内容母题

### 标签 → 具体的人

~~~text
你因为一个标签形成预期
↓
进入真实生活场景
↓
这个具体的人表现并不等于标签
~~~

### 单个优点 → 整套生活

~~~text
你想要一个条件
↓
真正得到它
↓
同时得到它带来的生活结构、限制和代价
~~~

### 现在 → 时间中的变化

~~~text
现在看起来很好 / 很糟
↓
看行为背后的动力和可持续性
↓
几年以后可能出现不同轨迹
~~~

漫画不是给结论：

> “XX 类型的人不能选。”

而是帮助用户多看到一层：

> **标签背后到底是什么人，这个人进入生活以后会发生什么。**

## 4. 原 ai-comic 仓库资料

原仓库的 5 份研究文档已完整迁入：

- [研究归档](../../research/ai-comic/README.md)

原 `Darcy-Jin/ai-comic` 仓库已删除，不再作为任何入口。当前 Source of Truth 只在 Relationship。
