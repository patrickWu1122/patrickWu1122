# 構圖教練 FrameCoach

即時構圖與拍照姿勢建議的 iPhone 網頁 App（PWA）。

**固定網址：https://patrickwu1122.github.io/patrickWu1122/**

## 更新規則（網址永遠不變）
- 所有更新都推到這個 repo 的 `main` 分支、根目錄，不改 repo 名稱、不搬家。
- 主程式是 `index.html`；改完後把 `sw.js` 第一行的版本號 `fc-vN` 加 1，手機重開 App 就會拿到新版。
- 已加入主畫面的 App 不用重裝。

## 檔案
- `index.html` 主程式（偵測、建議規則、訓練參數 THR / ANG）
- `sw.js` 離線快取
- `manifest.webmanifest`、`icon-*.png` 安裝資訊與圖示
