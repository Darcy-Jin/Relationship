# AI Comic Series Batch Production v0.1

> 状态：Current / Planning  
> 上游：
> - [Series Map v0.1](series-map-v0.1.md)
> - `series-entry-registry-v0.1.csv`
> - `series-topic-pool-v0.2.csv`
> - `series-priority-mapping-v0.1.csv`
>
> 作用：把“系列化”真正变成批量生产机制，而不是只有栏目名称。

## 1. 当前规模

当前已有：

~~~text
9 个 Main Series
127 个 Series Entry
458 个 Topic Seed
30 个已有 Priority Topic 已回挂 Series
5 个已验证 Episode Script
6 个 Cross-cutting Collection
~~~

各系列：

| Series | Entry 数 | Topic Seed 数 | 已有 Priority | 已有 Script |
|---|---:|---:|---:|---:|
| S01 工作岗位 / 工作方式 | 15 | 75 | 2 | 1 |
| S02 性格 / 气质 | 15 | 60 | 2 | 1 |
| S03 生活方式 / 习惯 | 16 | 64 | 5 | 1 |
| S04 相处 / 关系方式 | 16 | 64 | 8 | 1 |
| S05 钱 / 现实条件 | 14 | 42 | 4 | 0 |
| S06 家庭 / 原生家庭 | 15 | 45 | 3 | 0 |
| S07 人生目标 / 价值选择 | 14 | 42 | 3 | 0 |
| S08 能力 / 成熟度 | 12 | 36 | 3 | 1 |
| S09 外貌 / 身体 / 吸引 | 10 | 30 | 0 | 0 |

这说明：

> **旧 Priority Set 明显偏向 S04 相处 / 关系方式。**

而：

- S09 完全没有；
- S01 / S02 也偏少；
- S05 / S06 / S07 尚未有真实 Script。

所以以后不能只从全局池里找“看起来最好写”的题。

---

# 2. 正式批量生产单位

以后批量生产按：

~~~text
Series
↓
Series Entry
↓
Series Topic Seed
↓
Series Topic Gate
↓
Series Priority
↓
Content Brief
↓
Episode Script
↓
Storyboard
↓
Production
~~~

不再：

~~~text
全局想到一个题
→ 写一篇
→ 再想下一篇
~~~

---

# 3. Topic Seed 不是正式选题

`series-topic-pool-v0.2.csv` 里的 458 条是：

> **可筛选原料。**

不是：

> 458 篇已经决定要发的文章。

Topic Seed 进入 Series Priority 前继续过：

1. Entry 是否是用户真的会用的语言；
2. Scene 是否真实；
3. 和这个 Entry 是否有自然关系；
4. Need / Fit 是否明确；
5. 有没有 Reframe；
6. 是否能画；
7. 是否和同系列已有题重复；
8. 是否只是换了一个词套同一句话。

发现模板机械味：

> 删除 / 重写 Seed，不为了数量保留。

v0.1 批量池已经因为这类问题被 v0.2 替代。

---

# 4. 每个系列不要求相同数量

不同 Series 天然容量不同。

例如：

### 工作岗位系列

一个 Entry 可以沿：

- 恋爱陪伴；
- 同居作息；
- 城市 / 迁移；
- 事业机会；
- 育儿；
- 父母照护；
- Crisis；
- 中年；

持续产生内容。

成熟职业 Entry 最终可能有：

> **10～20+ Topic。**

### 性格系列

更适合：

- 标签拆解；
- 冲突；
- 压力；
- 不同 Need/Fit；

单个 Entry 可能：

> **5～10 Topic。**

### 现实硬条件

如果一个条件不能自然进入生活：

> 不为了系列数量硬写十篇。

有些 Entry 最终可能只留下：

> **2～4 个真正有价值的 Topic。**

---

# 5. 当前建议的第一轮 Series Priority 目标

不是固定产量，只是当前 Review Batch。

