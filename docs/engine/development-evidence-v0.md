# Deterministic Engine v0｜开发交付与验证

更新时间：2026-09-24

## 当前结果

确定性关系模拟器 v0 已完成第一版代码实现并写入仓库。

实现特征：

- 无 AI；
- 无网络依赖；
- 无随机数；
- 原生 HTML / CSS / JavaScript；
- Node 仅用于本地静态服务、源码还原和自动测试；
- 引擎规则与 UI 分离；
- Session 可以导出；
- 同一输入可重复得到同一结果。

## 当前运行方式

仓库根目录执行：

```bash
npm start
```

不需要 `npm install`。

启动后按终端提示在浏览器访问本地地址。

## 当前源码交付形式

由于当前 GitHub 连接器写入大文本存在长度限制，已测试源码快照暂时保存在：

`.source/`

入口：

- `bootstrap.js`：浏览器直接加载已测试源码快照；
- `scripts/materialize.mjs`：把源码快照还原成普通 `src/`、`tests/` 和 `app.css`；
- `scripts/serve.mjs`：本地静态服务器。

需要普通源码目录时执行：

```bash
npm run materialize
```

这只是传输包装，不是业务架构。

## 自动测试

本地开发完成后运行：

```bash
npm test
```

结果：

> **25 / 25 tests passed**

覆盖：

- `spec/v0/test-fixtures.json` 中的固定规则 fixture；
- Event Resolver 的 HIGH / MID / LOW 边界；
- 硬约束过滤；
- 首轮候选顺序；
- Evidence 主因 / 次因；
- 无 probe 不记 Evidence；
- attraction gate；
- Contrast Pack 选择；
- Lifestyle tie-break；
- 第三轮触发；
- 单轮高分不能直接 STABLE；
- 重复执行一致性。

## Smoke Test

已验证：

- 静态 Web 可以启动；
- `index.html`、`bootstrap.js` 和源码分段可以被本地服务器读取；
- 源码快照可以还原；
- JSON spec 可以加载。

## 开发过程中修复的问题

### 1. 家庭责任场景的低公平分支

原实现中 `fairness=LOW` 没有明确落到 `UNFAIR`。

已按 Rulebook 修正。

### 2. 第三轮反向证据测试

原测试夹具缺少第一轮上下文，无法真实判断：

> 第二轮是否出现 `<= -3` 的净反证。

已补齐上下文后验证通过。

### 3. 候选人吸引评分

UI 不再偷偷给候选人默认吸引分。

玩家必须亲自给每个人：

- 0～4 吸引评分；
- 是否愿意考虑。

### 4. 第二轮全部不考虑

如果第二轮三个对照人物玩家全部明确不考虑：

> 不强迫玩家从不喜欢的人里选。

系统保存 attraction evidence，然后直接进入当前 Choice Map。

## 当前验证边界

这次验证证明的是：

> **程序和规则能够一致、确定地运行。**

还没有证明：

- 人物是否真的有吸引力；
- 场景是否像真实人生；
- Evidence 权重是否合理；
- 玩家会不会真的产生“原来我在乎的是 Y”的认识；
- 游戏是否好玩。

这些需要下一阶段真人试玩。

## 下一步

现在已经可以进入：

> **第一次正式真人 First Playable。**

试玩时使用程序本身，不再由 ChatGPT 临场主持。

试玩证据继续记录到：

`docs/validation/`
