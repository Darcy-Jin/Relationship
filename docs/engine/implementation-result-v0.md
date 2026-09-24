# 确定性游戏引擎 v0｜实现结果

更新时间：2026-09-24

## 1. 当前结果

第一版纯固定规则 Web 产品已经实现。

它现在可以独立完成：

```text
开局设置
↓
固定候选人物
↓
主观吸引 / 是否考虑
↓
选择对象
↓
固定人生事件
↓
玩家选择
↓
固定人物回应
↓
承受程度 / 原因
↓
Evidence 更新
↓
确定性 Contrast Pack
↓
第二轮 / 必要时第三轮
↓
Choice Map
↓
导出 Session JSON
```

整个运行过程：

> **不使用 AI。**

没有：

- LLM；
- 网络推理；
- 随机人物；
- AI 剧情；
- 自由文本语义理解；
- 隐藏匹配总分。

---

## 2. 技术实现

为了让第一版尽量少依赖环境，当前使用：

- 原生 HTML；
- 原生 CSS；
- 浏览器 ES Module；
- Node.js 内置 HTTP server；
- Node.js 内置 `node:test`；
- 零第三方 npm dependency。

启动：

```bash
npm start
```

浏览器打开：

```text
http://127.0.0.1:4173
```

测试：

```bash
npm test
```

如果需要把打包源码还原成普通文件：

```bash
npm run materialize
```

会还原：

- `app.css`
- `src/engine.js`
- `src/content.js`
- `src/app.js`
- `tests/engine.test.mjs`

---

## 3. 为什么源码放在 .source 分段快照里

当前 GitHub 写入通道对大文本单次写入不稳定。

为了保证：

> **GitHub 上运行的代码就是本地已经测试通过的那一份，而不是重新手工抄写的一份近似代码，**

实现采用：

```text
已测试源码
↓
gzip + base64
↓
固定分段保存到 .source/
↓
浏览器按固定顺序拼接并解压
```

这只是交付 / 传输方式。

它不参与业务规则。

当前快照：

- base64 总长度：`29896`
- SHA-256：`ed330f1cdc51d64cba91df0242cef64181c047c8ed561a98d6acae2892d25684`

GitHub 端重新拼接后已经计算同一 SHA-256：

> **完全一致。**

所以仓库里的快照和本地测试源码是一份内容。

---

## 4. 自动测试结果

当前：

> **25 / 25 tests passed。**

覆盖：

### 规格 fixture

- 硬约束过滤；
- 首轮固定顺序；
- Career / Time / Reliability Contrast Pack；
- Social / Predictability Contrast Pack；
- attraction gate；
- Evidence 主因 / 次因权重；
- 没 probe 不记 Evidence；
- Lifestyle tie break；
- 第三轮反转触发；
- 单轮高分不能直接 STABLE；
- 确定性重放。

### Event Resolver

全部覆盖 HIGH / MID / LOW 边界：

- WEEKEND；
- COHABITATION；
- CAREER_OPPORTUNITY；
- CRISIS；
- WORKWEEK；
- EXPRESS_NEED；
- FRIEND_GATHERING；
- PLAN_CHANGE；
- BUDGET；
- FAMILY_DUTY；
- EXPRESS_SPACE。

### 完整路径

已自动跑通：

> 一条完整两轮路径 → Choice Map。

---

## 5. 其他验证

### JavaScript 语法检查

通过：

- `bootstrap.js`
- materialize script；
- local server；
- 还原后的 engine / app / content / tests。

### 静态启动 Smoke Test

已验证：

- 首页可返回；
- bootstrap 可返回；
- source snapshot 可读取；
- spec JSON 可读取。

结果：

> **PASS**

---

## 6. 开发过程中发现并修正的问题

### 6.1 attraction rounds_seen 不能用最大轮数代替真实证据轮数

已改为：

> 只有这一轮真的记录 attraction evidence，才增加 rounds_seen。

避免错误稳定门槛。

### 6.2 single_change_reason 必须算本轮 Evidence

否则玩家在一段人生结束明确说：

> “只能改一个，我就改这个。”

却可能不进入第二轮 Contrast Selector。

已修正。

### 6.3 FAMILY_DUTY 的低 fairness 必须真实产生 UNFAIR

最初实现没有明确落入不公平结果。

已按 Rulebook 修正。

### 6.4 所有候选人吸引力必须由玩家主动填写

不再存在隐藏默认 2 分。

### 6.5 第二轮三个人都不考虑时不能强迫选择

现在会：

- 记录 attraction evidence；
- 结束当前模拟；
- 根据已有 Evidence 输出 Choice Map。

---

## 7. 当前还没有验证什么

这些仍然未知：

- 真人是否觉得人物有吸引力；
- 人物有没有明显“正确答案”；
- 事件是否真的像生活；
- Evidence 权重是否合理；
- Contrast Pack 是否真的能帮助区分原因；
- 玩家最终是否会出现：
  > “原来我真正介意的不是 X，而是 Y。”
- 整个过程更像游戏还是问卷。

这些都不能靠自动测试证明。

---

## 8. 下一步

正式进入：

> **第一次真人试玩。**

真人试玩必须跑当前确定性程序。

不再使用 ChatGPT 临场主持替代引擎。

试玩记录继续使用：

`docs/validation/playtest-template.md`

第一次试玩以后，根据真实证据只改有问题的部分：

- 人物；
- 事件；
- Evidence；
- Contrast Pack；
- 交互；
- Choice Map。

不因为一个玩家反馈就重开整个关系模型。
