# 10｜相亲信息、择偶判断与交互设计研究

> 状态：**Research-only｜待共同理解后决定是否晋升正式 Product / Engine**
>
> 日期：2026-09-24
>
> 当前问题：Relationship 本质是一个关系决策 / 自我认知工具。第一阶段从相亲进入时，到底需要覆盖哪些信息；哪些应该直接展示、哪些应该通过互动暴露；玩家每一次点击怎样才真正有功能价值。
>
> 上位依据：
> - [08｜Relationship 第一版目标用户研究](08-target-user-segmentation.md)
> - [09｜未来体验为什么可能帮助重大关系决策](09-future-experience-decision-mechanism.md)
> - [确定性游戏引擎 v0](../engine/deterministic-engine-v0.md)
> - [First Life v2｜相亲开场工作稿](../product/first-life-v2-blind-date-opening.md)

---

# 0. 一句话结论

当前 First Life v2 最大的问题不是“游戏感还不够”，而是：

> **前台交互和后台要认识的问题没有建立稳定映射。**

Relationship 作为工具，应该用最省的交互得到真正有用的信息：

~~~text
能直接知道的事实
→ 直接展示

玩家自己明确知道的硬条件
→ 必要时直接问

只有放在一起比较才知道的取舍
→ 做比较 / trade-off

需要看这个人怎么相处才知道的
→ 用真实对话与 Scene 暴露

只有进入共同生活才知道的
→ 留到后续 Life Run

仍然解释不清
→ 再补一次澄清
~~~

体验不是独立目标。

> **体验服务于功能：让用户更自然、更准确、更低成本地作出真实反应。**

---

# 1. Research Protocol

## 1.1 目的

这轮不是继续润色“第一次相亲”文案。

要回答：

1. 相亲 / 长期伴侣选择到底涉及哪些信息域？
2. 中国城市婚恋语境里，钱、房、学历、年龄等现实条件应该处在什么位置？
3. 现有 Relationship 的 11 个 Candidate trait 是否够用？
4. 什么信息适合人物卡，什么信息适合 Conversation / Scene / Life Run？
5. 每次让玩家点击一次，应该产生什么实际价值？
6. 怎样避免重新做成 300 道婚恋问卷，同时又保证工具有足够信息？

## 1.2 当前候选假设

来自本轮试玩反馈：

- 现有维度可能不够；
- 相亲资料需要更接近真实世界，如钱、房等；
- 旅游、做饭、周末不是“无用话题”，关键是它们有没有暴露生活方式与取舍；
- 不同人物的相亲不能共用一套通用聊天脚本；
- 场景应由人物差异自然地产生；
- 每个需要玩家操作的交互都应该有作用；
- 对话应该真正一来一回，根据玩家回答产生不同回应；
- 工具优先级：功能 / 效率优先，体验为功能服务。

以上全部作为待验证候选，不直接当结论。

## 1.3 范围

本轮研究：

- 伴侣选择 / mate preference；
- 中国婚恋中的现实筛选因素；
- 长期关系重要生活领域；
- 价值澄清 / preference elicitation；
- adaptive choice；
- 场景化判断方法。

本轮不研究：

- 美术风格；
- 音效；
- 商业化；
- AI 自由生成剧情；
- 第二段人生的完整玩法。

---

# 2. System Baseline

现有 Rule Engine 已有：

~~~text
economic_stability
career_intensity
daily_availability
responsiveness
crisis_reliability
autonomy_need
family_investment
social_energy
predictability
fairness
boundary_respect
~~~

另外有：

- children_intent；
- long_distance_risk；
- relationship_seriousness；
- Attraction 属于“玩家 × 候选人”；
- Evidence / Hypothesis；
- Contrast Pack；
- 不使用统一匹配总分。

这套模型对“进入关系以后怎么相处”已经有一定基础。

当前明显薄弱的是：

> **现实相亲的第一层筛选信息，以及“人物条件怎样转成生活”的中间层。**

---

# 3. 外部研究：伴侣选择不能只看一种维度

## 3.1 Ideal Standards：人既看“这个人怎么样”，也看“他有什么资源”

Fletcher 等人的 Ideal Standards Model 将理想伴侣特质归纳为三个大方向：

