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

## 範例照片授權
`comp/` 內的構圖範例照片來自 [slay composition guides](https://github.com/slaycamera/composition-guides)（作者 slay — slaycamera.com），以 CC BY 4.0 授權使用，已裁成 3:4。其餘構圖示意圖為本 App 自繪。
