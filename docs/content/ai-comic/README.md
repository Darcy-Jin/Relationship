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
