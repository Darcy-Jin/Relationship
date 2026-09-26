# Research 12｜人物 / 标签 / 特点内容空间：从原始语料到可组合 Topic Space

> 状态：Research-only / Active  
> 日期：2026-09-26  
> 当前 Matter：Relationship AI Comic 内容规划  
> 目的：建立一个可追溯、可扩展、可复用的人物 / 标签 / 特点内容空间，而不是凭直觉先挑一小批标签。

## 0. 一句话

> **先把现实中人们如何描述、筛选、理解伴侣的原始材料尽量收全，再用多个 View 分层整理；最后才把“人物特点 × 生活场景 × 伴侣需要”组合成 Topic，并从完整空间里筛 MVP。**

这轮明确修正上一版做法：

~~~text
原来
→ 先整理 7 组标签
→ 直接挑 15 个优先入口

现在
→ 先做广覆盖 Raw Corpus
→ 保留来源与原词
→ 多 View 分层
→ 建立映射与组合空间
→ 再用 Gate 筛入口
~~~

15 个标签可能最后仍然是很好的第一批入口，但必须是**研究后的结果**，不能是研究前的前提。

---

# 1. 正式复用的 personal-ai-system 方法

本轮不新造平行方法，直接组合现有正式能力：

## Research and Synthesis

负责：

- Research Protocol；
- 广泛搜索与证据扩大；
- Source Registry；
- Raw Evidence / Corpus；
- 反例、竞争解释、证据质量；
- 研究停止条件。

正式入口：

`Darcy-Jin/personal-ai-system/skills/research-and-synthesis/SKILL.md`

## Complex Sensemaking

负责：

- 不把已有 7 类或 15 个标签当成既定答案；
- 维护多个 View；
- 每个 View 逐层展开；
- 用案例检查 View 内失败、View 缺失、View 关系失败；
- 研究后重新回到可理解的上层结构。

正式入口：

`Darcy-Jin/personal-ai-system/skills/complex-sensemaking/SKILL.md`

## Modeling and Model Selection

负责：

- Taxonomy / Faceted Classification：每个 View 内怎样分层；
- Mapping：原始词怎样映射到不同概念；
- Morphological Space：不同维度怎样组合；
- Model Fit：结构是否真的有用、是否漏项、是否混层。

正式入口：

`Darcy-Jin/personal-ai-system/skills/modeling-and-model-selection/SKILL.md`

## 已正式存在的认知循环

这轮直接复用 Research 28 已晋升的方法：

~~~text
已有粗框架
↓
完整探索与研究
↓
形成当前上层总结
↓
案例 / 现实 / 反例验证
↓
暴露缺陷
↓
只深入真正有问题的部分
↓
重新回到上层总结
↺
~~~

所以这次不是“换一种做法”，而是把 personal-ai-system 已有方法真正用到 Content Planning。

---

# 2. Research Protocol

## 2.1 研究主题

现实中，人们会用哪些条件、标签、印象、行为和关系语言去描述、筛选和理解潜在长期伴侣？这些原始表达怎样还原成 Relationship 可以用于生活场景内容的可观察特点？

## 2.2 研究目的

最终不是建立人格百科，而是支持：

~~~text
Raw Language / Facts
↓
Person Feature Space
↓
Scene + Need Combination
↓
Topic Candidate
↓
AI Comic Content
~~~

## 2.3 核心研究问题

1. 用户现实中真正会用哪些词 / 条件？
2. 婚恋平台实际上让用户填写、筛选、展示哪些信息？
3. 中国当前调查里，人们声称重视什么？
4. 学术研究通常把伴侣偏好压成哪些稳定维度？
5. 这些来源之间哪些是同一件事，哪些只是代理变量，哪些根本不是同一层？
6. 哪些词只是第一印象，哪些更接近可观察行为，哪些属于双方共同产生的关系过程？
7. 怎样保持“用户听得懂的词”，又不让标签直接变成因果规则？
8. 最后怎样和场景、伴侣需要组合，形成可批量扩展但不机械的 Topic Space？

## 2.4 范围

当前重点：

- 面向长期关系 / 婚恋选择；
- 以中国现实语境为主；
- 外部一般伴侣偏好研究用于建立 Reference View；
- 同时关注相亲 / 初识阶段与长期共同生活。

当前不追求：

- 全人类人格 taxonomy；
- 临床人格诊断；
- 用单一研究预测具体人的婚姻结果；
- 按性别建立僵硬的男女模板；
- 把社交媒体热词直接当真理。

## 2.5 来源分层

~~~text
A. Internal Formal Model
→ Relationship 已确认的人物、关系、场景模型

B. Platform Schema
→ 婚恋平台真实让用户填写 / 搜索什么

C. Platform / User Language
→ 平台标签、热门搜索词、用户描述语言

D. China Survey / Empirical Research
→ 中国现实人群显式偏好与婚配事实