| Series | 从 Pool 里先人工 / AI Gate 到 | 先做 Brief | 先做 Script |
|---|---:|---:|---:|
| S01 工作岗位 | 12～15 | 3～5 | 1～2 |
| S02 性格 | 10～12 | 3～4 | 1～2 |
| S03 生活方式 | 10～12 | 3～4 | 1～2 |
| S04 相处方式 | 已较充足，先整理去重 | 2～3 | 1 |
| S05 现实条件 | 8～10 | 2～3 | 1 |
| S06 家庭 | 8～10 | 2～3 | 1 |
| S07 目标价值 | 8～10 | 2～3 | 1 |
| S08 能力 | 8～10 | 2～3 | 1 |
| S09 外貌吸引 | 6～8 | 2～3 | 1 |

第一轮目标不是一次写完。

而是先让：

> **9 个系列都至少跑过真实 Brief / Script。**

这样才能知道系列是不是只是整理好看，还是真的能持续生产。

---

# 6. 第一轮优先补 Coverage 缺口

现有 5 篇 Script：

~~~text
001 → S01 工作岗位
002 → S04 相处 / S06 家庭
003 → S03 生活方式
004 → S02 性格
005 → S08 能力
~~~

下一批优先补：

1. **S05 钱 / 现实条件**
   - 例如：有房 / 高收入 / 工作稳定；
2. **S06 家庭**
   - 例如：孝顺 / 父母同城 / 能帮带娃；
3. **S07 人生目标**
   - 例如：要不要孩子 / 事业心 / 换城市；
4. **S09 外貌 / 吸引**
   - 例如：好看 vs 顺眼 / 第一眼普通但越看越喜欢。

这样跑完以后，9 个 Main Series 才都有真实生产证据。

---

# 7. Series 和 Collection 的组合

例如：

~~~text
Primary Series
S01 工作岗位
↓
Entry
大厂 / 高强度白领
↓
Topic
有了孩子以后，工作责任和家庭责任怎么同时扛？
↓
Secondary Collection
C02 生孩子以后
~~~

同一篇还可以被重新编入：

> **“生孩子以后”专题。**

所以未来内容复用不只是一篇发一次。

可以：

- 按人物系列看；
- 按人生阶段专题看；
- 按钱 / 父母 / Crisis 重新打包；
- 给游戏继续提供 Scene Case。

---

# 8. 当前批量生产规则

## 规则 1｜先有 Entry，再有 Topic

Series 不是直接写文章。

先明确：

> 用户正在看哪一种人 / 哪一个熟悉标签。

## 规则 2｜一个 Entry 可以批量，但不能复制换词

错误：

~~~text
大厂 → 忙不忙
公务员 → 忙不忙
教师 → 忙不忙
医生 → 忙不忙
~~~

正确：

> 根据每个 Entry 真正不同的工作结构 / 生活结构选择 Scene。

## 规则 3｜同一 Topic 可以跨系列，但只有一个 Primary Series

避免内容库重复维护。

## 规则 4｜批量池负责广，Priority 负责精

~~~text
Topic Pool
→ 可以几百条

Priority
→ 当前真正值得做

Episode
→ 当前真实生产
~~~

三层不能压成一张表。

## 规则 5｜真实反馈回到 Entry / Topic，不自动改底层模型

哪一篇爆了：

> 先说明这个题有信号。

不自动说明：

> 对应人物理论已经被证明。

---

# 9. 下一步

当前 Series Layer 已经具备批量化底座。

下一步不是继续生成更多 Seed。

而是：

> **按 Series 逐个做第一轮 Priority Review。**

推荐顺序：

~~~text
S01 工作岗位
↓
S02 性格
↓
S09 外貌 / 吸引
↓
S05 / S06 / S07 补当前 Coverage
↓
其他系列
~~~

其中先从 S01 开始最合适，因为：

- 用户入口最直观；
- 非常适合“一个标签 → 一种生活”；
- 一个岗位天然可以沿时间线展开多个 Topic；
- 001 已经提供第一篇基准；
- 最容易验证“系列批量化”到底是否成立。
