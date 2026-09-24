# 手机端测试

当前 Player Experience 同时支持：

- 手机竖屏；
- 手机横屏；
- 电脑浏览器。

第一优先按手机竖屏设计。

## 方式一：手机和电脑在同一 Wi-Fi

这是现在立刻可用的方式。

电脑下载仓库以后，在根目录执行：

```bash
npm start
```

终端会显示类似：

```text
Computer Player: http://127.0.0.1:4173/play/

Phone on the same Wi-Fi:
  http://192.168.1.23:4173/play/
```

手机和电脑连接同一个 Wi-Fi，然后在手机浏览器打开终端显示的 `Phone on the same Wi-Fi` 地址。

### Windows 第一次运行时

如果 Windows 弹出：

> 是否允许 Node.js 通过防火墙

请选择：

> **允许“专用网络 / Private networks”访问。**

不需要开放公用网络。

如果没有弹窗，但手机打不开，优先检查：

1. 手机和电脑是否真在同一个 Wi-Fi；
2. VPN 是否让两台设备处在不同网络；
3. Windows 防火墙是否阻止 Node.js；
4. 使用的是终端打印出的局域网 IP，而不是 `127.0.0.1`。

`127.0.0.1` 只代表“这台设备自己”，手机不能用它访问电脑。

---

## 方式二：GitHub Pages 公网测试

这个方式最适合后面把链接发给其他测试玩家。

仓库已经准备好 Pages 部署工作流，但 GitHub 要求仓库 Owner 第一次手动启用 Pages。

只需要做一次：

1. 打开 Relationship 仓库；
2. 进入 **Settings**；
3. 左侧进入 **Pages**；
4. 在 **Build and deployment** 中，把 **Source** 设成 **GitHub Actions**；
5. 回到 **Actions**；
6. 打开 **Deploy Relationship Player**；
7. 点击 **Run workflow**。

发布成功后，玩家地址应为：

```text
https://darcy-jin.github.io/Relationship/play/
```

之后手机、电脑都可以直接打开，不要求同一个 Wi-Fi，也不要求你的电脑一直开着。

### 当前隐私边界

v0 是纯静态前端。

当前没有：

- 登录；
- 后台数据库；
- AI API；
- 行为分析 SDK；
- 玩家选择上传接口。

玩家的选择只保存在当前浏览器内存中；主动点“保存这一段人生”时，才会在本机下载 JSON。

注意：仓库本身是 Public，因此 Pages 测试地址也是公开可访问的。

---

## 当前手机适配

已经处理：

- `100dvh` 手机动态视口；
- 刘海 / 底部 Home Indicator 安全区；
- 48px 以上触摸目标；
- 手机单列人物和选择；
- 小屏文字尺寸；
- 竖屏人物区缩短；
- 手机端取消 hover 位移动画；
- 防止移动浏览器自动放大文字；
- PWA / 添加到主屏幕基础 manifest。

当前还没有正式人物图片，仍使用占位视觉。