- warmth–trustworthiness：温暖 / 可信；
- vitality–attractiveness：活力 / 吸引；
- status–resources：地位 / 资源。

同时，理想关系本身还有 intimacy–loyalty、passion 等维度。

这说明至少要区分：

~~~text
对方是谁 / 有什么
≠
两个人的关系怎样运作
~~~

来源：

- Fletcher, Simpson, Thomas & Giles (1999), Ideals in Intimate Relationships
- https://pubmed.ncbi.nlm.nih.gov/9972554/

---

## 3.2 Mate Budget：真正重要的不是“每项打几分”，而是资源有限时怎么取舍

Li 等人的 mate budget 研究让参与者在有限预算下配置理想伴侣特质。

核心启发：

> 当资源有限时，人会区分“先满足到某个程度的必要项”和“有剩余再追求的加分项”。

这比单纯问：

> “收入有多重要？1～5 分”

更接近 Relationship 的目标。

来源：

- Li, Bailey, Kenrick & Linsenmeier (2002), The necessities and luxuries of mate preferences: testing the tradeoffs
- https://pubmed.ncbi.nlm.nih.gov/12051582/

---

## 3.3 自己说的偏好，不一定能预测面对真人后的吸引

Eastwick & Finkel 的 speed-dating 研究发现：

- 人在抽象描述理想伴侣时会表达稳定的偏好差异；
- 但实际见到真人以后，这些声明未必按同样方式预测 romantic desire。

这不能证明“人不知道自己要什么”。

它支持更克制的产品判断：

> **静态自报偏好和具体互动反应需要同时保留，不能只信其中一个。**

来源：

- Eastwick & Finkel (2008), Sex differences in mate preferences revisited
- https://pubmed.ncbi.nlm.nih.gov/18211175/

---

# 4. 中国语境：钱、房、学历等不能从第一版里消失

2025 年对 2021 CGSS 假想配偶实验数据的重新分析使用了六项现实信息：

- 年龄；
- 收入；
- 家庭背景；
- 是否有房；
- 学历；
- 外貌。

结果显示这些条件都会影响潜在伴侣评价，其中收入、住房、教育等社会经济条件对女性评价男性的影响更明显。

更重要的是，该 QCA 研究强调：

> **接受一个人往往来自属性组合，而不是每一项独立相加。**

因此：

> “有房 + 收入高 + 年龄合适 + 外貌喜欢”

可能形成一种选择路径，但不能推出：

> “有房 = 所有人必须有的硬门槛”。

来源：

- Xu (2025), Exploring causal complexity in mate preferences in China
- https://link.springer.com/article/10.1186/s40711-025-00245-z

中国住房研究也说明，住房在婚姻形成中确实有特殊现实意义，但不同人是否把买房当成婚前必要条件存在明显差异。

来源：

- Qiu & Liu (2026), Housing Prices and Marriage Delay: Evidence from China
- https://link.springer.com/article/10.1007/s11146-026-10053-y

### 对 Relationship 的直接结论

当前人物卡只放：

> 年龄 + 工作 + 一两句生活描述

信息太薄。

第一版至少需要认真考虑：

- 收入 / 经济稳定；
- 住房；
- 学历；
- 当前城市与未来居住；
- 婚育意愿；
- 其他玩家自己的硬约束。

但：

> **这些是“应该进入信息域”，不等于全部都要做成硬 Gate。**

---

# 5. 长期关系需要看的东西，比“相亲条件”更大

PREPARE/ENRICH 当前覆盖：

- communication；
- conflict；
- finances；
- intimacy；
- personality / habits；
- roles / responsibility；
- children / parenting；
- health；
- leisure time；
- stress；
- family & friends；
- values / beliefs。

来源：

- https://www.prepare-enrich.com/the-assessment/
- https://www.prepare-enrich.com/couples/

Gottman Relationship Checkup 也覆盖：

- friendship / intimacy；
- stress / conflict；
- trust / commitment；
- extended family；
- values / goals；
- housework / childcare；
- finances；
- fun together；
- children；
- distressing events 等。

来源：

- https://www.gottman.com/professionals/checkup/
- https://www.gottman.com/professionals/checkup/psychometrics/

这说明：

