# AI Comic Combination Space v0.1｜从三套研究空间生成 Topic

> 状态：Research-only / Candidate Model  
> 上游：Person Feature Space + Scene Space + Need/Fit Space  
> 目的：在不机械做全笛卡尔积的前提下，把完整研究空间转成大规模可筛选的 Topic Candidate。

## 1. 三套空间现在分别回答什么

~~~text
Person Feature
= 这个人身上正在看什么

Scene
= 它在什么真实生活条件下显现

Need / Fit
= 为什么同一件事对不同人意义不同
~~~

因此原来的三维公式继续成立，但现在每一维内部已经被研究拆开：

~~~text
Person
├─ Profile / Context
├─ Values / Goals
├─ Capabilities
├─ Lifestyle / Resource Allocation
└─ Relationship Patterns

Scene
├─ Life Stage
├─ Shared-life Domain
├─ Trigger / Stressor
├─ Task / Resource Reallocation
├─ Concrete Scene
└─ Pattern over Time

Need / Fit
├─ Need Content
├─ Need Shape
├─ Fulfillment Mechanism
├─ Fit Mode
├─ Trade-off
└─ Safety Boundary
~~~

---

# 2. 为什么不能做 Raw Cartesian Product

如果机械组合：

~~~text
47 Person Concepts
× 50 Scene Coordinates
× 47 Need/Fit Concepts
~~~

已经超过 11 万个组合。

而 Scene 本身如果继续把 Stage × Domain × Trigger × Task 展开，理论空间会迅速进入百万级。

绝大多数没有意义。

例如：

> 身高 × 父母住院 × 性沟通

技术上能组合，内容上没有自然因果或生活关联。

所以真正需要的是：

> **Constrained Morphological Space。**

先建立适用关系，再生成候选。

---

# 3. 当前组合主链

~~~text
Step 1｜Entry
用户语言 / 现实条件 / 一个具体人物特点
↓
Step 2｜Resolve
还原成 Canonical Person Feature
↓
Step 3｜Domain Fit
这个 Feature 真正会进入哪些生活领域？
↓
Step 4｜Stage Fit
在哪些人生阶段它会变得重要？
↓
Step 5｜Trigger Fit
什么事件 / 压力最容易让它显现？
↓
Step 6｜Need Fit
它最可能触碰哪些 Need？Need 是什么形状？
↓
Step 7｜Mechanism
需要通过什么关系过程被满足 / 破坏？
↓
Step 8｜Reframe
换一种 Need / Fit，判断会不会改变？
↓
Step 9｜Topic Gate
值得不值得变成内容
~~~

---

# 4. 三类入口的 Content Role 不一样

## 4.1 Selection Gate Entry

例如：

- 年龄；
- 身高；
- 学历；
- 外貌；
- 是否有房。

这些词用户很在意，但有些不天然产生丰富共同生活。

它们更适合问：

> **我为什么把它当门槛？它真正代理了什么？**

如果无法继续落到生活，不强行做 Episode。

## 4.2 Life-generative Feature

例如：

- 事业优先；
- 工作投入；
- 社交密度；
- 消费方式；
- 家庭投入；
- 计划性。

这些天然会进入生活场景，是内容主力。

## 4.3 Relationship-process Entry

例如：

- 靠谱；
- 体贴；
- 顾家；
- 有边界；
- 会沟通。

这些是用户语言，但后台必须继续还原到：

> **在具体场景中做了什么。**

---

# 5. Valid Combination Gate

生成 Candidate 前，先检查：

### Gate A｜Semantic Fit

Person Feature 和 Scene Domain 有自然关系吗？

### Gate B｜Reality Fit

这个组合现实里真的会发生吗？不是为了凑反差硬编吗？

### Gate C｜Need Relevance

这个 Scene 的结果会真实影响至少一个 Need / Fit 吗？

### Gate D｜Observable

能不能压成一个可以画出来的行为 / 瞬间？

### Gate E｜Multiple Legitimate Views

换一种 Need / 生活方式以后，判断是否可能有意义地变化？

### Gate F｜No False Causality

有没有从标签直接跳到行为，把相关 / 概率写成必然？

通过 A～F 才进入 Candidate Pool。

---

# 6. Topic Priority Gate

Candidate Pool 建好以后，再筛当前值得做的 Topic。

不先规定一定 15 个。

当前按阶段 Gate 而不是一个总分：

## P1｜User Salience

- 用户现实中会不会这么说；
- 是否在多个独立来源出现；
- 是否属于真实筛选 / 纠结。

## P2｜Relationship Core Fit

- 是否能从标签走向具体的人；
- 是否能从单点优点走向整套生活；
- 是否能帮助用户认识自己的 Need / Trade-off。

## P3｜Scene Strength

- 场景是否具体；
- 是否一眼能懂；
- 是否有自然动作 / 对话；
- 是否适合漫画。

## P4｜Reframe Strength

- 有没有至少两个都合理的生活解释；
- 是否避免“教育读者正确答案”。

## P5｜Evidence / Reality

- 底层机制是否有研究 / 内部模型 / 真实案例支撑；
- 是否存在明显反例需要保留。

## P6｜Portfolio Value

- 是否和现有 Topic 重复；
- 能否覆盖新的 Person / Scene / Need 组合；
- 是否能给游戏提供新 Case。

## P7｜Production Readiness

- 当前能否用现有角色 / 场景表达；
- 生产成本是否适合当前阶段。

前 6 个 Gate 决定“值不值得做”。

P7 只决定“现在做还是以后做”，不能反过来决定内容价值。

---

# 7. Candidate Pool 不等于发布排期

正式区分：

~~~text
Raw Corpus
→ 不丢原始材料

Canonical Registry
→ 能组合的概念

Candidate Combination Pool
→ 大量语义有效组合

Topic Candidate
→ 已经出现明确生活张力

Priority Set
→ 当前值得先做

Episode
→ 已进入 Content Brief / Script
~~~

不要以后又把这几层压成一张“选题表”。

---

# 8. 当前生成规则

第一版 Candidate Pool 使用：

~~~text
Person Feature
→ 只连接到 Relevant Domain

Domain
→ 只连接到 Applicable Stage

Domain
→ 只连接到 Relevant Trigger

Person Feature
→ 只连接到 Relevant Need
~~~

然后形成：

~~~text
Person Feature
× Relevant Domain
× Applicable Stage
× Relevant Trigger
× Relevant Need
~~~

这仍然会产生上千个组合，但已经不是随机排列。

Task / Resource Reallocation、Need Shape、Fulfillment Mechanism、Pattern over Time 在进入具体 Topic 时再补，不在第一层 Pool 里把组合数继续指数放大。

---

# 9. 当前停止条件

Combination Space 的第一轮完成条件：

1. 每个主要 Person View 都有候选；
2. 12 个 Shared-life Domain 都被覆盖；
3. 12 个 Need Content 都被覆盖；
4. 至少覆盖认识、恋爱、同居、婚后、育儿、中年 / 照护等主要阶段；
5. 能从 Candidate Pool 中筛出多批不同内容，而不需要临场重新发明分类；
6. 随机抽查不出现大量语义荒谬组合。

通过以后，才进入 Priority Set。