# Demi 的生成式 AI 課程筆記站

這個網站依課程日期整理每週的練習與專案，記錄從 Python 函數圖形、DNN、Prompt 與互動網頁，到 AI Suite、RAG、Planning Agent 和專案規則的學習過程。筆記以實際作業和操作紀錄為依據；尚未找到實際成果的項目會標示待補。

## 本機瀏覽

```bash
npm install
npm run dev
```

## 新增每週筆記

修改 `src/content/lessons.ts` 前，先閱讀 [`AGENTS.md`](./AGENTS.md)。每個課程項目使用共用格式整理日期、目標、概念、流程、例子、結果和反思；不要把推測寫成已完成的事實。

## 建置與預覽

```bash
npm run build
npm run preview
```

網站使用 React、TypeScript 和 Vite。部署設定待內容與畫面確認後再使用。