~~~text
相亲时“这个人条件怎么样”
↓
只是入口

真正长期要回答的是
“和这个人生活怎样运转”
~~~

因此钱在两个阶段含义不同：

~~~text
相亲前
→ 收入、住房、资产 / 债务等现实条件

进入关系以后
→ 怎么花钱、怎么存钱、风险偏好、家庭支出、是否公平协商
~~~

不能混成一个 economic_stability。

---

# 6. 用户这次提到“时间怎么用”，方向是对的，但不能直接做“相同度”

旅行、周末、做饭、加班、朋友局本身都不是无用话题。

它们可以暴露：

> **这个人怎么分配有限资源。**

至少包括：

~~~text
时间
→ 工作 / 伴侣 / 自己 / 朋友 / 父母

钱
→ 储蓄 / 日常 / 体验 / 奢侈消费 / 风险 / 家庭

精力
→ 事业 / 家庭 / 社交 / 成长

注意力 / 优先级
→ 平时与关键时刻给谁

空间
→ 共同生活 / 独立生活

计划性
→ 稳定 / 临时 / 随性
~~~

这层很重要，因为它正好连接：

~~~text
人物条件
↓
日常资源分配
↓
共同生活
~~~

### 但需要主动反驳一个诱人结论

不能写：

> “他和我使用时间越相同，就越匹配。”

相似性研究并不支持所有维度都简单按“越像越好”计算。

更稳妥的做法是：

> **暴露事实，让玩家自己体验“这种分配方式我舒不舒服”。**

系统记录 Evidence，不奖励“相同”。

---

# 7. 关系怎么运作，仍然必须单独保留

现有 Engine 里的这些维度依然重要：

- responsiveness；
- crisis_reliability；
- fairness；
- boundary_respect；
- predictability。

其中 perceived partner responsiveness 在关系研究里有明确含义：

> 对方是否让我感到自己的想法、目标和需要被理解、认可和在意。

来源：

- Arican-Dinc & Gable (2023), Responsiveness in romantic partners' interactions
- https://pubmed.ncbi.nlm.nih.gov/37515977/

公平也不能简单等于“必须 50/50”。

研究更支持关注：

> **玩家是否觉得当前分配公平。**

来源：

- Carlson et al. (2019), Gendered perceptions of fairness in housework and shared expenses
- https://pubmed.ncbi.nlm.nih.gov/30893363/

因此：

~~~text
资源怎么分
≠
玩家是否喜欢这种分法
≠
两个人遇到分歧时怎么谈
~~~

这三层不能合并。

---

# 8. 当前最合适的“信息模型”：四层，不平铺成几十个属性

## Layer A｜相亲前可以直接知道的现实信息

目的：

> 第一眼筛选与形成初始判断。

候选域：

- 年龄；
- 主观外貌 / 吸引；
- 城市与距离；
- 工作；
- 收入 / 经济稳定；
- 住房；
- 学历；
- 家庭基本情况；
- 长期关系 / 婚姻意图；
- 孩子；
- 吸烟饮酒等明确生活习惯；
- 用户自己的其他 hard constraints。

这些信息不值得设计成 Scene 让用户“猜”。

---

## Layer B｜这个人怎么使用有限资源

目的：

> 把“条件”连接到“生活”。

核心资源：

- 时间；
- 钱；
- 精力；
- 注意力 / 优先级；
- 个人空间；
- 计划与确定性。

例如：

> “周末做饭”

不是一个独立择偶维度。

它可能让玩家看见：

- 周末是否愿意留给共同生活；
- 时间是计划型还是临时型；
- 做饭是不是一种家庭投入；
- 玩家自己喜欢一起做还是各做各的。

---

## Layer C｜两个人发生分歧以后，关系怎么运作

目的：

> 看“相处能力”，不是看条件。

至少包括：

- responsiveness；
- reliability；
- fairness；
- boundary；
- conflict；
- repair；
- trust；
- commitment。

这里现有 Engine 有基础，但 conflict / repair 仍明显不足。

---

## Layer D｜共同生活真正会遇到的领域

目的：

> 把前面的人物与关系机制放进现实。

至少包括：

