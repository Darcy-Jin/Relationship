# AI 漫画内容地图 v0.2

> 状态：Current / Promoted / 待真实内容验证  
> 作用：定义 Relationship AI Comic 当前正式内容空间。  
> 上一版：`content-map-v0.1.md`（Superseded，保留历史）  
> 研究依据：
> - `../../research/ai-comic/12-person-label-feature-space-research.md`
> - `../../research/ai-comic/person-label-space/`
> - `../../research/ai-comic/scene-space/`
> - `../../research/ai-comic/need-fit-space/`
> - `../../research/ai-comic/combination-space-v0.1.md`
>
> 本文件回答：**内容空间现在怎么理解、怎样从完整空间生成 Topic。**
>
> 单篇内容怎么写，继续读取 [内容模型](content-model.md)。

## 1. 最上层仍然是三个空间

研究以后，原来的三维没有被推翻：

~~~text
Person
×
Scene
×
Need / Fit
↓
Topic Candidate
~~~

但三维内部已经被重新展开。

真正含义变成：

~~~text
这个人身上正在看什么
×
它在什么真实生活条件下显现
×
为什么这种生活对不同人意义不同
↓
形成一个值得讨论的 Relationship Topic
~~~

这里不是做全笛卡尔积。

当前使用的是：

> **受约束的组合空间（Constrained Morphological Space）。**

---

# 2. Person Space｜不是一棵“人物标签树”

人物内容入口至少来自几个不同 View。

## A｜Profile / Reality Facts

现实里直接能看到、能筛选的事实，例如：

- 年龄；
- 身高 / 外在；
- 学历；
- 职业；
- 收入；
- 房 / 资产；
- 婚史；
- 孩子；
- 健康基础事实。

这类内容要继续追问：

> **这个条件到底代理了什么生活，而不是条件本身高低。**

## B｜Social Identity / Context

这个人处在什么现实环境，例如：

- 城市 / 地域；
- 原生家庭；
- 父母距离；
- 职业环境；
- 过去经历；
- 当前压力和负担。

Context 决定：

> **这个人现在实际能投入什么。**

## C｜Perceived Traits / Lay Labels

用户现实里会说：

- 老实；
- 温柔；
- 情绪稳定；
- 强势；
- 上进；
- 顾家；
- 孝顺；
- 独立。

这些词非常适合做内容入口，但只能当：

> **待展开的用户语言。**

不能直接当因果规则。

## D｜Values / Goals / Priorities

真正把什么排在前面，例如：

- 事业；
- 家庭；
- 成长；
- 自由；
- 安全；
- 婚育；
- 忠诚；
- 孝亲。

## E｜Capabilities / Regulation

实际能不能把事情处理好，例如：

- 工作 / 赚钱能力；
- 决策能力；
- 情绪调节；
- 沟通 / 共情；
- 生活管理；
- 学习 / 修正。

## F｜Lifestyle / Resource Allocation

每天怎样使用有限资源，例如：

- 工作投入；
- 可用时间；
- 消费 / 储蓄；
- 社交；
- 运动；
- 作息；
- 兴趣；
- 计划性；
- 家庭投入。

这一层最容易直接生成共同生活内容。

## G｜Relationship Process Entry

用户也会直接用关系语言评价一个人，例如：

- 靠谱；
- 体贴；
- 会沟通；
- 有边界；
- 会修复。

后台必须继续还原成：

> **这个人在什么场景里具体做了什么。**

### 重要边界

Person Space 不是说：

> 一个人等于 A+B+C+D+E+F+G 的静态属性表。

正式人物认识继续读取：

- [人物模型](../../models/person-model.md)

这里仅负责：

> **内容从哪些人物入口进入。**

---

# 3. Scene Space｜场景不是一个“事件名”

研究后，原来：

~~~text
阶段 × 领域 × 事件
~~~

还不够。

当前正式理解：

~~~text
Life / Relationship Stage
×
Shared-life Domain
×
Trigger / Transition / Stressor
×
Task / Resource Reallocation
↓
Concrete Scene
+
Pattern / Time Dynamics
~~~

## 3.1 Life / Relationship Stage

例如：

- 认识 / 相亲；
- 恋爱 / 磨合；
- 稳定交往；
- 同居 / 婚前；
- 结婚；
- 备孕 / 怀孕 / 生育；
- 婴幼儿照护；
- 孩子成长；
- 中年多重责任；
- 退休 / 老年 / 长期照护。

## 3.2 Shared-life Domain

当前保留 12 个一级领域：

1. 日常作息与生活管理；
2. 工作 / 事业 / 学习；
3. 钱 / 财务；
4. 房 / 居住 / 地点；
5. 家务 / 家庭劳动；
6. 孩子 / 生育 / 教育；
7. 双方父母 / 原生家庭；
8. 社交 / 朋友 / 个人空间；
9. 兴趣 / 休闲 / 旅行；
10. 性 / 身体亲密；
11. 健康 / 疾病 / 照护；
12. 价值 / 人生方向。

## 3.3 Trigger / Transition / Stressor

让原来的生活结构发生变化，例如：

- 工作时间突变；
- 晋升 / 创业 / 外派；
- 失业 / 收入下降；
- 大额财务事件；
- 搬家 / 异地；
- 生育 / 育儿；
- 父母责任变化；
- 健康变化；
- 社交 / 边界事件；
- 反复小问题累积。

压力事件的作用不是制造狗血。

而是：

> **让平时隐藏的人物模式和关系过程显现。**

## 3.4 Task / Resource Reallocation

