# Run｜2026-09-26 Side-face Perception-to-Structure Diagnosis v1

> Case: Female Wife Identity Case v1  
> Stage: Robustness Validation / Side-face Recovery  
> Generic Skill: `Darcy-Jin/personal-ai-system/skills/character-identity-preservation/SKILL.md`

## 1. Exact Assets

Primary Identity Anchor:

- `MASTER-ROOT-01`
- ChatGPT file id: `file_0000000069c48209b02d29ae4c1b5e19`

Current best side candidate:

- `SIDE-CANDIDATE-02`
- ChatGPT file id: `file_00000000c06c8209b7485a4c7e50dcab`

Do not use:

- `SIDE-CANDIDATE-03`（已 Reject）
- 任意发型合集 / 海报
- 文字描述重新生成的“新基准脸”

## 2. Human Raw Feedback

核心反馈：

- 纯侧脸有点怪；
- 用户怀疑颧骨 / 苹果肌；
- 可爱感少；
- 下半脸应该更柔顺，但不是婴儿肥；
- 上一轮把“顺”做成更尖，效果更差。

## 3. AI Perceptual Restatement

不直接采用“颧骨高”为结论。

当前更稳定的人话描述：

> **相比已确认 Master，这个侧脸的中脸显得偏硬，下半脸收束偏利；整体柔和 / 可爱感不足。**

## 4. Candidate Structural Hypotheses

### H1｜颧区相对存在感偏强

不是直接断言“骨性颧骨过高”。

可能来自：

- 颧前 / 颧侧的相对体积关系；
- 颧区下方软组织不足；
- 下半脸过窄反衬；
- 侧脸光影。

### H2｜下颌 → 下巴收束过快

证据：

- 用户持续感到“尖”；
- `SIDE-CANDIDATE-03` 进一步收干净以后明显更差。

可能需要：

- 放缓 jaw-to-chin taper；
- 下巴末端略圆钝；
- 但不整体加宽脸。

### H3｜面中 / 下颊柔和缓冲不足

不是“加婴儿肥”。

可能需要：

- 轻微恢复 cheek / lower-cheek 的连续软组织；
- 让颧区 → 下颊 → 下巴更连续；
- 不形成鼓包。

## 5. Diagnostic Experiment

本轮用 3 个版本，既看单因子，也看组合。

### A｜颧区平衡测试

Change:

- 只降低“颧区相对突出感”；
- 通过稍微柔化颧前—颧侧过渡、恢复颧区下方一点连续软组织；
- 不改下巴宽度和下颌收束。

Purpose:

> 验证用户最初指向的“颧骨 / 苹果肌”是否真是主因。

### B｜下半脸收束测试

Change:

- 只放缓下颌 → 下巴的收束；
- 下巴末端略微更圆钝；
- 保持脸仍然窄长；
- 不增加苹果肌、不过度加下颊体积。

Purpose:

> 验证“尖感”是不是主要来自 lower-face taper。

### C｜推荐组合

Change:

- A 只做轻度；
- B 只做轻度；
- 加极轻微下颊柔和缓冲；
- 不做婴儿肥、不做圆脸、不放大眼睛。

Purpose:

> 如果真实问题是多结构联动，测试“柔顺但不胖、可爱但不幼化”的组合。

## 6. Preserve Set

全部保持：

- 人物身份；
- 年龄感；
- 发型 / 发量；
- 浅蓝 T；
- 侧脸方向与镜头；
- 鼻、眼、嘴基础关系；
- 皮肤状态；
- 灰色背景；
- 写实风格。

Expected Output Shape:

> single portrait × 3（A / B / C 分开输出）

## 7. Acceptance

用户只需要判断：

1. A / B / C 哪个更像本人；
2. 哪个方向明显更差；
3. 是否仍然有“尖 / 硬 / 少可爱”的感觉。

不要求用户判断：

- 是骨头还是脂肪；
- 是否真是颧骨；
- 专业解剖原因。

结果再更新 H1 / H2 / H3 的置信度。


## 8. Attempt A Execution Result

Attempted:

> A｜颧区平衡测试

Expected:

> single side-face portrait based on Exact Root Master + SIDE-CANDIDATE-02.

Actual:

> tool returned an infographic / dashboard instead of the requested portrait edit.

Classification:

> **Execution Protocol Failure / Execution Shape Failure**

Actions:

- output marked Rejected;
- not used as reference;
- B / C not executed on top of this failure;
- return to Exact Master + SIDE-CANDIDATE-02;
- next execution must first solve the runtime's explicit image-target binding / edit-shape problem rather than continuing to tweak facial structure.
