# Combination Pool Audit v0.1

> 状态：Research-only  
> 目的：记录 Candidate Combination Pool 的第一次失败、规则收紧与当前边界。

## 1. v0.1

第一次生成：

~~~text
2,838 combinations
41 Person Features
12 Shared-life Domains
10 Life Stages
10 Triggers
12 Need Contents
~~~

优点：

- 第一次把“可能有上千种组合”真实外化；
- 覆盖三套研究空间；
- 没有提前只保留 15 个标签。

但抽样发现：

- `认识/相亲 × 反复小问题累积` 时间逻辑不成立；
- `外在吸引 × 育儿期 × 休闲 × 工作时间突变` 虽结构合法，但生活因果很弱；
- 有些 Profile Fact 只是 Selection Gate，不适合被强行写成长周期生活特征。

因此 v0.1 保留为第一次生成证据，不作为当前候选池。

---

## 2. v0.2

修正：

1. 增加 Trigger × Life Stage 兼容约束；
2. 给部分 Selection Gate Feature 增加 Stage Boundary；
3. 调整教育 / 文化资本的高价值生活领域；
4. 保留弱组合进入后续 Topic Gate，而不是试图用规则提前判掉所有边界情况。

结果：

~~~text
2,733 combinations
41 Person Features
12 Shared-life Domains
10 Life Stages
10 Triggers
12 Need Contents
~~~

第二轮按 Person Feature 分层抽样后，大多数组合已经能自然解释。

仍存在少量“有可能成立但不是当前强内容”的组合，例如：

- 某些 Profile Fact 在后期阶段的意义较弱；
- 某些 Feature 与 Need 的连接需要额外中间机制；
- 一些组合更适合研究 / 游戏事件，不一定适合漫画。

这正是 Topic Priority Gate 应该处理的问题。

---

## 3. 当前不继续做第三轮纯规则过滤

原因：

> **如果继续用越来越复杂的规则试图自动判定“什么值得讲”，最终会把人的内容判断偷塞进规则引擎。**

当前正确分工：

~~~text
Structural Constraints
→ 排除明显不可能 / 时序错误

Semantic Review
→ 判断组合是否自然

Topic Gate
→ 判断是否值得做内容

Reality Validation
→ 发布 / 评论 / 游戏 Case 继续改模型
~~~

因此 v0.2 作为当前 Combination Candidate Pool。

---

## 4. Evidence Coverage 试验

已经生成：

`person-label-space/canonical-feature-evidence-v0.1.csv`

第一轮使用 alias / Raw Term 匹配统计来源覆盖。

结果显示大多数 Canonical Feature 被低估。

原因：

- 同义词大量存在；
- 一个 Raw Term 可能是上位 / 下位 / 代理变量；
- “顾家”“家庭投入”“家庭观念”不是简单字符串同义；
- 平台字段、学术构念、用户语言的粒度不同。

因此：

> **Evidence Coverage 表当前只能做辅助 metadata，不能直接拿 source_count 排 Topic。**

后续要通过 Raw → Concept Mapping 的人工 / AI 语义归一逐渐提高覆盖质量。

---

## 5. 当前结论

现在已经有三个不同层次：

~~~text
Raw Corpus
→ 尽量不丢信息

Candidate Combination v0.2
→ 大空间、语义基本可行

Priority / Pilot Portfolio
→ 需要内容判断和 Portfolio Gate
~~~

下一步不是继续扩大组合数。

而是：

> **回看早期 15 Seed，检查它们在完整模型里是否仍然是好的用户入口。**