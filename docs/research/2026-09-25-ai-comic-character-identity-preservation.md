# AI Comic｜真人身份还原与漫画角色一致性研究

> 日期：2026-09-25
> 状态：Promoted / Routed / 待正式 Skill 独立任务验证
> 当前问题：如何根据真人照片生成“像本人”的长期男性 IP；如果写实很难，至少在漫画化以后仍能稳定认出本人。

## 1. 当前 Baseline

当前已经有：

- 多张用户本人正脸、左右侧脸、微笑、大笑、穿衣近景和全身照片；
- 男性 IP 已确认采用“固定脸，不固定人生”；
- 正式人物约束已记录在 `docs/content/ai-comic/character-and-viewpoint-v0.md`；
- 第一版 ChatGPT 角色设定板生成结果：整体人物成立，但脸部不像本人。

这说明当前最优先问题不是画风，而是：

> **Identity Fidelity（身份相似度）和 Character Consistency（跨图角色一致性）。**

二者要分开：

- Identity Fidelity：第一张就像不像本人；
- Character Consistency：后续不同姿势、场景、服装、风格下还是不是同一个人。

如果第一步不像，后面的“一致”只是稳定地画错一个人。

---

## 2. 为什么上一版容易不像

上一轮实际同时要求模型完成：

- 从多张真人照片理解身份；
- 重画正脸、侧脸、笑容；
- 生成全身；
- 改变服装和生活场景；
- 统一插画风格；
- 完成一张复杂信息板布局。

这属于“重新生成一个新人物”，而不是“以真人身份为锚点做受控编辑”。

因此正式问题应该拆成：

```text
真人照片
↓
先建立稳定身份母版
↓
验证：像不像本人
↓
再做漫画化
↓
验证：风格变化后还能不能认出本人
↓
再做不同职业 / 场景 / 表情 / 服装
↓
最后才做角色设定板和连续漫画
```

不能反过来。

---

## 3. 外部技术路线

### 3.1 原生多参考图编辑模型｜当前第一优先

2026 年主流闭源模型已经从“单张参考图 + 重画”进化到 Multi-Reference Editing（多参考图编辑）。

#### FLUX.2

Black Forest Labs 当前正式推荐 FLUX.2，而不是旧 FLUX.1 Kontext。

特点：

- 支持多参考图；
- pro / max 可用约 8–10 张参考图；
- 官方重点能力包括 character consistency；
- 可把“身份参考”“姿势参考”“服装参考”“风格参考”拆成不同输入；
- max 强调跨场景、跨风格保持 facial features / proportions / identity。

来源：
- https://bfl.ai/models/flux-2
- https://help.bfl.ai/articles/6546682167-what-is-multi-reference-editing
- https://help.bfl.ai/articles/5186006235-what-is-flux-1-kontext

判断：

> **很适合当前“多张本人照片 → 固定 IP → 多场景”的任务。**

#### Google Gemini / Nano Banana 系列

Google 官方从 2025 年开始就把“保持人物 likeness”作为核心图像编辑能力。

当前 Gemini 3 图像模型支持：

- 多参考图；
- 多角色一致性；
- 角色换衣、换姿势、换场景、风格转换；
- 继续编辑时保留人物身份。

Google 官方 API 文档中，Gemini 3.1 Flash Image / Gemini 3 Pro Image 可使用多张角色参考图维持 character consistency。

来源：
- https://ai.google.dev/gemini-api/docs/image-generation
- https://blog.google/products-and-platforms/products/gemini/updated-image-editing-model/
- https://blog.google/innovation-and-ai/technology/ai/nano-banana-2/

判断：

> **很适合先做“真人像本人”，再做漫画化的快速验证。**

#### ChatGPT Images 2.5

OpenAI 2026 年 Images 2.5 明确加强 reference photo fidelity 和 identity preservation。

官方提示方法不是只写“画得像这个人”，而是：

> 输入真人照片，并明确哪些东西必须完全保持，只允许改变目标元素。

例如换衣时明确：

- 不改变 face；
- 不改变 facial features；
- 不改变 skin tone；
- 不改变 body shape；
- preserve exact likeness / hairstyle / proportions。

来源：
- https://openai.com/index/introducing-chatgpt-images-2-5/
- https://developers.openai.com/api/docs/guides/image-prompting

判断：

> **ChatGPT 仍然可以用，但要从“重新生成人物”改成“基于真人母图的身份保真编辑”。**

---

## 3.2 无需训练的 ID 专用方法｜第二层方案

如果通用图像模型仍然不够像，可以使用专门的 Identity-Preserving 方法。

### InstantID

- 单张人脸即可；
- 无需为某个人单独训练；
- 专门解决 identity-preserving generation；
- 支持风格化。

来源：
- https://github.com/instantX-research/InstantID

适合：

