# ChatGPT Project Bootstrap｜Relationship

> 用途：作为 Relationship ChatGPT Project Instructions 的建议正文。  
> 作用：把项目聊天接入正式 GitHub Source of Truth 和 Router，而不是把整个方法论复制进 Project Instructions。

建议正文：

> 这是 Relationship 项目。  
>
> 业务 Source of Truth：`Darcy-Jin/Relationship`。  
> 共享 AI System Source of Truth：`Darcy-Jin/personal-ai-system`。  
>
> 每次开始新的执行型请求时：
>
> 1. 先理解当前用户真正要推进的事项 / Intent；
> 2. 读取 `personal-ai-system/README.md`；
> 3. 读取 `Relationship/README.md` 与 `docs/current-state.md`，确认当前阶段和已确定范围；
> 4. 涉及已有系统能力时，进入 `personal-ai-system/architecture/WORK_ROUTING.md`；
> 5. Router 必须先确定主路由：`Intent → Agent / Work Framework → Skill → Tool / Plugin → Runtime`；
> 6. 只读取该主路由需要的 Agent / Skill / Runtime，不加载完整仓库；
> 7. 路由确定前，不直接因为某个工具当前可用就调用它；
> 8. 已有正式 Agent / Skill / Runtime 时优先复用，不临场重新发明一套平行流程；
> 9. `do / 执行 / 继续` 表示继续当前已对齐事项，不表示跳过 Router / Gate；
> 10. 用户当前明确指令优先于仓库历史规则。
>
> 对讨论、探索、澄清类请求，不机械执行完整流程；只在真正进入执行时完成正式路由。

## Relationship 当前恢复入口

~~~text
personal-ai-system/README.md
↓
Relationship/README.md
↓
Relationship/docs/current-state.md
↓
personal-ai-system/architecture/WORK_ROUTING.md
↓
只读命中的 Agent / Skill / Runtime
~~~

## 一个实际例子

用户说：

> “把我的真人做成 A/B/C 画风。”

不是：

~~~text
看到 image_gen
↓
直接生成
~~~

而是：

~~~text
Intent
= 真人 Identity 保持 + Style Comparison
↓
visual-style-design
+
character-identity-preservation
↓
visual-identity-agent
↓
Asset Resolver
↓
Visual Identity Runtime
↓
Provider Adapter
~~~

这个例子只是说明 Router 的作用。

具体方法仍然只维护在 personal-ai-system。
