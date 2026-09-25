# Relationship 工作方式

这份文件只定义 **Relationship 项目怎样使用 personal-ai-system 的通用方法持续工作**。

它不复制研究、建模、决策等通用方法。

正式方法仍以：

`Darcy-Jin/personal-ai-system`

为准。

---

## 1. 开始一项实际工作时怎么进入

默认顺序：

```text
1. 先读 personal-ai-system/README.md
↓
2. 判断当前任务是什么类型、处于什么阶段
↓
3. 只读取这次真正需要的 Agent / Skill / Architecture / Reference
↓
4. 再读 Relationship/README.md
↓
5. 读取当前任务需要的 Relationship 资产
↓
6. 执行
↓
7. 重要成果回写 Relationship
```

不要每次把两个仓库全部读一遍。

---

## 2. Relationship 里不同文件各负责什么

### README.md

回答：

> 这个项目是什么，现在的大方向是什么，从哪里开始读。

它是入口，不承载全部细节。

### docs/current-state.md

回答：

> **现在具体做到哪里，下一步是什么。**

这是 Work State。

研究或阶段推进以后可以频繁更新。

### docs/current-model.md

回答：

> **我们现在怎么理解这件事。**

这是 Current Model。

只有真正改变当前认识时才更新。

### docs/models/

回答：

> **某一个值得长期复用的领域对象，现在正式怎么理解。**

例如：

- models/person-model.md → 人物不是一组标签，而是场景中的条件性模式 + 时间中的变化方向。

Current Model 只保留整体关系和摘要。

细节只在对应 Model 维护一份。

### docs/content/

回答：

> **共享底座怎样被某一种内容形式使用。**

这里可以保存：

- AI Comic；
- 公众号；
- 小红书；
- 其他内容形式自己的表达规则和验证方法。

它不重复维护人物 / 关系底层知识。

### docs/decisions.md

回答：

> **哪些方向已经明确决定，不应该在没有新证据或新决策的情况下悄悄改回去。**

只保存稳定决定，不存普通想法。

### docs/research/

回答：

> **为什么我们会形成现在的认识。**

这里保存研究问题、证据、反例、模型变化和历史依据。

研究完成以后，真正稳定的结论要更新到 `current-model.md` 或其他正式产品资产。

Research 不是最终运行入口。

---

## 3. 什么值得保存

默认保存：

- 改变产品方向的重要决定；
- 改变当前模型的重要研究结论；
- 被证据推翻的重要假设；
- 稳定的领域模型；
- 已确认的游戏机制；
- 真实试玩 / 用户验证结果；
- 后续工作必须继续依赖的关键上下文。

默认不保存：

- 普通聊天；
- 临时措辞；
- 很快会被淘汰的小想法；
- 没有改变任何判断的资料摘要；
- 已经在正式文件中存在的重复内容。

判断标准：

> **以后换一个 Chat / Agent，如果不知道这件事，会不会明显影响正确继续工作？**

会 → 应该保存。  
不会 → 通常不用保存。

---

## 4. 新内容怎么分流

```text
一个新想法 / 新发现
↓
只是探索？
├─ 是 → 先留在聊天 / 当前 Research
└─ 否
   ↓
需要外部证据验证？
├─ 是 → Research
└─ 否
   ↓
改变当前认识？
├─ 是 → current-model.md
└─ 否
   ↓
形成明确长期决定？
├─ 是 → decisions.md
└─ 否
   ↓
改变当前推进状态？
└─ 是 → current-state.md
```

同一件事可以同时影响多个对象。

例如：

> 一轮研究推翻了“总分固定模型”。

那么：

- Research 保存证据和为什么推翻；
- current-model 更新新的理解；
- decisions 如形成长期方向，再记录决定；
- current-state 更新这一阶段已完成。

---

## 5. 研究怎么做

需要系统扩大证据时，不在 Relationship 里另造研究方法。

