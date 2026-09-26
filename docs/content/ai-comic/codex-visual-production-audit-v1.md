
# Codex Audit｜Relationship 真人漫画视觉生产链 v1

> Date: 2026-09-26
> Status: Ready for Codex Audit
> Mode: Read-only first pass / 第一轮只审计，不修改

## 1. 这次审计要回答什么

用户现在用 Codex 产出了一版实际漫画，主观效果明显比此前多轮 ChatGPT Web 尝试更接近可用。

这次不要因为“效果看起来不错”就直接假设生产链已经正确，也不要因为以前 ChatGPT Web 出过问题，就默认 Codex 也有同样的问题。

第一轮只回答：

> 以前反复发生的这些问题，在当前 Codex 视觉生产链里到底还存不存在？如果存在，要不要现在修？应该在哪一层、用最小代价怎么修？

必须检查实际代码、脚本、Prompt 组装、真实输入文件、Reference / Identity 绑定、输出文件以及日志 / provenance。不要只根据最终图片“看起来像”来推断输入链正确。

---

## 2. 已经真实发生过的问题

### P01｜人物没有真正使用真人参考图

历史上明确要求 Darcy / Wife 真人 Identity，但真正生成时没有绑定 Exact Reference / Baseline，最后生成成陌生人 / 陌生夫妻。

Codex 检查：
- 当前漫画到底传入了哪些真人图片；
- 这些图片是否真的进入模型 input；
- Darcy 和 Wife 各自用了哪些文件；
- 能否从代码 / request / log 证明 reference 真正被消费。

### P02｜“系统读到图片”不等于“图像模型用了图片”

历史发生过：
AI 已读取 / 显示正确图片，但真正 image executor 没有把它作为 edit/reference input。

曾出现：
edit_op = null
parent_gen_id = null

Codex 检查：
- Asset → Model Input 中间有没有断层；
- 文件读取和模型 request 是否在同一条链上；
- 是否有明确的 request-side binding evidence；
- reference role 怎样传给模型。

### P03｜模型自己伪造 Reference

历史输出曾自己画一个假的 Reference，再画 A / B / C。

Codex 检查：
- Reference / Master / Baseline 是否使用原始 Exact Pixels；
- 是否有“模型重新画 reference 再继续”的步骤；
- Character Sheet / Comparison Board 中的 reference 是否来自真实源文件。

### P04｜本来要求受控 Edit，实际变成 Free Generation

历史语义是：
Exact Baseline → 只改 Character Style。

实际却变成独立生成一个“类似的人”。

Codex 检查：
- 当前生产到底是 Image Edit、Character Reference、Multi-reference Generation，还是纯文本生成；
- 该语义是否符合当前生产目标；
- 不要机械要求所有 Episode 都必须 Exact Pixel Edit，只要 Reference Binding 可证明且 Identity 稳定即可。

### P05｜A / B / C 没有从同一个 Baseline 分叉

正确 Style Screening：
Exact Baseline → A / B / C。

历史实际更像三次独立自由生成。

Codex 检查：
- 当前是否还有 Style A/B/C Screening；
- 如果有，是否 Same Baseline Branching；
- 如果已经是 Episode Production，这条规则是否不再适用。

### P06｜单张 Candidate 被生成成海报 / Grid / 比较板

历史明确要求 single image，模型却生成 Reference + A + B + C + 标题 + Grid。

Codex 检查：
- 生成层和排版层是否分开；
- 一个 panel / candidate 是否只返回规定输出；
- 如果当前任务本来就是完整漫画页，则按 Page Contract 判断，不机械判错。

### P07｜比较板重新生成原图，而不是确定性拼版

历史要求 Baseline / A / B / C 使用真实原像素 deterministic composition，但模型会把四张全部重新画。

Codex 检查：
- contact sheet / comparison board / character sheet 是否由确定性脚本排版；
- 是否重新调用图像模型重画已有图片；
- 原始 candidate 是否保持 exact pixels。

### P08｜非目标变量一起漂移

