# 人物标签空间 Coverage / Conflict Report v0.1

> 状态：Research-only  
> 基于：20 个来源、290 条 Raw Item、第一轮 Raw → View Mapping。

## 1. 当前数据规模

~~~text
Source Registry: 20 sources
Raw Corpus: 290 rows
High-confidence mapping: 216
Medium-confidence mapping: 74
~~~

映射到目标资产：

~~~text
Person Feature Space      225
Relationship Process      31
Reference Model           16
Scene Library             11
Partner Need / Fit         5
Context / Constraint       2
~~~

说明：

> **Raw Corpus 本身已经证明“所有词都属于人物标签”这个假设不成立。**

有一部分原始材料天然应该路由到关系过程、场景或伴侣需要，而不是硬塞进 Person Library。

---

# 2. 各 View 当前覆盖

~~~text
A｜Profile / Reality Facts          96
B｜Social Identity / Context        34
C｜Perceived Traits / Lay Labels    44
D｜Values / Goals / Priorities      11
E｜Capabilities / Regulation         9
F｜Lifestyle / Resource Allocation  33
G｜Relationship Process             31
H｜Compatibility / Needs / Fit       5

另外：
Internal Architecture View           4
Scene View                          11
Reference View                      12
~~~

## 2.1 最明显的来源偏差：A View 过多

A View 有 96 条，主要来自：

- 婚恋平台资料字段；
- 搜索筛选；
- 中国婚配实验。

这不代表现实择偶里 1/3 的重要性都在硬条件。

它更多说明：

> **平台最容易结构化采集的是年龄、学历、收入、住房、身高等字段。**

所以不能按 Raw Item 数量直接做内容优先级。

## 2.2 H View 极少

Compatibility / Needs / Fit 只有 5 条直接映射。

原因可能不是现实不重要，而是：

- 平台通常采个人字段，不采两个人的组合体验；
- “陪伴、空间、情绪交流、生活节奏”常在真正相处后才显现；
- 学术伴侣偏好也经常以单人属性提问。

因此：

> **H 必须单独建立 Need / Fit Corpus。**

## 2.3 E View 也偏少

Capabilities / Regulation 只有 9 条。

但现实内容里：

- 会不会沟通；
- 能不能解决问题；
- 能不能调节情绪；
- 会不会学习和改；

可能比很多抽象标签更接近长期生活。

需要补关系与生活能力研究，而不能只靠择偶标准资料。

---

# 3. 不是矛盾，其实是不同阶段 / 不同测量方式

## 硬条件 vs 内在契合

中国婚配实验、婚恋平台大量出现：

- 收入；
- 房产；
- 学历；
- 年龄；
- 外貌。

而 2025-2026 青年调查又强调：

- 道德品质；
- 三观；
- 性格；
- 三观相合。

这不应简单理解成：

> 年轻人已经不看条件了。

更可能是不同问题在测不同层：

~~~text
能不能进入候选池
→ 硬条件可能很强

愿不愿意深入关系
→ 内在特质 / 感受更强

进入共同生活以后
→ 资源分配 / 关系过程 / Fit 重新变重要
~~~

这恰好符合 Relationship 的内容方向。

---

# 4. 当前高风险混层词

下面这些词不能直接当一个 Feature：

## 情绪稳定

可能混：气质、自控、情绪调节、共情、冲突处理。

## 上进 / 事业心

可能混：价值目标、能力、当前投入、未来潜力。

## 顾家

可能混：家庭价值、时间投入、家务育儿、父母关系、小家庭边界。

## 孝顺

可能混：亲情、资源投入、照护责任、父母介入、夫妻边界。

## 老实

可能混：内向、低社交、守规则、低表达、低冲突、忠诚想象。

## 靠谱 / 责任感

可能混：计划性、承诺执行、危机可靠、代价承担、家务责任。

这些词应该成为后续“标签拆解”的重点，而不是优先级本身。

---

# 5. 当前缺口

下一轮优先补：

1. **真实用户语言**：小红书 / 微博 / 社区中现在怎样说理想伴侣、雷点、长期相处；
2. **Need / Fit**：陪伴、空间、情绪交流、安全、生活节奏、性、家庭边界；
3. **Capabilities**：沟通、情绪调节、问题解决、生活管理、学习修正；
4. **长期共同生活行为**：家务、育儿、照护、财务、父母、迁移中的实际表现；
5. **反例**：同一个“好标签”在什么条件下不带来好体验。

---

# 6. 当前判断

当前证据支持：

> **人物内容空间必须保留多 View，不能从一个标签树直接筛选 Topic。**

当前还不支持：

> **直接确定第一批 15 个正式入口。**

旧 15 标签继续作为 Seed / Regression Set。

下一步应该先把 Person View 的缺口补齐，再用同样方法研究 Scene 和 Need / Fit。