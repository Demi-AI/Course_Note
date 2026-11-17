export type Lesson = {
  id: string;
  number: string;
  date: string;
  category: string;
  title: string;
  subtitle: string;
  intro: string;
  tags: string[];
  status: "已完成" | "本站實作中" | "待補成果";
  objectives: string[];
  concepts: { title: string; body: string }[];
  workflow: string[];
  example: {
    situation: string;
    inputLabel: string;
    input: string;
    outputLabel: string;
    output: string;
  };
  result?: string;
  reflection: string;
};

export const lessons: Lesson[] = [
  {
    id: "function-plot", number: "01", date: "09/08", category: "PYTHON",
    title: "用函數畫出星星", subtitle: "從 sin()、cos() 開始，把數學式變成圖形。",
    intro: "第一週練習在 Colab 使用 Python 畫函數圖形。我選擇星星作為圖案，並希望程式保持初學者看得懂的寫法。",
    tags: ["Python", "函數圖形", "sin()", "cos()", "Colab"], status: "已完成",
    objectives: ["用 sin() 與 cos() 計算圖形座標", "了解參數變化如何影響圖形", "用簡短 Markdown 說明自己的設計"],
    concepts: [
      { title: "函數可以產生座標", body: "程式先準備一組參數，再把參數帶入 sin()、cos() 等函數，得到每個點的 x、y 座標。把座標連起來，就能畫出圖形。" },
      { title: "用基本寫法看懂每一步", body: "這次希望程式保留新手容易追蹤的步驟，從建立參數、計算座標到繪圖，不把流程藏在太多自訂函式裡。" },
      { title: "圖形也是一種表達", body: "除了程式能執行，也可以調整圖案大小並加上標題或文字，讓讀者看得出來這張圖想呈現什麼。" },
    ],
    workflow: ["載入老師指定的繪圖套件", "建立圖形參數", "用 sin()、cos() 計算座標", "繪出星星並調整大小", "用 Markdown 說明圖形與程式"],
    example: { situation: "想用基礎 Python 畫一個星星，並讓圖案不要太大。", inputLabel: "我的設計", input: "以 sin()、cos() 產生星形需要的座標，程式採初學者容易讀懂的順序。", outputLabel: "畫面結果", output: "Colab 顯示一個星星函數圖形，旁邊附上自己的簡短說明。" },
    reflection: "這次練習讓我看到，數學函數不只能算數值，也能用來畫出有指定形狀的圖案。",
  },
  {
    id: "dnn-handwriting", number: "02", date: "09/15", category: "DEEP LEARNING",
    title: "DNN 手寫數字辨識", subtitle: "調整全連結網路，觀察驗證正確率與測試結果。",
    intro: "使用 MNIST 手寫數字資料訓練自己的全連結神經網路，改變隱藏層和訓練設定，再用 Gradio 手繪數字檢查模型。",
    tags: ["DNN", "MNIST", "驗證資料", "TensorFlow", "Gradio"], status: "已完成",
    objectives: ["將 28×28 圖片轉成模型可使用的輸入", "設計不等於三層的全連結網路", "比較驗證資料與測試資料的結果", "用 Gradio 驗證手繪輸入"],
    concepts: [
      { title: "影像輸入與分類輸出", body: "每張 28×28 的灰階手寫數字圖片攤平成 784 個數值，像素縮放到 0 到 1，模型最後輸出 0 到 9 的十個類別。" },
      { title: "改變隱藏層架構", body: "這次使用四個隱藏層，神經元數依序為 180、117、73、41，讓網路架構與課堂範例有所不同。" },
      { title: "驗證集和測試集用途不同", body: "驗證資料用來觀察訓練過程、比較設定；測試資料則用來檢查模型面對保留資料時的表現。兩者不應混成同一個數字。" },
    ],
    workflow: ["載入並正規化 MNIST 圖片", "把標籤轉成十類分類格式", "建立四個隱藏層的 DNN", "比較不同 epoch 設定的驗證結果", "用 Gradio 手繪數字並查看預測"],
    example: { situation: "在 Gradio Sketchpad 手繪數字 5，確認模型是否能辨識自己畫的圖。", inputLabel: "模型設定與輸入", input: "四層隱藏層 [180, 117, 73, 41]；使用者在畫板上手繪一個數字。", outputLabel: "訓練與試用結果", output: "訓練 10 個 epoch 時，最高驗證正確率為 98.38%（第 9 個 epoch），測試正確率為 97.63%。Gradio 對手繪的 5 預測為 5，畫面顯示 100%。" },
    result: "另一組 5 個 epoch 的設定，最高驗證正確率為 98.33%（第 3 個 epoch），測試正確率為 97.90%。兩組數字來自不同訓練設定，不能只用驗證正確率判定測試結果。",
    reflection: "驗證集最高點和測試集結果不一定出現在同一個訓練設定。手繪測試則讓我看到，資料呈現方式也會影響模型實際使用時的判斷。",
  },
  {
    id: "simple-ai-robot", number: "03", date: "09/22", category: "AI DESIGN",
    title: "呆萌型 AI：垃圾分類小幫手", subtitle: "先把想法拆成清楚的輸入、輸出與使用情境。",
    intro: "搬家整理時常遇到不知道物品要怎麼分類的情況，因此我發想垃圾分類小幫手，練習描述它要解決的問題，以及使用者提供什麼、系統回傳什麼。",
    tags: ["AI Canvas", "輸入", "輸出", "垃圾分類"], status: "已完成",
    objectives: ["用具體生活情境定義問題", "明確描述輸入資料和輸出結果", "思考 AI 所需能力與資料"],
    concepts: [
      { title: "輸入和輸出要一一對得上", body: "輸入不能只寫『資料』，輸出也不能只寫『答案』。要說清楚使用者提供什麼，以及系統會回傳哪種可辨認的結果。" },
      { title: "範圍要符合這次的 AI 類型", body: "這份構想希望幫助搬家分類，但如果要求系統理解各種自由描述並生成完整建議，任務就會超過簡單、固定對應的呆萌型 AI。" },
      { title: "資料決定能處理的範圍", body: "若設計成固定對應，可先整理有限的物品名稱與分類表；超出資料表的輸入則需要明確提示無法判斷。" },
    ],
    workflow: ["從搬家整理的困擾找出問題", "寫出使用情境和目標使用者", "列出物品輸入與分類輸出", "檢查輸入輸出是否能固定對應", "依課堂回饋縮小任務範圍"],
    example: { situation: "使用者在整理房間時，想知道某件常見物品要丟哪一類。", inputLabel: "輸入", input: "一個明確的物品名稱，例如『乾淨的紙箱』。", outputLabel: "預期輸出", output: "從整理好的分類資料中回傳對應類別。若要處理照片、含糊描述或多步驟建議，就需要重新界定系統能力。" },
    reflection: "老師回饋提醒我，原本把垃圾分類小幫手想得太像能自由理解和生成內容的 AI。若要符合呆萌型 AI，輸入和輸出需要更單純、明確地對應。",
  },
  {
    id: "prompt-design", number: "04", date: "09/29", category: "PROMPT DESIGN",
    title: "和 AI 一起設計垃圾分類 Prompt", subtitle: "從直覺提問開始，經過討論，再比較模型回應。",
    intro: "延續搬家分類時遇到的問題，先保留初始提示和回答，再補足對象、語氣、回答格式與不能猜測的內容，最後用相同提示比較模型輸出。",
    tags: ["Prompt", "需求釐清", "模型比較", "Claude"], status: "已完成",
    objectives: ["分析初始提示的優點和不足", "透過提問補上使用者真正的需求", "比較模型回答並說明自己的選擇理由"],
    concepts: [
      { title: "先說明自己的使用情境", body: "提示詞從搬家整理垃圾時遇到的分類困難出發，讓模型知道這個工具要協助誰、在什麼時候使用。" },
      { title: "把回答限制寫進提示", body: "要求模型提供可能分類方向，資料不足時先追問；涉及所在地的清運規定時要提醒查核，不可把推測說成官方規定。" },
      { title: "用相同提示做公平比較", body: "將相同的最終提示交給不同模型，再依內容是否符合需求、資訊是否清楚和語氣是否合適來比較。" },
    ],
    workflow: ["寫下最初的直覺提示", "檢視第一版回答的優點和問題", "回答 AI 的需求釐清問題", "補充只有自己知道的搬家情境", "整理並親自修改最終提示", "比較模型回應並記錄偏好"],
    example: { situation: "使用者在搬家整理物品時，不確定垃圾分類方式。", inputLabel: "提示設計重點", input: "交代新北市居民、搬家情境、物品名稱或描述、回答欄位，以及資訊不足時不可猜測的限制。", outputLabel: "模型比較觀察", output: "已知比較中，我較喜歡 Claude Sonnet 5.5 的回答方式；其中 GPT-6 Luna 的版本也把照片辨識說成預計功能，而非已完成能力。" },
    reflection: "好的提示不是只加很多規則，而是把真正影響結果的需求和界線寫清楚。模型提供的地方規定仍要回到官方資訊核對。",
  },
  {
    id: "waste-sorting-web", number: "05", date: "10/06", category: "VIBE CODING",
    title: "搬家分類所：新北垃圾分類指南", subtitle: "把生活需求整理成可搜尋、可操作的互動網頁。",
    intro: "用 Vibe Coding 把搬家時的垃圾分類需求做成網頁，讓新北市居民搜尋物品、查看處理方式，也能整理待處理項目。",
    tags: ["Vibe Coding", "HTML", "新北市", "垃圾分類", "GitHub Pages"], status: "已完成",
    objectives: ["把使用情境整理成明確規格", "以單一 index.html 完成互動網頁", "公開網站並說明功能與畫面"],
    concepts: [
      { title: "先寫規格再實作", body: "先定義目標使用者、需要解決的問題和主要功能，再請 AI 協助實作，讓畫面和功能有明確依據。" },
      { title: "把常用功能放在同一個流程", body: "網站整理物品搜尋、分類指南、分類資料庫、收藏與最近查詢，並提供大型家具預約清運的入口。" },
      { title: "介面要配合實際使用情境", body: "固定導覽和手機版選單讓使用者能快速切換區域；搜尋和資料庫則讓分類資訊更容易找到。" },
    ],
    workflow: ["描述搬家時遇到的分類問題", "整理網站規格與使用者流程", "用 Vibe Coding 製作單一 HTML 網頁", "調整導覽、搜尋與手機版版面", "上傳 GitHub 並透過 Pages 公開"],
    example: { situation: "正在整理搬家物品，想查紙箱或大型家具該如何處理。", inputLabel: "使用者操作", input: "輸入或選擇物品名稱，也可以查看分類小指南與資料庫。", outputLabel: "網頁回應", output: "顯示物品的分類方向與處理提醒；大型家具則提供前往新北市官方預約清運的入口。" },
    reflection: "功能越多越需要整理導覽和資訊層級。我也發現畫面上的 Markdown 樣式與實際顯示效果要在網頁中反覆確認。",
  },
  {
    id: "ai-chatbot", number: "06", date: "10/13", category: "AI SUITE",
    title: "AI 對話機器人：論文拆解搭檔", subtitle: "把 PDF 閱讀、檢索和對話串成一個學習工具。",
    intro: "使用 AISuite、Groq 與 Gradio，設計繁體中文論文閱讀助手，協助使用者上傳 PDF、找出相關內容，再依據文件回答問題。",
    tags: ["AISuite", "Groq", "Gradio", "PDF", "OCR", "語意檢索"], status: "已完成",
    objectives: ["設定適合論文初學者的角色與回答方式", "理解 PDF 文字擷取與 OCR 的用途", "使用語意檢索找出相關段落", "觀察模型、長度限制與介面狀態"],
    concepts: [
      { title: "把角色設定成閱讀搭檔", body: "以繁體中文一次處理一個最想理解的問題，拆成較容易跟上的步驟，並標示例子或文件依據。" },
      { title: "文字擷取和 OCR 分工", body: "可選取文字的 PDF 直接擷取；掃描頁則先轉成圖片再用 OCR。辨識內容可能出錯，送入檢索前需要檢查。" },
      { title: "依問題找文件片段", body: "把文件切成帶有頁碼的文字片段，再以語意相似度找出相關內容，協助模型根據文件回答。" },
    ],
    workflow: ["上傳 PDF 並擷取頁面文字", "對掃描頁執行 OCR", "將文字分段並保留頁碼", "依問題檢索相關片段", "呼叫模型並在 Gradio 顯示回答"],
    example: { situation: "上傳一篇研究論文，詢問參與者的背景或研究方法。", inputLabel: "提問", input: "請根據論文說明研究參與者的資訊，並指出文件中找不到的項目。", outputLabel: "檢索與回答", output: "系統找出較相關的頁面片段，再以繁體中文整理；使用者可以回到頁碼和原文核對。" },
    result: "一次保存的測試輸出顯示，Groq 請求超過當時 token 限制，Gradio 臨時展示連結也已停止。這是該次執行紀錄，不代表所有設定下都會發生相同結果。",
    reflection: "PDF 能讀取不等於回答就正確。檢索片段、頁碼和錯誤狀態都要保留，才容易找到問題出在哪個步驟。",
  },
  {
    id: "rag", number: "07", date: "10/20", category: "RAG",
    title: "Android 架構 RAG 問答", subtitle: "先建立文件向量庫，再讓回答帶著來源依據。",
    intro: "以 Android 架構資料為知識來源，分別完成建立向量資料庫的 RAG01，以及載入資料、檢索並回答問題的 RAG02。",
    tags: ["RAG01", "RAG02", "EmbeddingGemma", "FAISS", "Android", "Gradio"], status: "已完成",
    objectives: ["將 TXT 知識資料轉成向量並保存", "載入索引與文件對照資料", "依問題檢索 Android 相關內容", "在回答中保留來源標記"],
    concepts: [
      { title: "RAG01 建立可重用的知識庫", body: "整理五份 Android 架構 TXT 文件，使用 EmbeddingGemma 2 產生向量，再以 FAISS 儲存索引與文件對照資訊。" },
      { title: "RAG02 載入向量庫並檢索", body: "載入 index.faiss、documents.json、index_doc_ids.json 與 config.json，依問題找出相關文件片段。" },
      { title: "用來源標記方便查核", body: "要求模型根據檢索內容回答，並使用 [doc_xxx] 標示來源；如果文件沒有足夠依據，應說明資料不足。" },
    ],
    workflow: ["整理五份 Android 架構 TXT", "建立向量與 FAISS 索引", "將索引和文件資訊打包", "在 RAG02 載入並檢索問題", "用 Gradio 查看回答與檢索來源"],
    example: { situation: "初學者想了解 Android HAL 的用途。", inputLabel: "問題", input: "Android 的 HAL 是什麼？", outputLabel: "系統處理", output: "檢索 Android 架構文件中的 HAL 相關內容，產生附有文件 ID 的回答；Gradio 也提供檢索來源供查看。" },
    reflection: "索引、文件和 ID 對照必須一起保存，否則即使找到了向量，也不容易知道它對應哪份原始資料。",
  },
  {
    id: "planning-agent", number: "08", date: "10/27", category: "AGENT",
    title: "Planning Agent：參賽簡章規劃小幫手", subtitle: "先列分析計畫，再依計畫整理簡章內容。",
    intro: "以 Planning 方法處理參賽資料：Planner 先安排分析項目，Writer 再依照計畫整理規定、準備事項、構想方向與待確認資訊。",
    tags: ["Planning", "Agent", "PDF", "OCR", "Gradio", "Groq"], status: "已完成",
    objectives: ["區分分析計畫與最終整理結果", "讓使用者能先檢查或修改計畫", "處理簡章文字與 PDF 擷取", "保留未提供資訊並避免自行編造"],
    concepts: [
      { title: "Planner 安排要做的事", body: "第一階段只產生分析計畫，依簡章內容安排要整理的項目，不直接代替第二階段完成結果。" },
      { title: "Writer 依資料和計畫整理", body: "第二階段同時收到原始參賽資料和分析計畫；如果計畫和原始資料不一致，以原始資料為準。" },
      { title: "使用者可以檢查中間步驟", body: "Gradio 顯示可編輯的分析計畫。使用者能先修正方向，再要求系統依修改後的計畫重整結果。" },
    ],
    workflow: ["貼上簡章文字或上傳 PDF", "擷取文字，必要時執行 OCR", "檢查輸入是否空白或過長", "Planner 產生分析計畫", "Writer 依原始資料和計畫整理", "檢查結果並視需要修改計畫"],
    example: { situation: "測試資料是一份虛構的校園創新提案競賽簡章，截止日期刻意標為未提供。", inputLabel: "參賽資料", input: "提供比賽主題、參賽對象、繳交資料、評分方向與初步構想。", outputLabel: "兩階段結果", output: "先產生分析計畫，再整理比賽重點、準備事項、三個構想方向與待確認資訊；缺少的日期應保留為未提供。" },
    reflection: "Planning 讓中間工作安排能被閱讀和修改，但不保證答案正確；仍要回到原始簡章逐項查核。",
  },
  {
    id: "final-project-idea", number: "09", date: "10/27", category: "FINAL PROJECT",
    title: "期末專案發想：參賽簡章規劃小幫手", subtitle: "把單次簡章分析延伸成可整理多場比賽的工作空間。",
    intro: "延續參賽簡章 Agent，規劃一個競賽資料管理網站，協助使用者整理簡章、比較方案，並追蹤每場比賽的準備進度。",
    tags: ["期末專案", "參賽簡章", "資料夾", "任務清單", "React"], status: "已完成",
    objectives: ["描述網站解決的使用問題", "規劃競賽資料夾和多主題對話", "整理檔案、截止日期與提醒需求", "說明預計使用的技術"],
    concepts: [
      { title: "以競賽資料夾作為整理單位", body: "每場比賽可以建立自己的資料夾，集中放簡章、對話和準備資料，避免不同競賽內容混在一起。" },
      { title: "讓截止日可以逐步補齊", body: "資料夾建立時截止日可以先留空，之後使用者從簡章確認日期，再手動填入並依日期排序。" },
      { title: "把 AI 整理接到準備流程", body: "預計提供簡章重點整理、資料檢查、方案比較、缺漏提醒和提交前清單等功能。" },
    ],
    workflow: ["建立競賽資料夾", "上傳該場比賽的相關檔案", "在資料夾內開啟不同主題對話", "整理簡章重點並確認截止日期", "建立任務清單並追蹤準備情況"],
    example: { situation: "同時準備多場競賽，想知道每場的簡章、討論和待辦事項。", inputLabel: "使用者提供", input: "競賽簡章、初步構想，以及已確認的報名或繳交資訊。", outputLabel: "預期整理", output: "每場比賽分開保存，呈現規定重點、待確認資料、方案比較和提交前清單。" },
    reflection: "期末構想從一個聊天機器人擴展到多場競賽的整理流程；需要逐步確認功能範圍，才能判斷哪些適合先實作。",
  },
  {
    id: "course-notes-site", number: "10", date: "11/03", category: "PROJECT RULES",
    title: "用 AGENTS.md 建立可延伸的課程筆記站", subtitle: "先訂下專案規則，再依照規則持續新增每週內容。",
    intro: "這次作業的重點是建立一份 AI 能遵守的專案協作規則，並完成可瀏覽的網站。我的專案主題是整理生成式 AI 課程每週的練習和筆記。",
    tags: ["AGENTS.md", "React", "TypeScript", "Vite", "課程筆記站"], status: "本站實作中",
    objectives: ["說明專案目的和網站內容範圍", "訂定筆記資料格式與檔案規則", "讓 AI 能按同一方式新增課程內容", "完成可瀏覽的網站成果"],
    concepts: [
      { title: "把專案規則寫在 AGENTS.md", body: "說明網站目的、主要檔案、內容格式、視覺方向和修改時要遵守的限制，讓新的 AI 對話也能理解如何接續。" },
      { title: "資料和呈現分開", body: "每週筆記集中放在課程資料檔，頁面元件負責依共用格式呈現，避免新增單元時複製一套不同版面。" },
      { title: "每次新增都能延續同一流程", body: "新內容依日期和主題整理，補上學習重點、實作流程、具體例子與個人反思，並標示尚未核對的資料。" },
    ],
    workflow: ["確認課程筆記站的主題與讀者", "整理已完成的每週專案", "在 AGENTS.md 訂定共同欄位與編輯規則", "依照共用資料格式新增筆記", "檢視本機網站後再決定是否部署"],
    example: { situation: "之後要新增一週的 RAG 或 Agent 練習。", inputLabel: "新增資料", input: "提供課堂日期、作業主題、實際使用的資料、操作步驟和執行結果。", outputLabel: "延續方式", output: "AI 讀取 AGENTS.md 後，依既有欄位新增一筆課程資料，沿用頁面版型並保留資料查核提醒。" },
    reflection: "規則文件的價值在於讓後續新增內容有一致做法；網站還需要和每週真實練習對照，才能避免只有好看的空架構。",
  },
  {
    id: "llm-wiki-slides", number: "11", date: "11/10", category: "LLM WIKI",
    title: "LLM Wiki 與教學 HTML 簡報", subtitle: "把 Wiki 當作知識來源，設計取得、整理、檢查到輸出的流程。",
    intro: "本週作業要求選擇主題並建立至少含五篇資料的 LLM Wiki，再用 Wiki 內容製作教學型 HTML 簡報，也要說明 loop／graph 和實際檢查結果。",
    tags: ["LLM Wiki", "HTML 簡報", "Workflow", "Graph", "待補成果"], status: "待補成果",
    objectives: ["建立主題 Wiki 並整理來源資料", "讓簡報內容能對應 Wiki 資料", "說明流程中重複、檢查與重生的節點", "記錄一次實際執行和反思"],
    concepts: [
      { title: "先建立可查詢的知識來源", body: "選定主題並匯入至少五篇資料，整理 Wiki 的內容，再讓後續生成以 Wiki 為依據。" },
      { title: "讓簡報內容回到 Wiki 核對", body: "教學 HTML 簡報要讓不熟悉主題的人理解基本概念；製作時要能說明各頁內容如何對應知識來源。" },
      { title: "流程要包含檢查與反思", body: "除了列出取得資料、查詢、整理和生成的順序，也要指出哪個節點容易出錯，以及如何提前檢查或重新生成。" },
    ],
    workflow: ["選擇 Wiki 主題並討論內容範圍", "匯入至少五篇資料", "從 Wiki 取得並整理教學重點", "檢查簡報內容是否有來源依據", "產生可瀏覽的 HTML 簡報", "記錄實際執行問題並調整流程"],
    example: { situation: "以一個初學者不熟悉的主題，製作入門教學簡報。", inputLabel: "知識來源", input: "自選主題的 LLM Wiki，至少匯入五篇資料。", outputLabel: "預期成果", output: "一份可瀏覽、內容可回到 Wiki 核對的教學 HTML 簡報，以及 loop／graph 流程說明和實際檢查紀錄。" },
    reflection: "目前已核對作業要求，網站資料中尚未找到這週的 Wiki 與 HTML 簡報實際成果；完成後再補上操作過程和反思。",
  },
];