场景真正逼两个人重新分配：

- 时间；
- 钱；
- 精力 / 注意力；
- 家务；
- 育儿；
- 照护；
- 职业机会；
- 空间；
- 情绪支持；
- Mental Load / 计划责任。

这是从“事件”走到“共同生活”的关键中间层。

## 3.5 Concrete Scene

最后必须压成可画出来的瞬间。

例如：

~~~text
“事业与家庭冲突”
→ 太抽象

“孩子半夜高烧，明早一方要做重要汇报”
→ 可以进入漫画
~~~

## 3.6 Pattern / Time Dynamics

时间不只有“恋爱 → 结婚 → 生孩子”。

还要看：

- 第一次；
- 第三次；
- 每周反复；
- 持续半年；
- 说过很多次仍不变；
- 修复以后有没有维持。

因此：

> **一次行为不能自动升级成一个人的固定特点。**

---

# 4. Need / Fit Space｜不是一张“需求清单”

研究后，原来的“伴侣需要 / 生活方式”被拆成六个不同问题。

## N1｜Need Content

当前保留 12 组：

1. 吸引 / 欲望；
2. 陪伴 / 连接 / 归属；
3. 被理解 / 被回应 / 被关心；
4. 自主 / 空间 / 自由；
5. 安全 / 信任 / 可预测；
6. 经济 / 物质安全；
7. 公平 / 可靠 / 合作；
8. 成长 / 能力 / 目标支持；
9. 活力 / 新鲜感 / 有趣 / 共同体验；
10. 性 / 身体亲密；
11. 家庭投入 / 家庭边界；
12. 价值 / 人生方向 / 未来一致性。

## N2｜Need Shape

同一个需要对不同人不是统一权重。

可能是：

- 门槛；
- 越高越好但逐渐够用；
- 最舒服区间；
- 两人组合；
- 条件性接受；
- 愿意做的交换。

## N3｜Fulfillment Mechanism

“我需要什么”不能直接推出“找什么标签的人”。

需要继续看现实机制，例如：

- 理解 / 验证 / 关心；
- 承诺执行；
- 公平承担；
- 自主支持；
- 情绪 / 实际支持；
- 沟通；
- 冲突 / 修复；
- 共同应对压力；
- 目标支持；
- 性沟通和性自主支持。

例如：

~~~text
Need
→ 被理解

不是直接：
→ 找一个“情商高”的人

而是：
→ 我表达以后，对方是否准确理解、承认并回应
~~~

## N4｜Fit Mode

Compatibility 不等于 Similarity。

可能是：

- 相似；
- 互补；
- 差异但互不干扰；
- 差异需要协调；
- 条件性兼容；
- 核心方向冲突。

真正要问：

> **这个差异进入生活以后，要不要协调，能不能协调，成本多大。**

## N5｜Trade-off / Tolerance

最终回到：

- 喜欢；
- 能接受；
- 必须调整；
- 长期不能接受；
- 愿意交换；
- 条件改变后可以接受。

## N6｜Safety Boundary

暴力、性胁迫、强制控制、严重心理虐待等不进入普通 Trade-off。

---

# 5. 三个空间怎样组合

当前主链：

~~~text
用户语言 / 现实条件
↓
还原成 Person Concept
↓
只连接 Relevant Life Domain
↓
选择 Applicable Stage
↓
选择真正能让它显现的 Trigger
↓
明确重新分配的 Task / Resource
↓
压成 Concrete Scene
↓
连接 Relevant Need + Need Shape
↓
看真实 Fulfillment Mechanism
↓
形成 Fit / Trade-off
↓
Topic Candidate
~~~

不是：

~~~text
标签 × 随机场景 × 随机需求
~~~

---

# 6. Topic Gate

候选进入内容前先检查：

1. **Semantic Fit**：人物特点和这个生活领域真有关系吗？
2. **Reality Fit**：现实里真的可能这样发生吗？
3. **Need Relevance**：它真的会影响某个 Need / Fit 吗？
4. **Observable**：能不能变成可画出来的生活瞬间？
5. **Reframe Strength**：换一种合理需要后，判断会有意义地变化吗？
6. **No False Causality**：有没有从标签直接跳到必然行为？
7. **Relationship Core Fit**：是否帮助用户从“人好不好”走向“我想不想过这种生活”？

通过以后才进入：

> Content Brief → 标题 → 小章节 → Episode。

---

# 7. 当前研究空间规模

本轮已经建立：

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

受约束组合：

~~~text
Candidate Pool v0.2
= 2733 combinations
~~~

这 2733 条不是 2733 篇文章。

它们是：

> **可追溯的内容可能空间。**

---

# 8. 当前 Priority Set

研究后已经从组合空间形成：

- 30 个 Priority Candidate；
- 首批 15；
- 后备 15。

正式入口：

- [Priority Set v0.1](topic-priority-set-v0.1.md)

旧的 9 个 Topic：

- [Topic Pool v0.1](topic-pool-v0.1.md)

继续保留为早期验证样本，不再代表当前 Priority Set。

---

# 9. 下一步验证

现在不继续扩 Raw Corpus。

下一步从首批 15 中选择 3～5 个不同类型 Topic，真正进入：

~~~text
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

优先选择彼此差异足够大的题，例如：

- 事业 / 时间；
- 父母 / 家庭边界；
- 生活习惯；
- 情绪 / 关系过程；
- 硬条件代理。

目的不是马上批量生产。

而是用真实内容验证：

> **这套大内容空间，能不能稳定地产生真正好讲、真实、有用的 Relationship 内容。**
