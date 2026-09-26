# Relationship

Relationship 现在不是“一个关系游戏”或者“一个 AI 漫画项目”。

它长期要做的是：

> **理解人、关系、选择和共同生活，并把这些理解变成可以真正使用的体验和内容。**

## 当前推进策略：决策是核心，AI 是工具，内容先成为市场入口

Relationship 当前从**恋爱 / 择偶这个高风险、长期、没有完美答案的决策**切入。

现在更明确地分开三件事：

~~~text
长期核心
→ 帮人理解人、关系、取舍和共同生活，做更清楚的关系决策

当前市场入口
→ 用 AI 漫画把这些问题做成容易看懂、愿意传播的内容

AI
→ 研究、生成、批量生产和迭代的工具，不是项目本身的价值主张
~~~

当前顺序不再是“先把游戏做完，再找用户”，而是：

~~~text
持续内容
↓
获得真实流量 / 讨论 / 用户信号
↓
积累案例、认知和信任
↓
再长出社群、游戏、网站 / 工具、私人服务等产品
~~~

具体商业化方式暂不提前锁死。C 端付费、服务、广告或其他模式，等真实用户信号出现后再决定。

AI 漫画当前是主表达形式，但题材、系列、人物 Actor / 头像、画风都属于可以通过数据继续调整的变量。单个变量验证失败，不直接等于 Relationship 的底层问题失效。

本次战略对齐记录：

- [2026-09-26｜从游戏优先到内容优先：Relationship 的市场进入策略](docs/history/2026-09-26-relationship-content-first-strategy-alignment.md)

当前正式按三层理解：

~~~text
Relationship
│
├─ 底层
│  ├─ 人：这个具体的人在不同场景里会怎么表现、怎样变化
│  ├─ 关系：两个人怎样互动、分配资源、形成共同生活
│  └─ 选择：我真正需要什么、愿意承担什么、哪些东西不能交换
│
├─ 游戏层
│  └─ 把底层理解变成可以亲自体验的可能人生
│
└─ AI 漫画层
   └─ 把底层理解变成可以快速看懂、产生共鸣的具体故事和漫画
~~~

游戏层和 AI 漫画层共享同一套底层，不分别维护平行的人物 / 关系理论。

---

## 现在最重要的两个认识

### 1. 选择的不是标签，而是一个具体的人和一种生活

标签可以作为入口。

但真正要继续看：

~~~text
标签 / 第一印象
↓
具体场景
↓
具体行为
↓
反复出现的条件性模式
↓
这个人当前是什么样
↓
他可能怎样变化
↓
和他共同生活会是什么样
~~~

正式入口：

- [人物模型 v0.1](docs/models/person-model.md)

### 2. 游戏仍然是“未来体验 → 自我校准”

Relationship 不替玩家算出“最适合谁”。

它让玩家：

~~~text
我以为自己要什么
↓
选择一个人
↓
真的过一段生活
↓
发现哪里舒服、哪里痛苦
↓
重新理解自己在意的东西
↓
下一轮继续用对照和反例校准
~~~

最终不是得到理想型标签。

而是逐渐知道：

> **什么样的不完美的人，和什么样的不完美生活，对我来说仍然值得选择。**

---

## 仓库现在怎么分

### 共享底座

- [当前核心模型](docs/current-model.md)：现在整体怎么理解人、关系和共同生活
- [人物模型](docs/models/person-model.md)：怎样从标签走向具体的人，以及怎样看变化方向
- [重要决定](docs/decisions.md)：已经明确、不应该无意中改回去的方向
- [研究](docs/research/)：为什么会形成现在这些认识

### 游戏

- [简化游戏模型](docs/game-model-v0.md)
- [当前相亲试玩设计](docs/product/first-life-v2-blind-date-opening.md)
- [确定性规则引擎](docs/engine/deterministic-engine-v0.md)
- [机器可读 Spec](spec/v0/README.md)
- 当前试玩：/play-v2/

### AI 漫画层

- [AI Comic](docs/content/ai-comic/README.md)
- [AI 漫画内容模型](docs/content/ai-comic/content-model.md)
- [AI Comic 研究归档](docs/research/ai-comic/README.md)

`docs/content/` 只是当前 AI 漫画资产的存放目录，不代表 Relationship 还有一个独立的 “Content 层”。

原 `Darcy-Jin/ai-comic` 仓库已删除，正式资产已经并入 Relationship。

---

## 当前状态

先读：

- [Current State](docs/current-state.md)

它会告诉你：

> **整个项目现在做到哪里，游戏层和 AI 漫画层分别在验证什么。**

---

## 怎么恢复工作

默认不要重读整个仓库。

在 ChatGPT Project 中，先由 Project Instructions 完成 Bootstrap：

- [ChatGPT Project Bootstrap](docs/chatgpt-project-bootstrap.md)

然后按当前 Matter 恢复：

~~~text
personal-ai-system/README.md
↓
Relationship/README.md
↓
docs/current-state.md
↓
识别当前 Intent / Matter
↓
personal-ai-system/architecture/WORK_ROUTING.md
↓
只读取命中的 Agent / Skill / Runtime
↓
需要领域理解时再读 docs/current-model.md / 对应分支
~~~

不要从“当前有什么工具”开始工作。

如果当前任务是：

- 理解一个人 → docs/models/person-model.md
- 做关系游戏 → docs/game-model-v0.md + docs/product/ + spec/
- 做 AI 漫画 → docs/content/ai-comic/
- 追溯为什么 → docs/research/
- 继续开发 → 当前产品文档 + docs/engine/ + spec/

项目自己的工作方式：

- [Relationship 工作方式](docs/WORKING_SYSTEM.md)

---

## 游戏怎么运行

需要 Node.js，不需要 npm install。

~~~bash
git clone https://github.com/Darcy-Jin/Relationship.git
cd Relationship
npm start
~~~

当前相亲试玩：

~~~text
http://127.0.0.1:4173/play-v2/
~~~

旧版完整 First Life：

~~~text
http://127.0.0.1:4173/play/
~~~

Engine Debug UI：

~~~text
http://127.0.0.1:4173/
~~~

测试：

~~~bash
npm test
~~~

手机测试见：

- [手机端测试](docs/product/mobile-testing.md)

---

## 和 personal-ai-system 的关系

Darcy-Jin/personal-ai-system 保存通用的：

- 研究方法；
- 建模方法；
- 系统演化方法；
- AI / 人协作方式；
- 长期资产治理方法。

Relationship 保存：

> **这个具体领域自己的模型、研究、产品、内容、代码和真实验证。**

继续遵守：

> **通用方法不复制，具体成果留在这里。**

以及：

> **同一份正式定义只维护一处。**
