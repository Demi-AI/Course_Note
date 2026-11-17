import { useMemo, useState } from "react";
import { lessons } from "./content/lessons";
import type { Lesson } from "./content/lessons";
import "./App.css";

const categories = ["е…ЁйѓЁе–®е…ѓ", ...new Set(lessons.map((lesson) => lesson.category))];

function LessonView({ lesson }: { lesson: Lesson }) {
  return (
    <article className="lesson-view">
      <div className="lesson-topline"><span>{lesson.category}</span><span>з¬¬ {lesson.number} е–®е…ѓгЂЂВ·гЂЂ{lesson.date}гЂЂВ·гЂЂ<span className={`lesson-status status-${lesson.status === "е·Іе®Њж€ђ" ? "done" : lesson.status === "жњ¬з«™еЇ¦дЅњдё­" ? "current" : "pending"}`}>{lesson.status}</span></span></div>
      <h1>{lesson.title}</h1>
      <p className="lesson-subtitle">{lesson.subtitle}</p>
      <p className="lesson-intro">{lesson.intro}</p>
      <div className="tag-list">{lesson.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <section className="lesson-block objective-block">
        <div className="block-heading"><span>01</span><div><p>LEARNING GOALS</p><h2>йЂ™еЂ‹е–®е…ѓи¦Ѓеё¶иµ°д»Ђйєј</h2></div></div>
        <ul className="objective-list">{lesson.objectives.map((objective) => <li key={objective}>{objective}</li>)}</ul>
      </section>
      <section className="lesson-block">
        <div className="block-heading"><span>02</span><div><p>CORE IDEAS</p><h2>ж ёеїѓж¦‚еїµ</h2></div></div>
        <div className="concept-list">{lesson.concepts.map((concept, index) => <div className="concept-card" key={concept.title}><span className="concept-number">0{index + 1}</span><div><h3>{concept.title}</h3><p>{concept.body}</p></div></div>)}</div>
      </section>
      <section className="lesson-block">
        <div className="block-heading"><span>03</span><div><p>REUSABLE WORKFLOW</p><h2>еЇ¦дЅњжµЃзЁ‹</h2></div></div>
        <ol className="workflow-list">{lesson.workflow.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}</ol>
      </section>
      <section className="lesson-block example-block">
        <div className="block-heading"><span>04</span><div><p>FROM IDEA TO OUTPUT</p><h2>дѕ‹е­ђж‹†и§Ј</h2></div></div>
        <div className="example-context"><span>дЅїз”Ёжѓ…еўѓ</span><p>{lesson.example.situation}</p></div>
        <div className="example-columns"><div><span>{lesson.example.inputLabel}</span><p>{lesson.example.input}</p></div><div><span>{lesson.example.outputLabel}</span><p>{lesson.example.output}</p></div></div>
      </section>
      {lesson.result && <aside className="result-note"><span>RESULT NOTE</span><p>{lesson.result}</p></aside>}
      <section className="reflection-card"><span>вњі</span><div><p>MY TAKEAWAY</p><h2>е­ёзї’жЏђй†’</h2><p>{lesson.reflection}</p></div></section>
    </article>
  );
}

function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("е…ЁйѓЁе–®е…ѓ");
  const [activeId, setActiveId] = useState(lessons[0].id);
  const filteredLessons = useMemo(() => lessons.fiЦЪ$z{-®йЬjЧќ\Љ
\ЬЫЫЉHO€В€ЫЫњЭX]Ъ\РШ]YЫЬћHHШ]YЫЬћHOOH№aj:`к9e«№a`И€\ЬЫЫ‹Ш]YЫЬћHOOHШ]YЫЬћNВ€ЫЫњЭЩX\ЪX›HHЫ\ЬЫЫ‹ќ]K\ЬЫЫ‹њЭXќ]K\ЬЫЫ‹љ[ќ›Л\ЬЫЫ‹Ш]YЫЬћK\ЬЫЫ‹™]K\ЬЫЫ‹њЭ]\Л\ЬЫЫ‹њ™Y›XЭ[Ы‹\ЬЫЫ‹њ™\Э[ПИ€‹‹‹›\ЬЫЫ‹ќYЬЛ‹‹›\ЬЫЫ‹›Шљ™XЭ]™\Л‹‹›\ЬЫЫ‹ЫЫЩ\Л™›]X\