- 钱；
- 房 / 居住；
- 工作与职业机会；
- 家务与责任；
- 孩子；
- 父母 / 亲属；
- 社交；
- 健康与压力；
- 性 / 亲密；
- 城市与迁移；
- 休闲与共同时间。

注意：

> 这些是 **生活领域 / Event Domain**，不应该全部塞进 Candidate trait。

---

## 独立层｜安全与红线

暴力、控制、虐待等安全问题继续独立。

不和普通 trade-off 一起计算。

---

# 9. 更关键的第二个 View：不同信息应该用不同交互拿

这轮研究真正改变 First Life v2 的，是下面这个关系。

## 9.1 Show｜能直接知道的就直接给

例如：

- 年龄；
- 学历；
- 工作；
- 收入区间；
- 房产 / 居住；
- 城市。

原则：

> **不要为了“游戏化”把现实事实藏成谜题。**

工具首先要高效。

---

## 9.2 Ask｜用户自己已经明确知道的硬条件，必要时直接问

例如：

- 完全不能接受异地；
- 明确不要孩子 / 必须要孩子。

如果一个条件玩家本来就能直接回答：

> 不值得花三场剧情重新“测”出来。

---

## 9.3 Compare｜只有放在一起才知道的取舍，用比较

医学决策支持领域的价值澄清方法（Values Clarification Methods）长期研究：

- rating；
- ranking；
- pros / cons；
- conjoint analysis；
- adaptive conjoint analysis 等方式。

2021 系统综述发现，显式价值澄清方法总体上可以降低价值不一致的选择和 decisional conflict，但不同方法之间没有一个稳定的万能赢家。

2026 ISPOR 系统综述中常见方法包括：

- Adaptive Conjoint Analysis；
- Analytic Hierarchy Process；
- simple ranking；

同时指出复杂度本身就是实际障碍。

来源：

- Witteman et al. (2021), Clarifying Values
  https://pubmed.ncbi.nlm.nih.gov/34565196/
- Witteman et al. (2016), Design Features of Explicit Values Clarification Methods
  https://pubmed.ncbi.nlm.nih.gov/26826032/
- 2026 ISPOR systematic review
  https://www.sciencedirect.com/science/article/pii/S1098301526023879
- conjoint review
  https://pubmed.ncbi.nlm.nih.gov/29592585/

### 对 Relationship 的迁移

不要做 30 个维度逐项评分。

当真正的问题是：

> “高收入但更忙” vs “收入普通但时间多”

才给一个有现实约束的比较。

这比：

> “你有多看重收入？1～5”

更接近我们需要的 Evidence。

---

## 9.4 Conversation｜需要知道两个人“怎么不同”，用真正来回的对话

例如旅行：

不需要旁白解释：

> “他喜欢随性旅行。”

可以直接：

> 他：“我旅行基本不做详细攻略。你呢？”

玩家：

> “我也喜欢到了再说。”

对方：

> “那我们这点挺像。”

或者：

> “我一般会把酒店和路线先定好。”

对方：

> “那我们这点不太一样，我临时改计划挺多的。”

这个交互的作用不是“增加人味”。

它在完成：

~~~text
Reveal Candidate
+
Elicit Player
+
Expose Difference
~~~

但注意：

> “一样 / 不一样”只描述差异，不自动计算好坏。

---

## 9.5 Scene / Probe｜需要看行为才知道的，用有目的的场景暴露

这里可以借用 Situational Judgment Test 的一个非常有限的思想：

> 一个场景如果要支持判断，必须知道它到底在暴露什么 construct。

这不等于把 Relationship 做成 SJT。

2026 一项 SJT meta-analysis 也发现，场景所测 construct 与下游 criterion 越一致，效度越高。

来源：

- https://pubmed.ncbi.nlm.nih.gov/42242715/
- https://pubmed.ncbi.nlm.nih.gov/32353895/

### Relationship 的例子

事业投入高的人：

> 刚开完会、临时加班、工作电话

不是为了制造戏剧。

它应该暴露：

- 时间分配；
- 工作优先级；
- 边界；
- 玩家提出需要以后是否回应。

消费型的人：

> 点一顿很贵的饭 / 买昂贵衣服 / 临时高消费

可以暴露：

- 消费水平；
- 金钱价值；
- 享受 vs 储蓄；
- 是否尊重双方经济边界。

