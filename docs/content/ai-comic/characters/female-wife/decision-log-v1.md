# Human Decision Log｜Female Wife Identity Case v1

> 这里只记录真正改变资产状态、诊断方向或下一步的人工判断。

## D-001｜Approved Positive Sample Set

用户明确：

> “这一轮可以了。”

影响：

- 六张低风格干扰头像进入 Approved Positive Sample Set；
- 正脸自然升级为 Root Master；
- 其余五张作为 Support Masters；
- 后续不能重新生成一套“差不多的脸”替代。

## D-002｜后续合集脸漂移

用户指出第一排脸已经有问题：

- 脸偏尖；
- 嘴角 / 酒窝感异常；
- 已经不像已通过版本。

影响：

- 后续重新生成的合集全部不能反向成为身份参考；
- 对比 / 角色板必须走确定性排版。

## D-003｜发型 Production Run 无效

用户指出发型合集第一排脸有问题，并要求回历史找“没问题的那一版”。

影响：

- 三张发型合集全部 Reject；
- 问题分类为 Execution Protocol Failure，不修改正确的 Identity Core。

## D-004｜纯侧脸第一版“怪”

对象：

- `SIDE-CANDIDATE-01`

用户原始反馈核心：

- “第二张侧脸有一点怪怪的，但说不上来。”
- “可能是颧骨这里有点问题，苹果肌也再看一下。”
- “可爱的感觉少了一点。”

解释：

- “颧骨 / 苹果肌”只作为 Diagnostic Clue；
- 真正确认的是：侧脸整体柔和 / 可爱感弱于 Master。

## D-005｜下半脸目标不是婴儿肥

用户补充：

> 想要的是“脸型柔顺一点”，不是婴儿肥鼓起来。

影响：

- 禁止把“柔顺”固定翻译成增加整体脸颊体积；
- 需要区分：曲线连续 / 软组织缓冲 vs. 整体圆胖。

## D-006｜第二次下半脸修改变差

对象：

- `SIDE-CANDIDATE-03`

用户判断：

- 比上一版更差；
- 可爱感进一步减少；
- 尖脸感觉更明显。

因此：

- `SIDE-CANDIDATE-03` = Rejected；
- `SIDE-CANDIDATE-02` = 当前相对更好的侧脸候选；
- “顺一点”被实现成“削得更干净”已作为通用 Failure Pattern 证据。
