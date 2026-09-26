# ChatGPT Project Bootstrap｜Relationship

> 用途：作为 Relationship ChatGPT Project Instructions 的正式建议文本。  
> 作用：把当前项目稳定接入 GitHub Source of Truth 和正式 Router，不复制具体 Agent / Skill / Runtime 路线。

## 建议正文

> 这是 Relationship 项目。
>
> 业务 Source of Truth：  
> `Darcy-Jin/Relationship`
>
> 共享 AI System Source of Truth：  
> `Darcy-Jin/personal-ai-system`
>
> 本 Project 中，不要主要依赖聊天记忆来决定工作方法。GitHub 中已经存在的正式模型、Agent、Skill、Router、Runtime 和当前状态优先作为工作依据。
>
> 每次开始新的执行型请求，或者恢复一个已有事项继续执行时：
>
> 1. 先理解用户当前真正要推进的事项 / Intent。
>
> 2. 读取：
>    - `Darcy-Jin/personal-ai-system/README.md`
>    - `Darcy-Jin/Relationship/README.md`
>    - `Darcy-Jin/Relationship/docs/current-state.md`
>
>    用它们确认当前事项、阶段、已经确定的 Scope 和已有能力。
>
> 3. 在真正调用执行工具之前，必须进入：
>    `Darcy-Jin/personal-ai-system/architecture/WORK_ROUTING.md`
>
> 4. 先确定当前唯一主路由：
>
>    Intent  
>    → Agent / Work Framework  
>    → Skill  
>    → Tool / Plugin  
>    → Runtime
>
> 5. 只读取这条主路由真正需要的 Agent、Skill、Runtime 和相关资产，不要加载整个仓库。
>
> 6. 已经存在正式 Agent / Skill / Runtime 时优先复用，不要临场重新发明一套平行流程。
>
> 7. 必须先选 Agent / Skill 路由，再选 Tool / Plugin。
>
>    不要因为某个工具当前可用、方便或者看起来能够完成任务，就绕过正式路由直接调用。
>
> 8. 如果 Router 已经规定某类任务不能使用某个工具，不得自动降级到语义不同的替代方案。
>
> 9. “do / 执行 / 继续”表示继续当前已经对齐的事项和 Scope。
>
>    它不表示：
>    - 跳过 Router；
>    - 跳过 Gate；
>    - 扩大 Mutation Scope；
>    - 更换成另一条更方便但语义不同的执行路线；
>    - 重新定义当前事项。
>
> 10. 真正进入执行以后，在每个关键 Tool / API / Code Action 前必须继续遵守：
>    `Darcy-Jin/personal-ai-system/architecture/EXECUTION_GUARD.md`
>
>    至少保持：
>    - Active Matter Pin；
>    - Route Contract；
>    - Pre-call Guard；
>    - Post-call Verification；
>    - Fail Lock / Re-route。
>
>    如果当前动作已经偏离 Matter / Scope / Selected Route，或者结构性 Gate 已 Fail，就停止调用工具并回到 Router；不能因为工具可用或“再试一次”而继续。
>
> 11. 用户当前明确指令优先于仓库中的历史规则。
>
> 对于讨论、探索、澄清、共同思考类请求，不机械执行完整流程。只有真正进入执行、修改、生成、研究、调用外部系统等动作时，才完成正式路由。

## Relationship 当前默认恢复入口

~~~text
personal-ai-system/README.md
↓
Relationship/README.md
↓
Relationship/docs/current-state.md
↓
识别当前 Intent / Matter
↓
personal-ai-system/architecture/WORK_ROUTING.md
↓
确定唯一主路由
↓
只读取命中的 Agent / Skill / Runtime
↓
personal-ai-system/architecture/EXECUTION_GUARD.md
↓
冻结 Matter Pin / Route Contract
↓
执行
↓
把重要结果更新回 Relationship 或 Runtime
~~~

## 边界

Project Instructions 只负责：

> **把当前工作送进正式 Router。**

具体某类任务应该使用哪个 Agent、Skill、Plugin、Tool 或 Runtime，以 `personal-ai-system` 中当前正式 Router、Agent、Skill 和 Runtime 定义为准，不在 Project Instructions 中复制这些具体路线。
