# Player Experience

这是 Relationship 当前真正给玩家使用的入口。

运行：

```bash
npm start
```

浏览器打开：

```text
http://127.0.0.1:4173/play/
```

不要把根目录 `/` 的 Engine Debug UI 当成玩家版。

## 当前范围

这里只实现：

> **前 10 分钟 + 第一段约四年的关系人生。**

玩家会：

- 遇见 4 个人；
- 选择是否继续认识；
- 约会；
- 进入关系；
- 经历日常生活；
- 面对重复摩擦；
- 开始共同生活；
- 经历事业机会和 Crisis；
- 在四年后做关系决定；
- 回看 Memory Timeline。

后台仍使用固定规则。

玩家界面不显示后台数值和分析术语。


## 手机打开

### 同一个 Wi-Fi

电脑执行：

```bash
npm start
```

然后手机打开终端打印的：

```text
Phone on the same Wi-Fi:
http://<电脑局域网IP>:4173/play/
```

### GitHub Pages

第一次在仓库 Settings -> Pages 中把 Source 设为 GitHub Actions，然后运行 Actions 里的 `Deploy Relationship Player`。

预计地址：

```text
https://darcy-jin.github.io/Relationship/play/
```

详细见：

`docs/product/mobile-testing.md`