E. General Academic Models
→ 伴侣偏好、理想标准、兼容性等成熟研究

F. Community / Case Signals
→ 以后补充真实口语、争议词和新兴标签，只作为弱信号
~~~

不同来源不互相替代。

---

# 3. 当前原始数据资产

## 3.1 Source Registry

`person-label-space/source-registry-v0.1.csv`

当前 16 个来源，覆盖：

- Relationship 正式模型；
- 世纪佳缘当前搜索 / 注册 / 资料字段；
- 珍爱当前资料字段；
- 中国青年调查；
- 中国婚恋平台调查；
- CGSS 婚配实验；
- 上海在线约会研究；
- 中国婚配排序研究；
- 伴侣理想标准与跨文化研究。

## 3.2 Raw Corpus

`person-label-space/raw-corpus-v0.1.csv`

当前共 256 条 Raw Item。

这里故意不先去重。

例如：

- `学历` 可以同时出现在平台筛选字段、父母代找对象字段、中国婚配实验和上海在线约会研究；
- `责任心` 可以同时出现在平台标签、用户调查和 Relationship 的可靠 / 承担机制附近；
- `孝顺` 可以是用户标签，但进入生活以后还要拆成钱、时间、照护和边界。

重复来源本身就是证据，不应该在 Intake 阶段被抹掉。

---

# 4. 第一轮外部研究改变了什么

## 4.1 学术研究会压缩维度，但不能直接当内容标签库

经典 Ideal Standards Model 常把理想伴侣压成：

- Warmth / Trustworthiness；
- Vitality / Attractiveness；
- Status / Resources。

近年的跨国研究继续使用这些维度，但也纳入更多属性；2026 年还有研究单独检验 Compatibility。

这说明：

> 少数高层维度适合帮助理解结构，但不足以替代用户现实语言。

来源：

- Fletcher et al. (1999), Ideals in intimate relationships
- Worldwide Test of Ideal Partner Preference-Matching (2024)
- Moving beyond attraction, compassion, and competence (2026)

## 4.2 中国现实筛选会显著使用“硬条件”

2021 CGSS 的 survey experiment 直接操纵：

- 收入；
- 房产；
- 教育；
- 城乡出身；
- 年龄；
- 外貌。

上海在线约会研究也显示教育、住房、家庭背景可能作为收入、能力或文化资源的信号 / 代理。

因此：

> **硬条件不能因为我们更关注长期关系，就从内容空间里删掉。**

真正要做的是把“硬条件”继续展开到生活意义，而不是假装用户不看这些。

## 4.3 当前年轻人同时重视内在契合

2026 中国青年发展状况综合调查中，00 后高频报告：

- 道德品质；
- 三观；
- 性格。

世纪佳缘 2020-2021 调查里又出现：

- 有责任心；
- 上进；
- 善良；
- 体贴；
- 成熟稳重；
- 孝顺；
- 温柔；
- 诚实。

因此：

> 中国择偶语言同时包含硬条件、道德 / 人格概括、关系感受和生活期待。

它们不是一个层级。

## 4.4 平台本身已经证明“用户语言”和“结构化筛选”并存

当前世纪佳缘一边提供：

- 年龄、身高、学历、月薪、住房、购车等筛选；

一边又让用户选择：

- 冷静；
- 稳重；
- 有责任心；
- 开朗；
- 包容；
- 乐观；
- 工作狂；
- 完美主义等标签。

这正好证明我们的内容库至少要同时保存：

> **结构化事实 + 用户标签语言。**

不能只保留其中一个。

---

# 5. 当前候选 Multi-view Model

第一轮综合以后，不再把人物空间理解成一棵 7 分类树。

当前先保留 8 个互补 View。

## View A｜Profile / Reality Facts

回答：

> 现实中直接知道、能筛选的条件是什么？

例如：年龄、城市、身高、学历、职业、收入、住房、婚史、孩子、吸烟饮酒。

## View B｜Social Identity / Context

回答：

> 他处在什么社会与家庭背景里？

例如：职业类型、城乡 / 户籍、家庭资源、原生家庭结构、当前人生阶段。

## View C｜Perceived Traits / Lay Labels

回答：

> 普通人会怎么概括这个人？

例如：老实、温柔、成熟、强势、独立、上进、孝顺、情绪稳定。

这些只是待展开语言。

## View D｜Values / Goals / Priorities

回答：

> 他真正把什么排在前面？

例如：事业、家庭、钱、自由、安全、孩子、成长、忠诚。

## View E｜Capabilities / Regulation

回答：

> 他实际能够怎样处理生活？

例如：赚钱能力、决策、沟通、情绪调节、生活管理、学习修正。

## View F｜Lifestyle / Resource Allocation

回答：

> 他每天怎样使用有限资源？

例如：时间、钱、精力、注意力、空间、社交、运动、消费、作息。

