# Female Wife Identity Case v1

> Status: Active / Live Validation  
> Generic method: `Darcy-Jin/personal-ai-system/skills/character-identity-preservation/SKILL.md`  
> Current profile Source of Truth: `../female-wife-face-v0.md`

这个目录不再维护另一套“她长什么样”的平行定义。

它只负责保存这个具体人物的 Case 资产关系：

- 原始证据；
- 生成 / 编辑资产；
- Run；
- Human Decisions；
- Provenance。

通用方法、面部结构知识和诊断规则全部回到 `personal-ai-system`。

## Current State

已确认：

- Root Master：正脸自然；
- Support Masters：轻微微笑、说话、露齿笑、轻 3/4、戴眼镜轻 3/4；
- 当前主问题：纯侧脸仍未稳定；
- 最新 A / B / C 比较中，用户判断 B、C 比 A 更接近；
- 但 Pure Profile 仍是 `Under Rework`，尚无新的 Support Master；
- `SIDE-CANDIDATE-03` 已因“更尖、更少可爱感”被 Reject。

当前侧脸问题不直接归因于“颧骨高”。

正式诊断语言：

> **侧脸中脸显得偏硬、下半脸收束偏利，可爱 / 柔和感比已确认 Master 弱。**

当前候选结构机制：

1. 颧区相对存在感偏强，但不确定是不是骨性颧骨本身；
2. 苹果肌 / 下颊软组织的视觉缓冲不足；
3. 下颌 → 下巴收束过快、下巴末端偏窄；
4. 侧脸成像 / 光影可能放大了上述差异。

## Case Files

- `asset-manifest-v1.csv`：图片资产及状态；
- `decision-log-v1.md`：真正改变资产状态的人工确认；
- `runs/2026-09-26-side-face-diagnosis-v1.md`：当前侧脸诊断 Run。


## View Coverage

当前结构化 Source of Truth 已迁到 Supabase `personal-ai-data.identity_views`。

当前覆盖：

| View | Status | Confidence |
|---|---|---|
| Front | Validated | High |
| Light 3/4 | Validated | High |
| Opposite 3/4 | Candidate | Low |
| Pure Profile | Under Rework | Low |

关键原则：

> **正脸不能唯一推导侧脸；但所有已验证视图必须共同约束同一个 Cross-view Identity Model。**

Pure Profile 当前只是一组 Generated Hypotheses。

在通过 Human Recognition + Cross-view Structural Consistency 以前，不升级为 Support Master。

## Asset Source of Truth

当前正式分工：

- **Supabase**：当前资产状态、Run、Decision、Provenance、View Coverage；
- **ChatGPT Library**：当前 Web 原型的图片本体；
- **本目录**：安全的人类可读 Case 说明和关键决策。

因此：

> `asset-manifest-v1.csv` 现在是 **v1 建库 / 迁移历史快照**，不再要求每次生成后人工同步完整资产表。

需要当前精确资产状态时，以 Supabase 为准。