> 快速测试“一张照片 → 多种画风，脸还能不能认出来”。

### PuLID

- tuning-free；
- 专门做 ID customization；
- 有 SDXL / FLUX 版本；
- 强调 ID fidelity，同时尽量减少对原模型画风和编辑能力的干扰。

来源：
- https://github.com/ToTheBeginning/PuLID

适合：

> 在 ComfyUI / 本地工作流里长期做固定真人 IP。

### DreamO

字节团队 2025 年公开的统一图像定制框架。

ID 模式专门保持 facial identity；项目说明认为 facial fidelity 比此前 adapter 方法更高，但同时可能比 PuLID 更容易影响底模输出。

来源：
- https://github.com/bytedance/DreamO

适合：

> 后续需要更强的本地身份控制时测试。

---

## 3.3 人物 LoRA｜长期生产的重方案

LoRA 仍然有价值，尤其是长期固定一个真人 IP。

生财有术里找到两类直接相关实践：

1. 《三年AI图像工程师分享：三个月还原人脸的出图思路、技巧和心得》
   - 真人转漫画如果只用一张参考图，通常能抓住发型、表情、部分特征，但形似有限；
   - 想保持脸部身份，同时自由改变发型、姿势、表情和画风，可以训练人物 LoRA；
   - 作者在 Q 版 / 漫画化实验中认为 LoRA + 后续脸部修复比单纯 reference 更稳定。

2. 《保姆级Lora炼丹教程，一站式整合包，让你实现真人模特定制》
   - 真人 LoRA 会额外裁脸训练，让模型学习更多脸部细节；
   - 素材质量、标签和过拟合控制直接影响“像不像”和“能不能换衣换场景”。

判断：

> **LoRA 最适合“这个男性 IP 未来要画几十、几百次”的长期阶段，而不是现在第一步就上。**

原因：

- 要准备和清洗训练集；
- 要训练和调权重；
- 容易过拟合；
- 模型升级以后还可能重做。

所以当前先用新一代多参考编辑模型验证是否已经够用。

---

## 4. 生财有术里得到的实战补充

### 4.1 先“选角”，再连续生成

《从零学习 Coze 绘本工作流》强调：

> 先生成和确认角色，再拿固定角色去生成各个场景。

而不是脚本、场景、角色一起一次性生成。

这和当前问题高度一致。

### 4.2 不要无限链式编辑

Flux Kontext 的生财实测提到：

- 短链路人物一致性很好；
- 连续多次基于“上一张结果”继续编辑，后面会逐渐漂；
- 新场景需要回到最原始角色图重新作为输入。

这个经验很重要。

正式生产应该采用：

```text
Identity Master
├─ 场景 A
├─ 场景 B
├─ 场景 C
└─ 场景 D
```

而不是：

```text
Master → A → B → C → D → E
```

后一种会不断积累误差。

---

## 5. 当前最重要的认识

### 认识 1：我们需要的不是“角色设定文字”，而是 Identity Master

文字只能辅助。

真正应该成为长期 Source of Truth 的是：

> **一组经过人工确认、真的像本人的标准角色母图。**

至少包括：

- 正脸；
- 3/4；
- 左右侧脸；
- 平静；
- 微笑；
- 大笑；
- 必要时一张全身比例。

以后所有图都回到这组母图，不靠 AI 自己“记住”这张脸。

### 认识 2：身份参考、画风参考、姿势参考要分开

以后不能把一张图片同时承担：

- “这个人是谁”；
- “画成什么风格”；
- “穿什么衣服”；
- “做什么姿势”。

更稳定的结构是：

```text
Identity References
= 这个人是谁

Style Reference
= 怎么画

Pose / Composition Reference
= 怎么站、怎么构图

Story Prompt
= 现在发生什么
```

然后由多参考模型组合。

### 认识 3：漫画化可能反而更适合当前 IP

真人写实的判断标准非常苛刻。

真人图只要：

- 眼距偏一点；
- 鼻头形态变一点；
- 额头比例变一点；
- 下颌收一点；

熟悉本人者就会觉得“不像”。

漫画本来就允许抽象和简化。

因此漫画 IP 不要求复制每个像素，而是要稳定保留一组 Recognition Anchors（识别锚点）。

当前男性 IP 可重点保留：

- 额头 / 发际线；
- 长椭圆、略方的头脸轮廓；
- 眉眼关系；
- 正常大小的眼睛；
- 鼻头和侧面轮廓；
- 耳朵与头部比例；
- 平静时克制、笑起来眼睛变窄和脸颊抬起的表情变化。

如果这些锚点稳定，漫画可以比“半写实 AI 帅哥”更像本人。

---

## 6. 当前推荐路线

### Phase A｜先解决“像不像”

不要画信息板。

只做 1 张头像测试。

输入：