受控实验里只想改 Style，但历史结果同时改变发型、眼镜、衣服、表情、姿势、镜头、场景、背景、年龄感和脸型。

Codex 检查：
- 仅在 Controlled Experiment 中是否冻结非目标变量；
- 是否有 Change Set / Preserve Set；
- Episode Production 中区分“剧情指定变化”和“模型擅自漂移”。

### P09｜多人场景没有独立 Subject Binding

以前双人任务生成过陌生夫妻。长期风险还包括人物特征互串、平均脸、一个人像另一个人不像。

Codex 检查：
Darcy → 哪些 Identity Reference
Wife → 哪些 Identity Reference

如果当前模型支持独立 Character Reference，优先显式 Subject ↔ Reference Binding；如果不支持，再判断是否需要 Pair / Group Reference Strategy。

### P10｜Identity Asset 角色混乱

系统里有 Source Evidence、Root Master、Support Master、Working Candidate、Validated Asset、Rejected Asset。

Codex 检查：
- 当前生产实际用了哪些 asset；
- 有没有随手取“最新一张”；
- Approved / Candidate / Rejected 是否能区分；
- 旧 candidate 会不会重新混入生产。

### P11｜缺少 Provenance，无法证明图是怎么出来的

Codex 检查每次视觉生产能否回答：
- Subject / Character；
- 输入真人图；
- 每张 Reference 的 role；
- Style / Episode Contract；
- 模型 / Provider / Tool；
- 关键 Prompt / config；
- Raw Output；
- 后处理；
- Final Output；
- Run / commit / artifact 对应关系。

目标不是为了日志而日志，而是能回答：
为什么这张像 / 不像？怎样复现？哪里出了问题？

### P12｜Provider / Tool 失败后静默换成语义不同的方案

历史出现过：
Exact Edit Route blocked → 因普通 image_gen 可用 → 自动改成 Free Generation。

Codex 检查：
- Tool / Provider 不可用时会发生什么；
- 是否有 silent fallback；
- fallback 是否保持原任务语义；
- 不等价时是否明确停止。

### P13｜Gate 已失败，仍继续“再试一次”

历史出现过 Exact Binding Fail 后，只换 Prompt / 重新展示同一图，然后继续调用同类 Tool。

当前正式系统已有：
personal-ai-system/architecture/EXECUTION_GUARD.md

Codex 检查：
- 哪些错误可以 retry；
- 哪些错误必须 stop；
- 是否有无意义重复生成；
- Fail Lock 是否会被绕过。

### P14｜Matter / Scope Drift

真实发生过：
- 用户要两套独立单人，却重新走多人；
- 当前 Matter 是修系统，却做到一半跑去出图；
- 用户只让分析，却可能顺便修改。

所以本次 Codex 第一轮明确：

> 只审计，不修。

---

## 3. 当前 Codex 好结果要重点验证什么

用户现在认为 Codex 生成的实际漫画“效果还挺好的”。

这是正向 Performance Evidence，但要区分：

A. Pipeline 真的正确使用了真人 Reference；
B. 只是偶然生成得像；
C. Prompt 文字描述足够强；
D. 只在这一页成立；
E. Reference 用对了，但跨 Panel / 跨 Episode 仍会漂。

本次审计最重要的不是挑毛病，而是：

> 确认为什么现在变好了，然后把真正有效的东西留下。

---

## 4. Codex 第一轮审计方法

### 4.1 找到真实生产入口

先识别：
- 用户刚生成这版漫画从哪个命令 / 脚本 / Agent / Skill / Tool 开始；
- 输入文件在哪里；
- 输出在哪里；
- 当前 repo / working directory；
- 哪部分由 Codex 编排；
- 哪部分由外部图像模型执行。

不要先修改。

### 4.2 追一张图 / 一页的完整链路

优先选用户刚认可的这一页。

追踪：
Business / Episode Intent
→ Character / Identity Selection
→ Reference Asset Selection
→ Prompt / Contract Assembly
→ Model Call
→ Raw Output
→ Post-process / Layout / Text
→ Final Page

