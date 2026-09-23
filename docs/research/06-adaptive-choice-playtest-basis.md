# 06｜自适应选择：下一轮不随机出人，而是专门验证“你到底在乎什么”

> 状态：产品机制的定向研究依据。  
> 目的：为 First Playable 的“上一轮形成假设 → 下一轮给对照人物”提供成熟方法参考。

## 1. 为什么要查这一块

当前游戏最关键的问题不是：

> 候选人有多少属性。

而是：

> **玩家经历一次以后，下一轮怎样更聪明地出题，帮助他区分自己到底在乎什么。**

如果下一轮继续随机出四个人，重玩很容易只是重复体验。

我们需要一种：

> **根据前面的选择和反应，主动挑最有区分度的下一组选择。**

---

## 2. 自适应选择研究已经有类似结构

Adaptive Choice-Based Conjoint（ACBC）不是直接扔给参与者一堆随机组合。

典型结构包括：

1. **Build Your Own**：先让参与者表达自己理想的属性水平；
2. **Screener**：看哪些完整方案是“可能接受”的；
3. **Must Have / Unacceptable**：继续确认哪些条件是真门槛；
4. **Choice Tournament**：在仍然可接受的完整方案之间反复选择；
5. 后续题目根据前面的回答进行定制。

参考：

- Cunningham, Deal & Chen, *Adaptive Choice-Based Conjoint Analysis: A New Patient-Centered Approach to the Assessment of Health Service Preferences*  
  https://pmc.ncbi.nlm.nih.gov/articles/PMC3580138/

- Saure & Vielma, *Ellipsoidal Methods for Adaptive Choice-Based Conjoint Analysis*  
  https://pubsonline.informs.org/doi/10.1287/opre.2018.1790

这类自适应设计的一个核心目标是：

> **不要继续问已经很确定的东西，把后续选择集中在当前最不确定、最能改变判断的位置。**

---

## 3. 这和 Relationship 的机制怎样对应

我们不直接采用 conjoint 的“效用估计”。

只借它的交互结构。

```text
ACBC
Build Your Own
↓
Relationship
开局：你以为自己想要什么


ACBC
Must Have / Unacceptable
↓
Relationship
哪些是你当前认为的门槛 / 雷区


ACBC
Adaptive Choice Set
↓
Relationship
根据上一段人生里暴露的问题，
生成下一组最有区分度的人


ACBC
Choice Tournament
↓
Relationship
经历几轮不同人生，
看哪些偏好反复稳定
```

---

## 4. Relationship 需要比普通 adaptive choice 多一层

普通 conjoint 主要研究：

> “你选择哪个组合？”

我们的游戏还要加入：

> **选完以后真的过一段生活。**

因此实际循环是：

```text
直接表达
↓
选择一个完整的人
↓
过日子
↓
观察舒服 / 痛苦 / 后悔
↓
形成多个竞争解释
↓
选择下一轮最有区分度的对照
↓
再过一次
```

这让“选择结果”不只是：

> 我选了 A。

还包括：

> **我和 A 生活以后，到底为什么开心或痛苦。**

---

## 5. 后续问题要围绕“竞争解释”生成

例如玩家说：

> “我受不了事业型的人。”

系统至少保留几个解释：

```text
H1：真的不喜欢高事业投入
H2：不喜欢陪伴时间太少
H3：不喜欢关键时刻不可靠
H4：不喜欢自己永远排在工作后面
```

下一轮不是把事业值调到中等。

而应该找：

> **哪组人物最能区分 H1 / H2 / H3 / H4。**

例如：

```text
A
事业高 / 陪伴少 / 高可靠

B
事业中 / 陪伴多 / 低回应

C
事业高 / 陪伴少 / 低可靠

D
事业中 / 陪伴中 / 高回应
```

玩家新的选择和生活体验，会让部分解释变强，部分变弱。

---

## 6. 这不是科学测量承诺

Adaptive conjoint 有自己的统计模型、实验设计和效度要求。

Relationship 当前不做这些。

我们只是借用：

> **先表达 → 看完整组合 → 找门槛 → 自适应出下一组高信息量选择**

这一条成熟设计思想。

因此目前仍然定位为：

> **有研究依据的模拟和启示。**

不是：

> “我们通过四局游戏精确测出了你的真实效用函数。”

如果未来真的需要做测量声明，再单独建立验证研究。