И]K›ЩHJHO€Э]K›ЩWJK‹‹›\ЬЫЫ‹ќЫЬљЩ›ЭЛ\ЬЫЫ‹™^[\KњЪ]X][Ы‹\ЬЫЫ‹™^[\Kљ[њ]\ЬЫЫ‹™^[\K›Э]]Kљ›Ъ[Љ€ЉKќУЭЩ\ђШ\ЩJ
NВ€™]\›€X]Ъ\РШ]YЫЬћH	‰€ЩX\ЪX›Kљ[ЫY\К]Y\ћKќУЭЩ\ђШ\ЩJ
Kќљ[J
JNВ€JKШШ]YЫЬћK]Y\ћWJNВ€ЫЫњЭXЭ]™S\ЬЫЫ€Hљ[\™Y\ЬЫЫњЛ™љ[™

\ЬЫЫЉHO€\ЬЫЫ‹љYOOHXЭ]™RY
HПИљ[\™Y\ЬЫЫњЦМHПИ\ЬЫЫњЦМNВ‚€ќ[Э[Ы€Ъ[™ЩPШ]YЫЬћJ™^Ш]YЫЬћN€Эљ[™КHВ€Щ]Ш]YЫЬћJ™^Ш]YЫЬћJNВ€ЫЫњЭ™^\ЬЫЫ€H\ЬЫЫњЛ™љ[™

\ЬЫЫЉHO€™^Ш]YЫЬћHOOH№aj:`к9e«№a`И€\ЬЫЫ‹Ш]YЫЬћHOOH™^Ш]YЫЬћJNВ€Y€
™^\ЬЫЫЉHЩ]XЭ]™RY
™^\ЬЫЫ‹љY
NВ€B‚€ќ[Э[Ы€Ъ[™ЩT]Y\ћJ™^]Y\ћN€Эљ[™КHВ€Щ]]Y\ћJ™^]Y\ћJNВ€ЫЫњЭљ\њЭX]ЪH\ЬЫЫњЛ™љ[™

\ЬЫЫЉHO€В€ЫЫњЭ^HЫ\ЬЫЫ‹ќ]K\ЬЫЫ‹њЭXќ]K\ЬЫЫ‹љ[ќ›Л\ЬЫЫ‹Ш]YЫЬћK\ЬЫЫ‹™]K\ЬЫЫ‹њЭ]\Л\ЬЫЫ‹њ™Y›XЭ[Ы‹\ЬЫЫ‹њ™\Э[ПИ€‹‹‹›\ЬЫЫ‹ќYЬЛ‹‹›\ЬЫЫ‹›Шљ™XЭ]™\Л‹‹›\ЬЫЫ‹ЫЫЩ\Л™›]X\