社交型的人：

> 朋友临时加入 / 周末排满

可以暴露：

- 社交时间；
- 两人时间；
- 边界；
- 计划性。

家庭型的人：

> 周末回父母家 / 父母临时有事

可以暴露：

- family investment；
- 父母边界；
- 伴侣优先级；
- 责任方式。

这就是：

> **“不是意外的意外”。**

---

## 9.6 Consequence｜只有长期才知道的，不要在相亲阶段提前解释

例如：

- 高事业投入长期如何影响共同时间；
- 消费方式几年以后怎样影响买房 / 储蓄；
- 父母边界如何影响婚后；
- 家务责任如何累积。

这些属于 Life Run。

相亲第一场只需要给足够的早期 Evidence。

不要一次把一生讲完。

---

## 9.7 Clarify｜只有无法区分原因时才补问

例如玩家明显不想继续见一个人，但当前行为可能有两个解释：

- 不喜欢他太忙；
- 不喜欢他说完才通知自己。

只有这时才需要澄清。

不应该：

> 每发生一个 Scene 都追加一道“为什么”。

---

# 10. 每一个需要玩家点击的交互，都应该有后台 Contract

自然过渡可以存在。

但：

> **只要要求玩家停下来做一次选择，就要能回答“为什么值得她点这一下”。**

建议每个 Interactive Node 至少有：

~~~yaml
purpose:
  - reveal_candidate
  - elicit_player
  - expose_difference
  - test_tradeoff
  - observe_response
  - change_relationship_state
  - clarify_evidence

target:
  - 本次真正涉及的维度 / Hypothesis

candidate_difference:
  - 为什么这个节点属于这个人物，而不是任何人都能套

choices:
  - 玩家在当前场景真的可能说 / 做的事

response_mapping:
  - 人物怎样根据玩家选择作出不同回应

evidence_update:
  - 玩家选择实际提供什么 Evidence

state_effect:
  - 有需要才改变关系状态

skip_if_known:
  - 已经知道时是否跳过

next_probe:
  - 当前仍有哪些竞争解释未区分
~~~

不要求所有字段都在前端出现。

这是设计 / 引擎 Contract。

---

# 11. “工具效率第一”应该怎样落地

不是：

> 每一句话都必须测量。

因为两个人完全没有自然过渡，也会让用户无法进入情境，反而降低真实反应质量。

更准确的规则：

### 自然内容

允许存在：

- 打招呼；
- 一两句承接；
- 场景转换。

但：

> 不要求玩家操作。

### 需要玩家点击的内容

必须至少做到一件事：

- 得到新信息；
- 暴露人物差异；
- 暴露玩家偏好；
- 形成 trade-off；
- 看人物怎样回应；
- 真的改变后续状态。

如果都没有：

> 删除这个点击。

因此：

> **效率不是“字越少越好”，而是“每次向用户索取注意力，都有回报”。**

---

# 12. Adaptive：下一步交互优先减少“不确定性”

Adaptive Conjoint Analysis 和 Computerized Adaptive Testing 都有一个可迁移的底层思想：

> 前面的回答已经给出信息以后，下一题应该尽量选择更有区分力的内容，而不是机械问完整题库。

CAT 本身解决的是测量问题，不应直接套到婚恋判断。

但可以抽取一个工程原则：

~~~text
当前已经知道什么
+
还存在什么竞争解释
↓
选择下一条最能区分的 Probe
~~~

来源：

- https://pubmed.ncbi.nlm.nih.gov/29575849/
- https://pubmed.ncbi.nlm.nih.gov/16293199/
- https://pubmed.ncbi.nlm.nih.gov/41805521/

这和现有 Contrast Pack 的思想其实是一致的。

现有系统不需要推翻。

应该把这种逻辑：

> **从第二段人生的 Contrast Pack，提前下沉到单段人生的 Scene / Probe 选择。**

第一版仍然可以完全确定性，不需要 AI。

---

# 13. 主动质疑

## 13.1 “维度越多，工具越专业”

不成立。

信息域应该足够完整。

但前台一次展现所有维度：

- 认知负担高；
- 会变成问卷；
- 会让用户开始“做正确答案”。

正确方向是：