读取：

`personal-ai-system/skills/research-and-synthesis/SKILL.md`

基本要求：

- 当前想法先当候选模型；
- 先建立 Baseline；
- 主动找反例和竞争解释；
- 优先一手研究和权威资料；
- 不只找支持我们直觉的证据；
- 研究结束说明保留、修改、推翻了什么；
- 重要结论回写 Current Model。

Relationship 当前研究入口：

`docs/research/02-comprehensive-model-plan.md`

---

## 6. 什么时候进入建模

当研究结果已经复杂到需要明确回答：

- 有哪些核心对象；
- 它们有什么关系；
- 状态怎样变化；
- 哪些因素影响哪些结果；
- 哪些成熟模型应该复用；
- 哪些模型应该组合而不是硬合并；

读取：

`personal-ai-system/skills/modeling-and-model-selection/SKILL.md`

原则：

> **先建立尽量完整的领域认识，再裁成游戏需要的简化模型。**

“大而全”主要发生在领域研究和多视角模型。

游戏本身不需要把所有变量暴露给玩家。

---

## 7. 研究结束以后必须做什么

不能只是新增：

```text
research/03
research/04
research/05
...
```

然后让后来的 AI 自己猜哪个是真的。

每轮重要研究结束，至少检查：

### Current Model

我们现在的理解变了吗？

变了 → 更新 `current-model.md`。

### Decision

有没有形成新的长期决定？

有 → 更新 `decisions.md`。

### Work State

现在阶段推进到哪里？

更新 `current-state.md`。

### Research

原研究文件保留：

> 当时研究了什么、依据是什么、为什么改变。

这样：

```text
Research
= 为什么

Current Model
= 现在相信什么

Decision
= 已经决定什么

Current State
= 现在做到哪
```

不会混在一起。

---

## 8. 换 Chat / Agent 时怎样恢复

不要重读所有历史。

默认：

```text
personal-ai-system/README.md
↓
Relationship/README.md
↓
Relationship/docs/current-state.md
↓
Relationship/docs/current-model.md
↓
current-state 指向的当前 Research / Product 文件
```

只有需要追溯“为什么”时，才进入历史 Research。

---

## 9. 什么情况下需要修改这套工作方式

不要因为一次特殊情况就加规则。

只有当真实工作反复出现下面的问题时再改：

- 新 Agent 经常不知道该读什么；
- 同一结论反复研究；
- Current Model 和 Research 冲突；
- 重要决定不断丢失；
- 项目恢复成本仍然很高；
- 文件越来越多但没人知道主入口；
- 真实开发 / 测试阶段出现新的长期对象。

这时按 personal-ai-system 的 System Evolution / Work Improvement 方法修改真正有问题的部分。

---

## 10. 新增一个产品形态时，先判断是不是同一件事

不要看到：

> 游戏 / 漫画 / 文章 / 视频

就先按载体拆仓库。

先问：

1. 它们是不是在理解同一批现实对象？
2. 是否依赖同一份人物 / 关系 / 决策模型？
3. 新认识是否需要彼此同步？
4. 是不是只是表达方式、交互方式或交付物不同？

如果答案大部分是“是”：

> **保留一个共享 Source of Truth，在下面分不同输出。**

只有出现明显独立的：

- 权限；
- 团队；
- 发布 / 部署；
- 代码生命周期；
- 现实对象；
- 数据边界；

再考虑拆成独立仓库。

这条规则的目的不是追求“单仓库”。

而是避免：

> **同一份知识因为输出形式不同，被维护成几套互相漂移的版本。**

---

## 11. 最后只记住四句话

> **聊天负责探索。**

> **Research 保存为什么。**

> **Current Model 保存现在怎么理解。**

> **Current State 保存现在做到哪。**

稳定决定单独进入 Decisions。

通用方法始终回到 `personal-ai-system`，不在 Relationship 再维护一套平行版本。