## View G｜Relationship Process

回答：

> 两个人进入关系后，互动怎样运转？

例如：回应、可靠、公平、边界、冲突、修复。

这部分有些不是单人的固定属性，而是 Person × Partner × Scene 的关系过程。

## View H｜Compatibility / Needs / Fit

回答：

> 同一个人为什么对 A 很合适，对 B 很难受？

包括：陪伴、空间、安全、共同活动、关系节奏、人生方向等匹配关系。

这部分更接近双方关系，不应该偷塞回“这个人的标签”。

### 重要

这 8 个 View 仍然是**研究中的候选模型**。

后续会用 Raw Corpus、真实 Topic、反例继续检查：

- View 内部是否自然；
- 是否缺 View；
- 是否有混层；
- View 之间怎样 Mapping。

---

# 6. 为什么原来的 15 个必须降级

原 `person-label-feature-library-v0.1.md` 中的 15 个标签来自：

- 我们已有讨论；
- 第一批 Topic Sample；
- Relationship 已有模型；
- AI 的当前判断。

它们可以作为：

> **Seed / Test Set。**

但不能作为：

> **研究前就确认的 Priority Set。**

当前处理：

~~~text
15 labels
→ 保留
→ 改名 Early Seed Samples
→ 用于测试研究结构
→ 不限制 Raw Corpus 扩张
→ 最后重新进入 Ranking / Selection Gate
~~~

---

# 7. 后续完整研究流程

## Phase 0｜Baseline

- 已有 Relationship 模型；
- 已有 Content Model / Content Map；
- 已有第一篇和 Topic Sample；
- 已有旧 15 标签。

## Phase 1｜Coverage-first Intake

继续扩大 Raw Corpus，优先补：

- 更多当前婚恋平台字段与标签；
- 中国当前青年 / 单身人群调查；
- 真实内容平台 / 社区用户语言；
- 长期关系研究里高价值机制；
- 现有 corpus 解释不了的 orphan terms。

原则：

> **先保留原始词和来源，不急着合并。**

## Phase 2｜Normalization / Mapping

建立：

~~~text
Raw Term
↓
可能含义
↓
映射到一个或多个 View
↓
是否是事实 / 标签 / 行为 / 关系过程 / Need
↓
不能直接推出什么
~~~

## Phase 3｜Progressive Decomposition

每个 View 一层一层拆，不直接从一级 View 跳到几百个词。

要求：

- 每层有自然认知跨度；
- 中间层有真实理解价值；
- 层数不预设；
- 原始词可以挂在多个 View。

## Phase 4｜Coverage / Conflict Check

检查：

- 高来源频率项；
- 只在某类来源出现的项；
- 同词异义；
- 异词同义；
- 中国现实特有 / 更显著的项；
- 学术模型解释不了的平台语言；
- 平台语言解释不了的关系机制。

## Phase 5｜Combination Space

人物部分完成后再进入：

~~~text
Person Feature
×
Life Stage / Domain / Event
×
Partner Need / Lifestyle
↓
Possible Topic Space
~~~

这一步使用 Morphological Space，但不机械生成所有笛卡尔积。

## Phase 6｜Topic Gate / Prioritization

最后才筛：

- 用户是否一眼懂；
- 是否真实有人在意；
- 是否有生活张力；
- 是否能具体画出来；
- 是否存在多个合理视角；
- 是否能帮助理解“我想过什么生活”；
- 是否和已有内容重复；
- 当前生产成本。

这时才能形成：

> 第一批 15 / 30 / 50 个入口。

数量由证据决定，不预设。

## Phase 7｜Reality Validation

用：

- 真实内容脚本；
- 发布反馈；
- 评论语言；
- Relationship 游戏案例；
- 新出现的 orphan terms；

验证当前模型。

最后重新回到上层总结。

---

# 8. 可复用 Pattern

这轮抽象出来的不是“婚恋标签研究专用流程”，而是一个通用 Pattern：

> **Coverage-first Corpus → Multi-view Modeling → Combination Space → Prioritized MVP**

适用于：

- 内容选题空间；
- 场景库；
- 用户需求库；
- 人生事项内容地图；
- 能力 / 用例空间；
- 任何“不能一开始只挑十几个例子”的复杂枚举问题。

是否正式补进 personal-ai-system Research Skill，等本轮真实跑完并验证后再 Promotion。

当前先把它作为这次 Research 的可复用候选 Pattern。

---

# 9. 当前停止点

已经完成：

- 方法路由；
- Research Protocol；
- 16-source Source Registry；
- 256-row Raw Corpus；
- 第一轮 Multi-view 候选模型；
- 旧 15 标签降级逻辑；
- 完整后续研究阶段设计。

下一步继续：

> **扩大 Corpus + 建 Raw Term → View / Concept Mapping。**

现在还不能说“15 个优先入口已经确定”。