> **后台完整，前台按当前决策逐步暴露。**

---

## 13.2 “中国相亲看房和钱，所以房和钱应该是固定硬门槛”

不成立。

研究支持：

> 它们在中国婚恋选择中非常重要。

不支持：

> 所有目标女性都必须把它们当 hard gate。

正确做法：

- 进入人物资料；
- 玩家自己筛；
- 只有玩家明确表现为 hard constraint 时，才成为个人 Gate。

---

## 13.3 “时间使用一样，就表示更匹配”

不成立。

可以比较：

- 工作 / 伴侣 / 自己 / 社交的时间结构。

但不要自动把 similarity 计为 positive。

玩家真实体验才决定：

> 她喜欢相似、互补，还是某种具体组合。

---

## 13.4 “工具优先，所以体验不重要”

也不成立。

体验对 Relationship 不是装饰。

因为我们依赖：

> 玩家进入具体生活以后产生真实反应。

体验太差，玩家只能站在外面做抽象题，工具本身就失效。

更准确：

~~~text
功能决定体验要服务什么
↓
体验帮助获得更真实的 Evidence
↓
不为了“好玩”增加无功能的内容
~~~

---

# 14. 这轮研究把原来的认识改了什么

## 保留

- Relationship 是低成本未来体验，不是未来预测；
- Candidate 不做统一总分；
- 玩家行为 Evidence 比开局自评更重要；
- Rule Engine 保持确定性；
- responsiveness / reliability / fairness / boundary 等维度继续保留；
- 多段 Life Run + Contrast Pack；
- 人物差异必须通过生活表现出来。

## 修改

原来：

> Candidate trait 基本承担整个人物模型。

现在：

> **人物需要至少区分“现实事实 / 资源分配 / 关系过程”；生活领域另放 Event Domain。**

原来：

> 每个相亲人物走一组差不多的聊天节点。

现在：

> **Scene 必须由人物差异和当前未解决问题决定。**

原来：

> 选项主要负责让玩家有参与感。

现在：

> **每次需要玩家操作，都必须有明确 Interaction Contract。**

## 新增候选

- 收入 / housing / education 等现实 Profile；
- money allocation / spending-saving；
- time allocation；
- conflict / repair；
- 单段 Life Run 内的 adaptive probe 逻辑。

## 暂时不做

在共同理解以前：

- 不修改 spec/v0/candidates.json；
- 不修改 Engine 正式 dimensions；
- 不重写 First Life 正式设计；
- 不继续逐句打磨 /play-v2/。

---

# 15. 如果共同理解后要正式晋升，应该改哪里

不是把这份 Research 当运行规则。

Promotion Package 应该至少包含：

## Product

docs/product/first-life-v2-blind-date-opening.md

补：

- 相亲阶段到底承担什么功能；
- Profile / Conversation / Scene 的分工；
- 交互有效性规则。

## Engine / Spec

需要重新检查：

- spec/v0/dimensions.json
- spec/v0/candidates.json
- spec/v0/events.json
- docs/engine/deterministic-engine-v0.md

重点不是无限加字段。

而是先区分：

~~~text
Candidate Facts
Resource Allocation
Relationship Process
Event Domain
~~~

## Experience

/play-v2/

重做：

- 人物卡信息；
- 删除空交互；
- conditional dialogue；
- character-specific probe；
- 玩家已经明确的信息不重复问。

## Validation

第一版不验证“剧情好不好看”。

优先验证：

1. 玩家是不是更快看懂“这几个人哪里不同”；
2. 每次点击是否都能解释它提供了什么信息；
3. 玩家是否出现“我原来以为 X，但这个具体情况里我实际选了 Y”；
4. 同样的玩家选择能否稳定进入下一条有区分力的 Probe。

---

# 16. 当前 Research Stop Condition

继续搜更多“婚恋有多少维度”，预计只会继续加条目。

当前真正重要的结构已经稳定：

~~~text
信息有什么
+
用什么方式拿
+
每个交互为什么存在
+
下一步怎样自适应
~~~

因此这轮 Research 在这里停止。

下一步不是继续补来源。

而是：

> **共同校准这两个 View：四层信息模型 + 七种信息获取方式。**

确认后再正式晋升并重构 First Life v2。
