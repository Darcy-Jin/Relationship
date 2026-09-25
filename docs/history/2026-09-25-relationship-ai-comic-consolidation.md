# 2026-09-25｜Relationship × AI Comic 合并与人物模型重构

## 为什么改

原来有两个平级仓库：

~~~text
Relationship
AI Comic
~~~

但继续讨论以后发现：

> **它们面对的是同一个现实：人、关系、选择和共同生活。**

差别主要是输出方式：

- Relationship Game → 让用户进入一段可能生活；
- AI Comic → 用少量场景快速表达一个认知。

如果继续平级维护，最容易出现：

> 同一个人物 / 关系认识，在两个仓库各写一套，最后互相漂移。

所以这次不是简单搬文件。

真正做的是：

> **共享底座统一，具体出口分开。**

---

## 重构前

~~~text
Relationship
├─ 关系研究
├─ 当前模型
├─ 游戏模型
├─ Rule Engine
└─ 试玩

AI Comic
├─ 项目方向
├─ 漫画研究
└─ 自己的人物 / 场景 / 决策知识模型
~~~

问题：

- AI Comic 自己开始长一套人物知识；
- 漫画和游戏可能对“人是什么”形成两个版本；
- 新的内容形式出现时，很容易继续拆第三个仓库。

---

## 重构后

~~~text
Relationship
│
├─ 共享底座
│  ├─ current-model.md
│  ├─ models/person-model.md
│  └─ research/
│
├─ 游戏
│  ├─ game-model-v0.md
│  ├─ product/
│  ├─ engine/
│  ├─ spec/
│  └─ play-v2/
│
└─ 内容
   └─ ai-comic/
      ├─ README.md
      └─ content-model.md
~~~

原 AI Comic 5 份研究完整迁移到：

- docs/research/ai-comic/

原仓库继续保留历史，但 README 已标成 Superseded / Historical。

---

## 这轮新增加的人物认识

原 Relationship 已经有：

- 现实资源；
- 稳定倾向；
- 价值和目标；
- 需要；
- 习惯；
- 当前条件。

这轮真正补上的不是更多属性。

而是：

> **这些东西怎样在真实场景里组合成一个具体的人。**

当前主链：

~~~text
标签 / 第一印象
↓
待验证假设
↓
具体场景
↓
行为
↓
多次出现的条件性模式
↓
当前人物认识
↓
变化方向 + 条件 + 不确定性
↓
共同生活
~~~

正式进入：

- docs/models/person-model.md
- docs/current-model.md

研究依据进入：

- docs/research/11-person-understanding-labels-context-change.md

---

## 游戏怎么受影响

游戏没有因为文档重构就直接改 Rule Engine。

先增加上位约束：

- 标签不能直接决定行为；
- 人物特点要通过场景表现；
- 一次行为不能直接定性；
- “以后会改”不能作为免费补偿。

真实试玩证明当前人物仍然太像标签人设时，再改 Candidate / Event / Rule Engine。

---

## AI Comic 怎么受影响

AI Comic 不再维护自己的人物理论。

它只维护：

> **怎么把共享底座里的认识变成漫画。**

当前正式内容模型放在：

- docs/content/ai-comic/content-model.md

核心内容方向变成：

- 标签误判；
- 同一人不同场景；
- 得到一个优点以后真实生活是什么；
- 时间变化造成的反差。

---

## personal-ai-system 改了什么

这次反复重构暴露一个通用缺口：

> 过去讲了“同一正式定义只维护一处”，但没有明确告诉 AI 什么时候不应该因为新输出形式而拆新仓库。

因此已经补到：

- personal-ai-system/architecture/ASSET_AND_STATE_MODEL.md

新增原则：

> **仓库边界优先服务于 Source of Truth、权限和生命周期，不按游戏 / 漫画 / 文章 / 视频这种表面形式机械拆分。**

合并时也不能只搬文件，还要：

- 找唯一正式定义；
- 分共享模型和特定输出；
- 保留 Research / History；
- 降级旧入口；
- 更新路由；
- 做真实验证。

---

## 什么没有改

这次没有改：

- play-v2 代码；
- Rule Engine；
- spec/v0；
- 已有 First Life；
- 原关系研究证据。

原因：

> **知识模型已经变化，不等于运行实现必须立刻变化。**

先把正式底座和路由改正确。

下一步用真实游戏 / 漫画运行结果判断哪些实现真的需要动。

---

## 当前状态

~~~text
AI Comic 迁移
→ 完成

人物模型
→ Promoted

Current Model / Game Model / Content 路由
→ 已接好

旧 ai-comic 入口
→ Superseded / Historical

游戏真实验证
→ 待继续

漫画真实验证
→ 待开始
~~~