### 4.3 P01～P14 逐项判断

每项只能选：
- PRESENT
- ABSENT
- UNKNOWN
- NOT_APPLICABLE

不要因为历史上出过问题就默认 PRESENT。

### 4.4 每个 PRESENT / UNKNOWN 再判断

报告字段：
- Issue
- Status
- Evidence
- Impact
- Fix now? = Now / Later / No
- Problem Layer = Method / Asset / Prompt / Pipeline / Runtime / Provider / Layout / Guard
- Minimal Fix
- Validation

不要做总分。

---

## 5. 特别不要误判

### 5.1 Episode Production 不是 Style A/B/C 实验

Episode 本来允许换场景、衣服、姿势、表情、镜头。

P08 的 Frozen Variables 只适用于受控测试。

生产时检查的是：
变化是剧情指定的，还是模型擅自漂移的。

### 5.2 不要求所有生产都必须 Exact Pixel Edit

长期 Outcome 是：
这个人进入不同生活场景以后仍然是同一个人。

如果当前 Codex + 模型通过 Character Reference / Multi-reference Generation 已经稳定做到，可以保留。

关键是：
Reference Binding 可证明 + Identity 结果稳定。

### 5.3 不为“架构完整”重构一个已经好用的生产链

如果当前做法稳定、可复现、失败可诊断、效果够用：

> 保留。

只修真实存在、影响长期生产的问题。

---

## 6. Codex 第一轮交付

第一轮不要改代码。

请生成：

docs/content/ai-comic/runs/codex-visual-production-audit-report-v1.md

至少包含：
1. 当前真实视觉生产链；
2. 当前这一页实际用了哪些 Reference；
3. P01～P14 审计表；
4. 哪些旧问题已不存在；
5. 哪些仍存在；
6. 哪些存在但暂时不用修；
7. 推荐最小修复顺序；
8. 哪些属于实现问题，Codex 可以修；
9. 哪些属于方法 / Identity / 产品决策，需要回上层；
10. 下一轮最小验证任务。

Audit 完成后停下来给用户看，不自动实施。

---

## 7. Codex 的职责边界

Codex 可以分析并建议：
- 路径 / 文件 / asset lookup；
- Reference 是否真正进入请求；
- Prompt / config 组装 bug；
- deterministic layout；
- output shape；
- logging / provenance；
- fallback / retry；
- test；
- pipeline / script / runtime adapter。

Codex 不自行重定义：
- Darcy / Wife 应该长什么样；
- Approved Master 是否替换；
- Character Style 最终选哪套；
- Story Role；
- Relationship 内容方法；
- Human Visual Identity 通用 Skill；
- 用户价值判断。

遇到这些问题：
留下 Evidence + Recommendation，回上层讨论。

---

## 8. Source of Truth

审计前至少读取：

Relationship：
- README.md
- docs/current-state.md
- docs/content/ai-comic/visual-system-v1.md
- docs/content/ai-comic/experiments/single-person-character-style-experiment-v1.md
- docs/content/ai-comic/runs/2026-09-26-character-style-comparison-execution-failure-v1.md

personal-ai-system：
- README.md
- architecture/WORK_ROUTING.md
- architecture/EXECUTION_GUARD.md
- agents/visual-identity-agent/AGENT.md
- skills/character-identity-preservation/SKILL.md
- skills/visual-style-design/SKILL.md
- runtime/visual-identity/execution-routing.json

只读取当前 Audit 真正需要的文件，不加载整个仓库。

---

## 9. 本轮 Route Contract

Matter:
审计当前 Codex 真人漫画视觉生产链。

Allowed:
read / inspect / trace / analyze / report。

Forbidden:
改代码 / 改 Prompt / 改 Identity Asset / 重新生成图片 / 替换 Provider / 修改正式 Skill 或 Agent。

Stop Condition:
Audit Report 完成。

如果为了审计必须运行只读或 dry-run 命令，可以执行。

如果必须真正生成才能确定：
在 Report 标记 UNKNOWN + 推荐验证方案，不自动生成。
