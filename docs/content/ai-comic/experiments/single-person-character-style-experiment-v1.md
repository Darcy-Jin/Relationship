# Relationship AI Comic｜单人 Character Style 实验 v1

> Date: 2026-09-26  
> Status: Ready for Execution  
> Goal: 先用两个单人样本选出 Relationship Character Style v1，再进入双人验证。

## 1. 这次只回答什么

只回答：

> **Relationship 的人物长期应该怎么画。**

本轮不回答：

- 双人互动是否稳定；
- Story Role 怎么设计；
- 大厂男友怎么造型；
- 漫画分镜怎么画；
- 哪张照片最好看。

---

## 2. 为什么先做单人

当前多人能力仍会引入：

- Subject Binding；
- Spatial Assignment；
- Attribute Leakage；
- Interaction / Occlusion。

这些变量会污染纯画风判断。

因此当前拆成：

~~~text
Phase 1
Single-person Character Style
↓
选出 Style v1

Phase 2
Multi-subject Validation
↓
验证两个人同画面是否仍稳定

Phase 3
Story Role / Episode Production
~~~

---

## 3. 两条独立实验线

### Subject A｜Darcy

推荐 Exact Baseline：

> `DARCY-SRC-005`

原因：

- 当前年龄状态；
- Identity / current appearance；
- 近距离人脸信息清楚；
- 适合先做 Character Style 转换。

如果执行前发现该资产不是当前最合适的清晰参考，可在 Human Visual Identity 既有 Evidence 中替换，但必须记录 Exact Asset。

### Subject B｜Wife

推荐 Exact Baseline：

> `MASTER-ROOT-01`

原因：

- 已通过 Root Master Gate；
- 中性正面；
- 身份状态稳定；
- 当前已进入 Supabase Storage，可作为高置信度 Exact Target。

---

## 4. 关键调整：Baseline 不再额外生成

效果优先时，本轮不先生成“中性生活 Baseline”。

直接使用：

> **当前最可信 Exact Identity Asset 作为 Baseline。**

原因：

~~~text
再生成一张 Baseline
→ 先引入一次身份漂移

Exact Source / Root Master
→ 直接从真人高置信输入开始
→ 少一个生成误差环节
~~~

因此正式结构：

~~~text
Darcy Exact Baseline
├─ Style A
├─ Style B
└─ Style C

Wife Exact Baseline
├─ Style A
├─ Style B
└─ Style C
~~~

每个 Candidate 都必须直接从自己的 Exact Baseline 分叉。

---

## 5. Frozen Variables

对同一个 Subject 的 A / B / C：

必须固定：

- Identity；
- Age / Body State；
- Hair；
- Clothing；
- Expression；
- Pose；
- Camera；
- Crop；
- Scene / Background；
- Output Ratio；
- 非目标 Lighting / Color。

只允许 Character Style 发生变化。

> 两个 Subject 之间不要求姿势、衣服、场景完全一样；公平比较发生在“同一个人自己的 A/B/C”内部。

最终再检查同一 Style 是否对两个人都成立。

---

## 6. 三个正式 Style Candidate

### A｜Identity-safe 轻手绘都市漫画

目标：

- 轻手绘；
- 柔和自然；
- 低饱和淡彩；
- 轻水彩 / 纸张质感；
- 漫画化但不改变真人骨相。

### B｜清爽都市线稿平涂

目标：

- 干净细线；
- 柔和平涂；
- 简单阴影；
- 数字插画感；
- 更适合稳定批量生产。

### C｜轻半写实生活插画

目标：

- 更接近真人结构；
- 弱描边 / 无明显描边；
- 柔和体积光；
- 轻数字绘画质感；
- 保留更多真实识别信息。

完整 Style Spec 读取：

- `visual-system-v1.md`

---

## 7. Runtime Identity Pack

每个人的完整 Identity Profile 继续长期存在。

但本次真正给模型的只使用：

~~~text
Exact Baseline Image
+
必要 Identity Preserve
+
本次 Style Change
~~~

不把整个长期 Profile 复制成几千字 Prompt。

### Darcy minimal preserve

- same person / facial identity；
- current age appearance；
- natural face proportions；
- no beautification into generic idol face；
- do not alter core eye / nose / mouth relationships。

### Wife minimal preserve

- same person / facial identity；
- current natural age state；
- preserve approved face contour / facial relationships；
- no generic beauty-template face；
- do not sharpen chin / standardize eyes / sweeten expression by default。

---

## 8. Candidate Output Rule

每次只输出：

> **single image**

禁止：

- 一次生成 A/B/C 海报；
- 自动补 Reference；
- 自动生成 Character Sheet；
- grid / contact sheet；
- Candidate A 再派生 B；
- Candidate B 再派生 C。

正确：

~~~text
Exact Baseline → A
Exact Baseline → B
Exact Baseline → C
~~~

---

## 9. Gate

### Gate 1｜Identity Fidelity

先问：

> **还是不是本人？**

Fail：

> Reject，不评价 Style。

### Gate 2｜Control Variable

检查：

- pose；
- expression；
- clothing；
- crop；
- background；
- camera；
- non-style lighting。

发生明显漂移：

> Reject / Regenerate。

### Gate 3｜Style Signal

确认：

> A / B / C 的 Style 差异肉眼足够明显。

差异太弱：

> Low-information Experiment。

### Gate 4｜Cross-subject Generalization

同一个 Style 同时看：

- Darcy 是否成立；
- Wife 是否成立。

目标不是：

> 某一张最好看。

而是：

> **这套 Character Style 是否能长期承载不同主角。**

---

## 10. Human Delivery

最终给用户两块比较：

~~~text
Darcy
Exact Baseline | A | B | C

Wife
Exact Baseline | A | B | C
~~~

Comparison Board：

> **deterministic only**

必须使用各张真实原像素，禁止生成模型重画。

---

## 11. 选择口径

按顺序：

1. Identity Fidelity；
2. 两个人是否都稳定；
3. Relationship 内容气质是否匹配；
4. 手机可读性；
5. 表情 / 日常生活表达能力；
6. 长期生产稳定性。

不以：

> “哪张最漂亮”

作为选择标准。

---

## 12. 完成条件

### 成功

~~~text
Darcy A/B/C valid
+
Wife A/B/C valid
↓
Human Comparison
↓
Relationship Character Style v1
= Locked for Production
~~~

### 不成功

如果：

- 三套都不稳；
- 一套只适合其中一人；
- Identity 漂移太严重；

则：

> **不硬选。**

回到 Style Candidate / Provider Benchmark。

---

## 13. 下一步

本轮完成后才进入：

~~~text
Selected Character Style v1
↓
双人同画面验证
↓
Story Role
↓
Role Transformation
↓
Story Role Master
↓
Character Sheet
↓
Episode 001
~~~
