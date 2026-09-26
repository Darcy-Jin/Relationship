# Character Style Comparison｜Execution Failure & Recovery v1

> Date: 2026-09-26  
> Status: Rejected / Blocked at Runtime Readiness  
> Scope: Relationship Character Style A / B / C

## 1. Original Goal

只回答：

> **Relationship 的人物以后长期怎么画？**

固定：

- Darcy + Wife 当前真人 Identity；
- L1 本人出演；
- 普通衣服；
- 同一表情；
- 同一姿势；
- 同一生活场景；
- 同一双人构图；
- 3:4。

只改变：

- A / B / C Character Style。

## 2. What Actually Happened

### Failure 1

图像生成没有绑定当前 Darcy / Wife Identity。

结果：

> 输出成陌生夫妻。

判定：

- Identity Fidelity: Fail
- Style Comparison: Invalid

### Failure 2

系统随后正确读取了：

- Darcy 当前真人 Source / Candidate；
- Wife Root / 3Q Master。

但后续图像调用仍没有证明 Exact Asset Binding。

生成结果自己创建：

- 一个假的 Reference；
- A；
- B；
- C；
- 四格比较海报。

运行语义属于：

> Free Generation

不是：

> Exact Controlled Style Edit。

因此整个输出：

> **Rejected。**

## 3. Failure Classification

~~~text
Primary
→ Execution Protocol Failure

Secondary
→ Runtime Capability Gap

Not
→ Identity Profile Failure

Not
→ A / B / C Style Definition Failure
~~~

## 4. Root Cause

设计层已经要求：

> 只改变 Character Style。

但执行层没有硬保证：

- Exact Target Binding；
- Multi-subject Binding；
- Project / Composite Baseline；
- single Candidate Output；
- deterministic Comparison Board。

所以：

> **系统“知道规则”，但生成器仍可以绕开规则。**

## 5. Correct Recovery Point

不从任何错误输出继续。

回到：

~~~text
Darcy / Wife Exact Identity Anchors
↓
Runtime Capability Preflight
↓
Pair Comparison Baseline Candidate
↓
Human Identity Gate
↓
Approved / Frozen Exact Baseline
↓
A / B / C each from same Baseline
↓
Control Variable Gate
↓
Deterministic Board
~~~

## 6. Recovery Progress / Current Blocker

第一轮复盘后，Runtime 已继续升级到 v0.3.0：

~~~text
exact_target_binding = true
single_identity_asset_binding = true
multi_subject_binding = true
cross_identity_reference_binding = true
project_composite_target = true
~~~

新增：

> `action = experiment_edit`

它可以：

- 从不同 Identity 读取 Exact Reference；
- 使用一个 Exact Target；
- 保存 Project / Experiment Artifact；
- 为输出写 `.run.json` Provenance Sidecar。

所以：

> **Multi-subject Runtime Capability Gap 已关闭。**

当前剩余 Blocker：

1. Darcy 当前主要 Identity Anchor 尚未迁移到 server-readable Supabase Storage；
2. 当前 Provider Run 仍记录 `credit_balance_exhausted`；
3. 因此前 Pair Comparison Baseline 还没有合法生成。

当前任务仍然：

> **Blocked before Baseline Creation。**

但 Block 原因已经从“没有多人 Runtime”变成：

> **Exact Asset Placement + Provider Execution Readiness。**

仍然不允许回退到 ChatGPT Web 普通生成。

## 7. System Changes Triggered

已更新 personal-ai-system：

- `skills/visual-style-design/SKILL.md`
- `skills/visual-style-design/assets/style-comparison-run-contract.md`
- `skills/character-identity-preservation/references/regression-cases.md`
- `architecture/WORK_ROUTING.md`
- `runtime/visual-identity/capabilities.json`
- `runtime/visual-identity/style_comparison_preflight.py`
- `runtime/visual-identity/README.md`
- `runtime/supabase/functions/visual-identity-edit/index.ts`

Cloud Function 已部署 v0.2.4，并显式暴露 / 检查 Runtime Capability。

## 8. Next

按顺序只做：

~~~text
Darcy Current Identity Exact Asset
→ 迁移到 Cloud Runtime 可读 Storage
↓
Provider Readiness
→ 补充 credits 或切换合适 Adapter
↓
experiment_edit
→ Pair Comparison Baseline Candidate
↓
Human Gate
↓
再进入 A / B / C
~~~

不继续用 ChatGPT Web 普通生成画 A / B / C。
