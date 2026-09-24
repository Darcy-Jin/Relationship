# .source

这里保存 Relationship 确定性 v0 的**已测试源码快照**。

它只是当前 GitHub 交付形式，不是新的业务架构。

## 为什么分段

当前连接器写入大文本时存在长度限制，所以把同一份 gzip + base64 源码拆成 7 段。

运行顺序由：

- `../bootstrap.js`
- `../scripts/materialize.mjs`

明确维护。

## 当前有效顺序

```text
relationship-v0.a01.b64
relationship-v0.a02.b64
relationship-v0.a03.b64
relationship-v0.a04.b64
relationship-v0.part03.b64
relationship-v0.part04.b64
relationship-v0.part05.b64
```

拼接以后：

- 长度：`29896`
- SHA-256：`ed330f1cdc51d64cba91df0242cef64181c047c8ed561a98d6acae2892d25684`

GitHub 端已重新拼接校验，与本地 25/25 测试通过的源码快照一致。

## 如何还原成人类可读源码

在仓库根目录：

```bash
npm run materialize
```

会生成普通：

- `src/`
- `tests/`
- `app.css`

后续如果改为常规 Git / 本地开发方式，可以直接提交还原后的源码，并删除这一层传输包装。

但在没有真实需要前，不为“目录更漂亮”改变已经验证通过的交付。