- 3–5 张最清楚的真人参考照；
- 不给画风；
- 不换职业；
- 不换身体；
- 不做复杂背景。

输出：

- 正脸自然状态。

验收只有一个：

> **本人第一眼觉得像不像。**

### Phase B｜建立 Identity Master

Phase A 通过后，再生成：

- 正脸；
- 3/4；
- 侧脸；
- 微笑；
- 大笑。

人工挑出真正像的版本，成为正式母版。

### Phase C｜测试漫画化

同一套 Identity Master，只改变画风。

第一轮只测试 3 个方向：

1. 轻手绘 / 日常漫画；
2. 清晰线稿 + 平涂；
3. 轻半写实漫画。

比较的不是哪个“最好看”，而是：

> **哪个一眼还能认出本人，同时适合长期漫画。**

### Phase D｜才进入不同人生

身份和画风都稳定以后：

- 大厂男；
- 普通上班族；
- 创业者；
- 顾家型；
- 社交型；
- 男性视角中的“我”。

都共用同一 Identity Master。

---

## 7. 工具对比：当前怎么选

| 路线 | 身份还原 | 多图参考 | 漫画化 | 成本 / 难度 | 当前用途 |
|---|---|---|---|---|---|
| ChatGPT Images 2.5 | 高，需用“编辑”思路 | 有参考图工作流 | 强 | 低 | 立即重测 |
| Gemini / Nano Banana 2 / Gemini 3 Image | 高 | 强 | 强 | 低 | 第一优先对标 |
| FLUX.2 pro/max | 很强，主打多参考一致性 | 8–10 图 | 强 | 中 | 第一优先对标 |
| InstantID | 较高 | 主要单 ID | 强 | 中 | 快速开源验证 |
| PuLID | 高 | ID 专用 | 强 | 中高 | 本地长期工作流 |
| DreamO | 高 | 支持 ID / IP / 多条件 | 可 | 中高 | 后续本地测试 |
| 人物 LoRA | 训练好后很强 | 训练集 | 很强 | 高 | 长期 IP 生产 |

当前不建议一开始就训练 LoRA。

---

## 8. 下一步最小实验

不要继续理论研究。

用同一批本人照片做一个 3×3 对比即可：

```text
             写实身份      轻漫画       半写实漫画
ChatGPT         1             1              1
Gemini          1             1              1
FLUX.2          1             1              1
```

每张只评三件事：

1. 像不像；
2. 是否自动美化 / 换脸；
3. 这个方向能不能长期画漫画。

如果某一个工具的写实身份已经明显胜出，再继续用它做 Identity Master。

如果写实都不够，但某种漫画明显抓住本人识别锚点，可以直接走漫画 IP，不必执着照片级还原。

---

## 9. Promotion / System Impact

这轮研究已经不再停留在 Research-only。

2026-09-26，结合男性 IP 和女性老婆脸版两轮真实校准经验，通用方法已经正式晋升到：

- `Darcy-Jin/personal-ai-system/skills/character-identity-preservation/SKILL.md`

后续又在 personal-ai-system 完成一轮跨产品 / 研究对标，详细见：

- `Darcy-Jin/personal-ai-system/docs/research/2026-09-26-character-identity-preservation-benchmark-and-improvement.md`

正式 Skill 现在统一维护：

- AI 主导执行 + Human Recognition Gate；
- Identity Core / Dynamics / Appearance State / Role & Scene / Rendering 五层分离；
- 主参考 / 辅助参考 / 弱参考分级；
- Identity Master 冻结与从 Master 分叉生成；
- “不像但说不清”时的主动差异定位；
- 头脸包络、颧骨、苹果肌、下巴、眼神、笑容、眼镜、胖瘦、年龄、角度等观察维度库；
- 模板脸、尖脸、标准笑、眼镜模板、链式编辑、合集二次生成等失败模式；
- 个体 Profile / 通用 Pattern 分流与持续学习机制；
- 非生成式对比拼图脚本。

Relationship 继续保存：

- 男性 IP 和女性老婆脸版各自的 Identity Profile / 项目特有结论；
- AI Comic 里的角色、叙事和视觉使用规则。

不再在 Relationship 内复制一套通用身份校准方法。

### 当前验证状态

方法来源已经有两个真实人物、多轮人工校准和明确失败案例作为 Evidence。

但按照 personal-ai-system 的验证规则：

> **正式 Skill 文件写好并接入路由，不等于已经完成正式 Skill 级验证。**

下一次独立真人身份任务需要从：

```text
参考图分级
→ Human Calibration
→ Approved Positive Sample
→ Identity Master
→ 生产变体
→ 漂移检查 / 回退
→ 经验回灌
```

完整跑一遍，再把状态升级为 Validated。

原先“研究先不修改正式视觉规则、等待以后再晋升”的判断已经被本次 Promotion 替代。
