import { useMemo, useState } from "react";
import { lessons } from "./content/lessons";
import type { Lesson } from "./content/lessons";
import "./App.css";

const categories = ["全部單元", ...new Set(lessons.map((lesson) => lesson.category))];

function LessonView({ lesson }: { lesson: Lesson }) {
  return (
    <article className="lesson-view">
      <div className="lesson-topline"><span>{lesson.category}</span><span>第 {lesson.number} 單元　·　{lesson.date}　·　<span className={`lesson-status status-${lesson.status === "已完成" ? "done" : lesson.status === "本站實作中" ? "current" : "pending"}`}>{lesson.status}</span></span></div>
      <h1>{lesson.title}</h1>
      <p className="lesson-subtitle">{lesson.subtitle}</p>
      <p className="lesson-intro">{lesson.intro}</p>
      <div className="tag-list">{lesson.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <section className="lesson-block objective-block">
        <div className="block-heading"><span>01</span><div><p>LEARNING GOALS</p><h2>這個單元要帶走什麼</h2></div></div>
        <ul className="objective-list">{lesson.objectives.map((objective) => <li key={objective}>{objective}</li>)}</ul>
      </section>
      <section className="lesson-block">
        <div className="block-heading"><span>02</span><div><p>CORE IDEAS</p><h2>核心概念</h2></div></div>
        <div className="concept-list">{lesson.concepts.map((concept, index) => <div className="concept-card" key={concept.title}><span className="concept-number">0{index + 1}</span><div><h3>{concept.title}</h3><p>{concept.body}</p></div></div>)}</div>
      </section>
      <section className="lesson-block">
        <div className="block-heading"><span>03</span><div><p>REUSABLE WORKFLOW</p><h2>實作流程</h2></div></div>
        <ol className="workflow-list">{lesson.workflow.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}</ol>
      </section>
      <section className="lesson-block example-block">
        <div className="block-heading"><span>04</span><div><p>FROM IDEA TO OUTPUT</p><h2>例子拆解</h2></div></div>
        <div className="example-context"><span>使用情境</span><p>{lesson.example.situation}</p></div>
        <div className="example-columns"><div><span>{lesson.example.inputLabel}</span><p>{lesson.example.input}</p></div><div><span>{lesson.example.outputLabel}</span><p>{lesson.example.output}</p></div></div>
      </section>
      {lesson.result && <aside className="result-note"><span>RESULT NOTE</span><p>{lesson.result}</p></aside>}
      <section className="reflection-card"><span>✳</span><div><p>MY TAKEAWAY</p><h2>學習提醒</h2><p>{lesson.reflection}</p></div></section>
    </article>
  );
}

function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("全部單元");
  const [activeId, setActiveId] = useState(lessons[0].id);
  const filteredLessons = useMemo(() => lessons.filter((lesson) => {
    const matchesCategory = category === "全部單元" || lesson.category === category;
    const searchable = [lesson.title, lesson.subtitle, lesson.intro, lesson.category, lesson.date, lesson.status, lesson.reflection, lesson.result ?? "", ...lesson.tags, ...lesson.objectives, ...lesson.concepts.flatMap(({ title, body }) => [title, body]), ...lesson.workflow, lesson.example.situation, lesson.example.input, lesson.example.output].join(" ").toLowerCase();
    return matchesCategory && searchable.includes(query.toLowerCase().trim());
  }), [category, query]);
  const activeLesson = filteredLessons.find((lesson) => lesson.id === activeId) ?? filteredLessons[0] ?? lessons[0];

  function changeCategory(nextCategory: string) {
    setCategory(nextCategory);
    const nextLesson = lessons.find((lesson) => nextCategory === "全部單元" || lesson.category === nextCategory);
    if (nextLesson) setActiveId(nextLesson.id);
  }

  function changeQuery(nextQuery: string) {
    setQuery(nextQuery);
    const firstMatch = lessons.find((lesson) => {
      const text = [lesson.title, lesson.subtitle, lesson.intro, lesson.category, lesson.date, lesson.status, lesson.reflection, lesson.result ?? "", ...lesson.tags, ...lesson.objectives, ...lesson.concepts.flatMap(({ title, body }) => [title, body]), ...lesson.workflow, lesson.example.situation, lesson.example.input, lesson.example.output].join(" ").toLowerCase();
      return text.includes(nextQuery.toLowerCase().trim()) && (category === "全部單元" || lesson.category === category);
    });
    if (firstMatch) setActiveId(firstMatch.id);
  }

  return (
    <div className="site-shell" id="top">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="AI 課程筆記站首頁"><span className="brand-mark">AI</span><span>Demi 的課程筆記站<small>LEARN · BUILD · REFLECT</small></span></a>
        <nav aria-label="主要導覽"><a href="#course-map">課程單元</a><a href="#current-lesson">學習筆記</a><a href="#about">關於本站</a></nav>
        <a className="top-action" href="#course-map">開始閱讀 <span>↗</span></a>
      </header>
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span /> GENERATIVE AI CLASS NOTES</p>
            <h1>把每次練習，<br /><em>整理成下一次的起點。</em></h1>
            <p className="hero-intro">這裡依每週日期收錄我在生成式 AI 課程中的練習與筆記，從 Python 和 DNN，到 Prompt、互動網頁、RAG 與 Agent。每個單元用相同架構整理，方便複習，也方便繼續新增。</p>
            <a className="primary-button" href="#course-map">瀏覽課程單元 <span>↓</span></a>
            <div className="hero-note"><span className="note-icon">✎</span><span><b>每個概念都連回練習情境</b><small>不只記名詞，也整理怎麼做、怎麼檢查。</small></span></div>
          </div>
          <div className="hero-art" aria-label="AI 學習筆記插畫">
            <div className="sun" /><div className="note-card back-card"><i /><i /><i /></div>
            <div className="note-card front-card"><span className="mini-label">FIELD NOTES / 2026</span><b>從問題開始，<br />一步步做出來。</b><div className="scribble-line"><span /></div><small>LEARN → TRY → REFLECT</small></div>
            <span className="spark spark-one">✳</span><span className="spark spark-two">✦</span><div className="art-caption">IDEAS BECOME PRACTICE <span>✷</span></div>
          </div>
        </section>
        <section className="course-summary" id="course-map" aria-label="課程單元導覽">
          <div className="summary-heading"><div><p className="eyebrow">COURSE MAP</p><h2>沿著每週專案，一路往下學</h2><p>選一個日期，看看我如何把課堂概念用在練習裡。</p></div><span className="unit-count">{String(lessons.length).padStart(2, "0")} ENTRIES</span></div>
          <div className="summary-track">{lessons.map((lesson) => <button className={`track-unit ${activeId === lesson.id ? "active" : ""}`} key={lesson.id} onClick={() => setActiveId(lesson.id)}><span>{lesson.number}</span><b>{lesson.category}</b><small>{lesson.title}</small></button>)}</div>
        </section>
        <section className="learning-layout" id="current-lesson">
          <aside className="lesson-sidebar">
          <div className="sidebar-heading"><p className="eyebrow">WEEKLY PROJECTS</p><h2>每週專案</h2></div>
            <label className="search-box"><span>⌕</span><input value={query} onChange={(event) => changeQuery(event.target.value)} placeholder="搜尋單元或概念" aria-label="搜尋課程單元" /></label>
            <div className="category-filter" aria-label="依類別篩選">{categories.map((item) => <button className={category === item ? "selected" : ""} key={item} onClick={() => changeCategory(item)}>{item}</button>)}</div>
            <div className="lesson-list">{filteredLessons.map((lesson) => <button className={`lesson-link ${activeId === lesson.id ? "selected" : ""}`} key={lesson.id} onClick={() => setActiveId(lesson.id)}><span className="lesson-index">{lesson.number}</span><span className="lesson-link-copy"><small>{lesson.category}　·　{lesson.date}</small><b>{lesson.title}</b><span>{lesson.subtitle}</span></span><span className="lesson-arrow">↗</span></button>)}{filteredLessons.length === 0 && <p className="empty-state">沒有找到符合的筆記，試試其他關鍵字。</p>}</div>
            <div className="sidebar-foot">目前收錄 <b>{filteredLessons.length}</b> 個單元</div>
          </aside>
          <div className="lesson-content">{filteredLessons.length > 0 ? <LessonView lesson={activeLesson} /> : <p className="lesson-empty">目前沒有符合的課程筆記。可以清除搜尋文字，或切換到「全部單元」。</p>}</div>
        </section>
        <section className="about-section" id="about"><div><p className="eyebrow">ABOUT THIS NOTEBOOK</p><h2>一套能繼續長大的筆記方式。</h2><p>每週內容集中放在 <code>src/content/lessons.ts</code>，網站依照共用格式呈現。專案根目錄的 <code>AGENTS.md</code> 說明如何新增單元、安排檔案和查核內容，讓 AI 能沿用相同的閱讀順序與版面。</p><div className="rule-points"><span>01　新增一週先核對日期與實際成果</span><span>02　依固定欄位整理目標、流程、例子與反思</span><span>03　資料不完整時明確標示待補，不補造事實</span></div></div><a href="#course-map">回到課程地圖 ↑</a></section>
      </main>
      <footer><a className="brand" href="#top"><span className="brand-mark">AI</span><span>Demi 的課程筆記站<small>LEARN · BUILD · REFLECT</small></span></a><p>把學到的東西整理好，下一次就能接著做。</p><span>© 2026 DEMI'S COURSE NOTES</span></footer>
    </div>
  );
}

export default App;
