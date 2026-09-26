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

漫画自己的资产与表达规则再读：

- [AI 漫画资产架构 v1](asset-architecture-v1.md)
- [AI 漫画内容模型](content-model.md)
- [角色与视角呈现规范 v0.1](character-and-viewpoint-v0.md)
- [视觉风格组合空间 v0.1](visual-style-space-v0.md)
- [人物画风当前配置](character-style-model-v0.md)
- 通用画风方法：`Darcy-Jin/personal-ai-system/skills/visual-style-design/SKILL.md`
- [老婆脸版 Current Definition v1](characters/female-wife-face-v0.md)

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
| Person Identity｜男主真人 | 基本建立 / 待正式资产化 | 用户近期 + 年轻照片；当前正面 / 3Q / 侧面候选；侧面额头修正版已人工认可 | 把当前真人身份资产正式登记进共享 Identity Runtime，明确哪些是 Validated / Candidate |
| Person Identity｜女主真人 | 已建立 | Root Master、Support Masters、真人 Evidence；`profile_subject_left` 已验证为 `MASTER-SUP-06` | 只剩底层资产迁移等后台尾项，不阻塞漫画 |
| Character Style｜人物画风 | 候选已明确，未最终锁定 | 方案 F：轻手绘少女漫画 / 清新简笔插画，为当前第一优先 | 用男女主同一内容做一次受控试画，确认正式生产画风 |
| Visual System｜场景 / 构图 / 色彩 / 文字 / 页面 | 部分已有方向，未全部冻结 | 小红书 3:4、少文字、生活场景、轻松女性向；已有 visual-style-space | 第一篇按真实页面确定最小规则，不提前做完整 Design System |
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
1. 把男主当前真人 Identity 正式资产化
2. 锁定 Relationship 第一版 Character Style
3. 明确 Episode 001 的男女 Story Role + Role Transformation
4. 建两个 Story Role Master
5. 用已确认资产做 Character Sheet
6. 直接进入 001 的 storyboard / 5 页生产
~~~

其中第 4～5 步服务生产，不再重新定义真人是谁。

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
