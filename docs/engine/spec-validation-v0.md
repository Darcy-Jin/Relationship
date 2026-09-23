# Engine Spec Validation v0.1

日期：2026-09-24

## 已检查

对当前 `spec/v0/` 做了机器级引用检查：

- 所有 Candidate 都包含完整 dimension；
- Candidate 没有未知 dimension；
- Event probes 引用的 Hypothesis 全部存在；
- Event reason_code 全部存在映射；
- Contrast Pack 的 Hypothesis 全部存在；
- Contrast Pack 的 Candidate 全部存在；
- Contrast Pack 的 Event 全部存在；
- Lifestyle Template 的 Hypothesis 全部存在。

结果：

> **0 个引用错误。**

## 已实际验算的规则

### F01｜拒绝长期异地

输入：

`long_distance = reject`

结果：

```text
P01
P02
P04
P08
```

P03 因 `long_distance_risk=high` 被过滤，P08 按固定 priority 补位。

与 fixture 一致。

### F02｜陪伴 / 回应 / 可靠混淆

Top Hypothesis：

```text
NEED_DAILY_COMPANIONSHIP = 5
NEED_RESPONSIVENESS = 3
NEED_CRISIS_RELIABILITY = 2
```

选择：

> `CAREER_TIME_RELIABILITY`

coverage = 3。

与 fixture 一致。

### F03｜社交 / 可预测 / 边界混淆

Top Hypothesis：

```text
NEED_PREDICTABILITY = 5
NEED_SOCIAL_BOUNDARY = 3
NEED_SOCIAL_ENERGY = 2
```

选择：

> `SOCIAL_PREDICTABILITY`

coverage = 3。

与 fixture 一致。

## 验证过程中发现并修复

最初 Event `CAREER_OPPORTUNITY` 使用：

> `RELOCATION_COST`

但 Hypothesis 映射中缺失。

已明确映射到：

> `NEED_LIFE_DIRECTION_ALIGNMENT`

修复以后重新检查：

> **0 个断链。**

另外在落规则时发现：

> 社交强度不能推断关系边界。

因此正式新增独立 dimension：

> `boundary_respect`

避免出现：

> “外向 = 边界差”

这种隐式刻板推断。

## 当前验证边界

本次只证明：

> **规格内部一致、规则可以实现。**

没有证明：

- 人物设计一定好玩；
- Evidence 权重一定合理；
- Hypothesis 阈值有心理测量效度；
- Choice Map 一定让真实玩家有启发。

这些必须等确定性程序完成以后做真人测试。
