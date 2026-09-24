# First Life Player Experience v0｜实现结果

更新时间：2026-09-24

## 1. 当前结果

“前 10 分钟 + 第一段人生”的玩家垂直切片已经实现。

玩家入口：

`/play/`

旧的根目录页面继续保留为：

> **Engine Debug UI**

两者分开，不再让玩家直接面对后台规则。

---

## 2. 玩家现在实际会经历什么

```text
开始这一年
↓
先后遇见 4 个人
↓
每个人发生一次很短的自然互动
↓
只按感觉决定：
很想再见 / 可以再看看 / 没什么感觉
↓
从愿意继续认识的人里选一个
↓
第一次约会
↓
决定是否继续关系
↓
三个月后
↓
3 个日常生活片段
↓
半年后的生活节奏
↓
一个反复出现的问题
↓
开始真正一起过日子
↓
重大事业机会
↓
真正需要对方的 Crisis
↓
四年后的继续 / 改变 / 犹豫 / 离开
↓
这一段人生的 Memory Timeline
↓
再活一次
```

第一段人生结束以后：

> **不输出婚恋测评报告。**

只让玩家先看自己经历过的事情。

---

## 3. 前台和后台已经正式分开

### 玩家看到

- 人；
- 工作和生活片段；
- 对话；
- 约会；
- 周末；
- 工作；
- 朋友；
- 家务；
- 事业机会；
- 生病；
- 四年后的选择；
- 回忆。

### 玩家看不到

- trait 数值；
- Relationship State；
- LIKE / ACCEPT / CHANGE_REQUIRED / CANNOT_CONTINUE；
- reason code；
- Evidence；
- Hypothesis；
- Contrast Pack。

自然语言选择仍然会在后台映射到固定规则。

例如：

> “我最难受的不是你忙，是每次都先决定完再告诉我。”

后台仍然可以保存：

`LOW_PRIORITY`

但玩家不需要知道。

---

## 4. 当前技术结构

```text
play/
├─ index.html
├─ style.css
├─ app.js
├─ runtime.js
├─ encounter.js
├─ life.js
├─ major.js
├─ content.js
├─ logic.js
└─ tests/
   └─ logic.test.mjs
```

职责：

- `logic.js`：确定性关系规则适配；
- `content.js`：Encounter / First Date 固定内容；
- `runtime.js`：这一段人生的运行状态；
- `encounter.js`：遇见、选人、第一次约会；
- `life.js`：日常、时间跳跃、反复问题、共同生活；
- `major.js`：事业机会、Crisis、四年决定、Memory；
- `app.js`：前台状态路由。

不使用第三方前端框架。

---

## 5. 当前测试

玩家版本地：

> **12 / 12 tests passed**

同时：

> 所有 Player Experience 源码的 Git blob SHA 已与 GitHub `main` 中对应文件逐项比对，当前完全一致。

检查过：

- Rule band 边界；
- responsiveness；
- autonomy；
- 周末空间；
- 同居公平；
- 事业机会；
- Crisis 可靠；
- Relationship State 独立更新；
- 工作周固定时间；
- predictability 与 social energy 分离；
- boundary respect 与 social energy 分离；
- space pressure。

JS syntax：

> **PASS**

原 Engine Debug UI 的既有 25 个自动测试没有被本次 Player Experience 代码修改。

`package.json` 已把两组测试都接入 `npm test`。

---

## 6. 怎么运行

仓库根目录：

```bash
npm start
```

然后：

### 玩家版

```text
http://127.0.0.1:4173/play/
```

### 引擎调试版

```text
http://127.0.0.1:4173/
```

玩家试玩只使用：

> `/play/`

---

## 7. 当前版本故意还没做什么

这只是 First Life 垂直切片。

暂时没有：

- 第二段人生的 Contrast Pack 体验化；
- 两段人生后的 Reflection；
- 真人照片 / 正式立绘；
- 性别 / 恋爱对象偏好选择；
- 孩子完整系统；
- 完整婚姻 / 老年；
- 声音；
- AI；
- 大量人物和剧情。

当前“再活一次”只是重开 First Life。

这符合当前验证目标。

---

## 8. 下一步只验证一件事

现在最重要的问题不是：

> Rule Engine 能不能算。

而是：

> **玩家会不会忘记后台有一套规则，只觉得自己真的和一个人过了几年。**

第一次真人试玩重点看：

1. 四个人有没有一个让玩家想继续认识；
2. Encounter 会不会太像资料介绍；
3. First Date 有没有人物感；
4. 日常事件是不是够轻；
5. 反复问题有没有真实生活感；
6. Career / Crisis 有没有重量；
7. 时间跳跃会不会让关系断掉；
8. Memory 能不能让玩家产生“这一段人生”的感觉；
9. 哪一刻最像做题；
10. 哪一刻最有代入感。

根据真实试玩只改有问题的 Experience Layer。

后台 Rule Engine 暂时不重做。