И]K›ЩHJHO€Э]K›ЩWJK‹‹›\ЬЫЫ‹ќЫЬљЩ›ЭЛ\ЬЫЫ‹™^[\KњЪ]X][Ы‹\ЬЫЫ‹™^[\Kљ[њ]\ЬЫЫ‹™^[\K›Э]]Kљ›Ъ[Љ€ЉKќУЭЩ\ђШ\ЩJ
NВ€™]\›€^љ[ЫY\К™^]Y\ћKќУЭЩ\ђШ\ЩJ
Kќљ[J
JH	‰€
Ш]YЫЬћHOOH№aj:`к9e«№a`И€\ЬЫЫ‹Ш]YЫЬћHOOHШ]YЫЬћJNВ€JNВ€Y€
љ\њЭX]Ъ
HЩ]XЭ]™RY
љ\њЭX]ЪљY
NВ€B‚€™]\›€
€]€Ы\ЬУ[YOHњЪ]K\Ъ[€YHќЬЏ‚€XY\€Ы\ЬУ[YOHќЬ\€Џ‚€HЫ\ЬУ[YOHњ[™€™YЏH€ЭЬ€\љXK[X™[HђRH:*¬№к"щлaє*&9кжziҐєh HЏЏЬ[€Ы\ЬУ[YOHњ[™[X\љИЏђROЬЬ[ЏЏЬ[Џ‘[ZH9жЎ:*¬№к"щлaє*&9кжOЫX[“PT“€0­И•RS0­И‘Q“PХЬЫX[ЏЬЬ[ЏЏШO‚€]€\љXK[X™[H№..ъ) yl#є)ЇHЏЏH™YЏH€ШЫЭ\њЩK[X\Џє*¬№к"щe«№a`ПШOЏH™YЏH€ШЭ\њ™[ќ[\ЬЫЫ€Џ№kn9пд№лaє*&ШOЏH™YЏH€ШX›Э]Џєeз9ҐЇ9§+9кжOШOЏЫ]Џ‚€HЫ\ЬУ[YOHќЬXXЭ[Ы€€™YЏH€ШЫЭ\њЩK[X\Џєeўщiвъe¬z+ Ь[ЏёЎҐПЬЬ[ЏЏШO‚€ЪXY\Џ‚€XZ[Џ‚€ЩXЭ[Ы€Ы\ЬУ[YOHљ\›ИЏ‚€]€Ы\ЬУ[YOHљ\›ЛXЫЬHЏ‚€Ы\ЬУ[YOH™^YXњ›ЭИЏЏЬ[€П€СS‘TђUU‘HRHУTФИ“ХTПЬ‚€O№ўў№«гщ«(yнн9пд»п#њ€ПЏ[O№Ґm9д!№ў$9."щ. 9«(yжЎ:-mъnзёа ЏЩ[OЏЪO‚€Ы\ЬУ[YOHљ\›ЛZ[ќ›ИЏє`&z(иy/§y«гъ`,yҐйy§'щҐ-єc!9ў$yg*9е'щў$9o#ИRH:*¬№к"щ.+yжЎ9нн9пдє"!щлaє*&;п#9o§€]Ы€9dЈ“»п#9b,›Ы\8а y.¤№bеyн¬єh xа TђQИ:"!ИYЩ[ќ8а №«гщ`"щe«№a`ще*9жо9d#9§­№©вщҐm9д!»п#9Ґ®y/Їъ)!щпд»п#9.gщҐ®y/Їщоo9оЈ9Ґ¬9h§ёа ЏЬ‚€HЫ\ЬУ[YOHњљ[X\ћKXќ]Ы€€™YЏH€ШЫЭ\њЩK[X\Џ№а#ъ)Їz*¬№к"щe«№a`ИЬ[ЏёЎ¤ПЬЬ[ЏЏШO‚€]€Ы\ЬУ[YOHљ\›Л[›ЭHЏЏЬ[€Ы\ЬУ[YOH››ЭKZXЫЫ€Џё§#ЏЬЬ[ЏЏЬ[ЏЏЏ№«гщ`"щ© №oнz`пz`(щfз№нн9пд№ бyh ПШЏЏЫX[№.#ycкє*&9d#z*g»п#9.gщҐm9д!№ #єnЇ9`fёа y #єnЇ9ЄЁ№§йxа ЏЬЫX[ЏЬЬ[ЏЏЩ]Џ‚€Щ]Џ‚€]€Ы\ЬУ[YOHљ\›ЛX\ќ€\љXK[X™[HђRH9kn9пд№лaє*&9Јд№еjИЏ‚€]€Ы\ЬУ[YOHњЭ[€€ПЏ]€Ы\ЬУ[YOH››ЭKXШ\™XЪЛXШ\™ЏЏHПЏHПЏHПЏЩ]Џ‚€]€Ы\ЬУ[YOH››ЭKXШ\™њ›ЫќXШ\™ЏЏЬ[€Ы\ЬУ[YOH›Z[љK[X™[Џ‘’QS“ХTИИЊЌЏЬЬ[ЏЏЏ№o§№ecъhc:eўщiвып#њ€П№. 9«iy«iy`f№aо№/Ўёа ЏШЏЏ]€Ы\ЬУ[YOHњШЬљX›K[[™HЏЏЬ[€ПЏЩ]ЏЏЫX[“PT“€8Ў¤€–H8Ў¤€‘Q“PХЬЫX[ЏЩ]Џ‚€Ь[€Ы\ЬУ[YOHњЬ\љИЬ\љЛ[Ы™HЏё§,ПЬЬ[ЏЏЬ[€Ы\ЬУ[YOHњЬ\љИЬ\љЛ]ЫИЏё§)ЏЬЬ[ЏЏ]€Ы\ЬУ[YOH\ќXШ\[Ы€Џ’QPTИ‘PУУQHђPХPСHЬ[Џё§-ПЬЬ[ЏЏЩ]Џ‚€Щ]Џ‚€ЬЩXЭ[ЫЏ‚€ЩXЭ[Ы€Ы\ЬУ[YOHЫЭ\њЩK\Э[[X\ћH€YHЫЭ\њЩK[X\€\љXK[X™[Hє*¬№к"щe«№a`щl#є)ЇHЏ‚€]€Ы\ЬУ[YOHњЭ[[X\ћKZXY[™ИЏЏ]ЏЏЫ\ЬУ[YOH™^YXњ›ЭИЏђУХT”СHPTЬЏЏ№¬Їъ$eщ«гъ`,yl"9Ёb;п#9. :-лщo 9."щknЪЏЏє`n9. 9`"щҐйy§'ып#9з"щз"щў$yi №/eyўўє*¬№h №© №oнyе*9g*9нн9пдє(иxа ЏЬЏЩ]ЏЏЬ[€Ы\ЬУ[YOHќ[љ]XЫЭ[ќЏћФЭљ[™К\ЬЫЫњЛ›[™Э
KњYЭ\ќ
‹ЊЉ_HS•’QTПЬЬ[ЏЏЩ]Џ‚€]€Ы\ЬУ[YOHњЭ[[X\ћK]XЪИЏћЫ\ЬЫЫњЛ›X\

\ЬЫЫЉHO€ќ]Ы€Ы\ЬУ[YO^ШXЪЛ][љ]	ШXЭ]™RYOOH\ЬЫЫ‹љYИXЭ]™H€€€џXHЩ^O^Ы\ЬЫЫ‹љYHЫђЫXЪП^К
HO€Щ]XЭ]™RY
\ЬЫЫ‹љY
_OЏЬ[ЏћЫ\ЬЫЫ‹›ќ[X™\џOЬЬ[ЏЏЏћЫ\ЬЫЫ‹Ш]YЫЬћ_OШЏЏЫX[ћЫ\ЬЫЫ‹ќ]_OЬЫX[ЏШќ]ЫЏЉ_OЩ]Џ‚€ЬЩXЭ[ЫЏ‚€ЩXЭ[Ы€Ы\ЬУ[YOH›X\›љ[™Л[^[Э]€YHЭ\њ™[ќ[\ЬЫЫ€Џ‚€\ЪYHЫ\ЬУ[YOH›\ЬЫЫ‹\ЪYX\€Џ‚€]€Ы\ЬУ[YOHњЪYX\‹ZXY[™ИЏЏЫ\ЬУ[YOH™^YXњ›ЭИЏ•СQRУH“Т‘PХПЬЏЏ№«гъ`,yl"9ЁbЪЏЏЩ]Џ‚€X™[Ы\ЬУ[YOHњЩX\ЪX›ЮЏЏЬ[ЏёЈ%OЬЬ[ЏЏ[њ][YO^Ь]Y\ћ_HЫђЪ[™ЩO^К]™[ќ
HO€Ъ[™ЩT]Y\ћJ]™[ќќ\™Щ]ќ[YJ_HXЩZЫ\ЏH№¤'9l"щe«№a`щў%№© №oнH€\љXK[X™[H№¤'9l"ъ*¬№к"щe«№a`И€ПЏЫX™[‚€]€Ы\ЬУ[YOHШ]YЫЬћKYљ[\€€\љXK[X™[H№/§zhg№b)yлкz`nЏћШШ]YЫЬљY\Л›X\

][JHO€ќ]Ы€Ы\ЬУ[YO^ШШ]YЫЬћHOOH][HИњЩ[XЭY€€€џHЩ^O^Ъ][_HЫђЫXЪП^К
HO€Ъ[™ЩPШ]YЫЬћJ][J_OћЪ][_OШќ]ЫЏЉ_OЩ]Џ‚€]€Ы\ЬУ[YOH›\ЬЫЫ‹[\ЭЏћЩљ[\™Y\ЬЫЫњЛ›X\

\ЬЫЫЉHO€ќ]Ы€Ы\ЬУ[YO^Ш\ЬЫЫ‹[[љИ	ШXЭ]™RYOOH\ЬЫЫ‹љYИњЩ[XЭY€€€џXHЩ^O^Ы\ЬЫЫ‹љYHЫђЫXЪП^К
HO€Щ]XЭ]™RY
\ЬЫЫ‹љY
_OЏЬ[€Ы\ЬУ[YOH›\ЬЫЫ‹Z[™^ЏћЫ\ЬЫЫ‹›ќ[X™\џOЬЬ[ЏЏЬ[€Ы\ЬУ[YOH›\ЬЫЫ‹[[љЛXЫЬHЏЏЫX[ћЫ\ЬЫЫ‹Ш]YЫЬћ_xа 0­ша Ы\ЬЫЫ‹™]_OЬЫX[ЏЏћЫ\ЬЫЫ‹ќ]_OШЏЏЬ[ЏћЫ\ЬЫЫ‹њЭXќ]_OЬЬ[ЏЏЬЬ[ЏЏЬ[€Ы\ЬУ[YOH›\ЬЫЫ‹X\њ›ЭИЏёЎҐПЬЬ[ЏЏШќ]ЫЏЉ_^Щљ[\™Y\ЬЫЫњЛ›[™ЭOOH	‰€Ы\ЬУ[YOH™[\K\Э]HЏ№¬¤№§"yўo№b,9л)№d"9жЎ9лaє*&;п#:*iє*i№am№.еєeз:cmykeша ЏЬџOЩ]Џ‚€]€Ы\ЬУ[YOHњЪYX\‹Y›ЫЭЏ№жл№bcyҐ-єc!ЏћЩљ[\™Y\ЬЫЫњЛ›[™ЭOШЏ€9`"щe«№a`ПЩ]Џ‚€Ш\ЪYO‚€]€Ы\ЬУ[YOH›\ЬЫЫ‹XЫЫќ[ќЏћЩљ[\™Y\ЬЫЫњЛ›[™Э€И\ЬЫЫ•љY]И\ЬЫЫЏ^ШXЭ]™S\ЬЫЫџHП€€Ы\ЬУ[YOH›\ЬЫЫ‹Y[\HЏ№жл№bcy¬¤№§"yл)№d"9жЎ:*¬№к"щлaє*&8а №cлщ.йy®!zfi9¤'9l"щҐЎщkeып#9ў%№b!щЈжщb,8а#9aj:`к9e«№a`ша#xа ЏЬџOЩ]Џ‚€ЬЩXЭ[ЫЏ‚€ЩXЭ[Ы€Ы\ЬУ[YOHX›Э]\ЩXЭ[Ы€€YHX›Э]ЏЏ]ЏЏЫ\ЬУ[YOH™^YXњ›ЭИЏђP“ХUTИ“ХP“УТПЬЏЏ№. 9ieъ пyоo9оЈ:emщi)щжЎ9лaє*&9Ґ®yo#ша ЏЪЏЏ№«гъ`,yaiщk®zfб№.+yҐ/№g*ЫЩOњЬЛШЫЫќ[ќЫ\ЬЫЫњЛќПШЫЩO»п#9н¬№кжy/§yбiщalyе*9Ё/9o#щdb9гпёа №l"9Ёb9Ё.yжлєc!9жЎЫЩOђQСS•Л›YШЫЩO€:*Є№¦#№i №/eyҐ¬9h§№e«№a`ша ykўyЈ¤№ЄҐ9Ёb9dЈ9§йyЁ.9aiщk®{п#:+¤ИRH: пy¬Їще*9жо9d#9жЎ:e¬z+ :h!№nЈъ"!щвb:ghёа ЏЬЏ]€Ы\ЬУ[YOHњќ[K\Ъ[ќИЏЏЬ[ЏЊxа 9Ґ¬9h§№. :`,yab9Ё.9l#yҐйy§'ъ"!щkйєf¦щў$9§§ЬЬ[ЏЏЬ[ЏЊёа 9/§yfо№k¦№«!9/cyҐm9д!№жл№Є&xа y­`yк"ша y/ўщkd:"!щcгy 'OЬЬ[ЏЏЬ[ЏЊша :,бщҐ¦y.#ykЈ9Ґm9¦`№¦#№и®№Є&yй.№oЎz(з;п#9.#z(з:`(9.ўщkйЏЬЬ[ЏЏЩ]ЏЏЩ]ЏЏH™YЏH€ШЫЭ\њЩK[X\Џ№fз№b,:*¬№к"щg,9g%€8Ў¤OШOЏЬЩXЭ[ЫЏ‚€ЫXZ[Џ‚€›ЫЭ\ЏЏHЫ\ЬУ[YOHњ[™€™YЏH€ЭЬЏЏЬ[€Ы\ЬУ[YOHњ[™[X\љИЏђROЬЬ[ЏЏЬ[Џ‘[ZH9жЎ:*¬№к"щлaє*&9кжOЫX[“PT“€0­И•RS0­И‘Q“PХЬЫX[ЏЬЬ[ЏЏШOЏ№ўў№kn9b,9жЎ9§lz)oщҐm9д!№io{п#9."щ. 9«(yl,z пyЈ©z$eщ`fёа ЏЬЏЬ[Џ°ЄHЊЌ€SRIФИУХT”СH“ХTПЬЬ[ЏЏЩ›ЫЭ\Џ‚€Щ]Џ‚€
NВџB‚™^ЬќY][\В