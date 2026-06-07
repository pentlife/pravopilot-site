import Link from "next/link";
import { legalDisclaimer, site } from "@/lib/site";
import type { Scenario } from "@/lib/scenarios";

export function ScenarioPage({ scenario }: { scenario: Scenario }) {
  return (
    <main>
      <section className="audience-hero">
        <div className="wrap audience-hero-grid">
          <div>
            <div className="eyebrow">сценарий подготовки</div>
            <h1>{scenario.title}</h1>
            <p className="lead">{scenario.description}</p>
            <div className="hero-bullets">{scenario.situations.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="cta">
              <a className="btn primary" href={site.botUrl}>Разобрать ситуацию <span className="arrow">→</span></a>
              <Link className="btn ghost" href="/scenarios">Все сценарии</Link>
            </div>
            <div className="disclaimer">{legalDisclaimer}</div>
          </div>
          <aside className="audience-panel" aria-label="Что подготовить">
            <span>Что подготовить</span>
            <h2>Вводные для быстрого старта</h2>
            <ul>{scenario.input.map((item) => <li key={item}>{item}</li>)}</ul>
          </aside>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-title">
            <div><div className="kicker">Результат</div><h2>Что получится на выходе</h2></div>
            <p>Не готовое правовое решение, а аккуратно собранные материалы, которые проще показать юристу или адвокату.</p>
          </div>
          <div className="result-grid">
            <div className="result-card light-card"><h3>Пакет материалов</h3>{scenario.output.map((item) => <div className="check" key={item}>{item}</div>)}</div>
            <div className="summary"><h3>Граница применения</h3><p>{scenario.caution}</p><p className="muted">Если ситуация срочная, связана с судом, сроками или крупной суммой, не откладывайте обращение к специалисту.</p></div>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="wrap">
          <div className="section-title">
            <div><div className="kicker">Консультация</div><h2>Вопросы, которые стоит задать специалисту</h2></div>
            <p>Эти вопросы помогают прийти на консультацию подготовленным и не забыть важные детали.</p>
          </div>
          <div className="pain-grid three-cards">
            {scenario.specialistQuestions.map((item, index) => <article className="pain" key={item}><div className="num">0{index + 1}</div><h3>{item}</h3><p>Ответ зависит от документов и фактов конкретной ситуации.</p></article>)}
          </div>
        </div>
      </section>

      <section className="final">
        <div className="wrap">
          <div><h2>Соберите факты до консультации</h2><p>Опишите ситуацию обычным языком — бот поможет разложить её по фактам, документам и вопросам.</p></div>
          <a className="btn light" href={site.botUrl}>Открыть бота <span className="arrow">→</span></a>
        </div>
      </section>
    </main>
  );
}
