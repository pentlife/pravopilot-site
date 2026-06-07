import Link from "next/link";
import { legalDisclaimer, site } from "@/lib/site";

type AudiencePageProps = {
  eyebrow: string;
  title: string;
  lead: string;
  primaryCta: string;
  bullets: string[];
  situations: string[];
  result: string[];
  questions: string[];
  note: string;
};

export function AudiencePage({ eyebrow, title, lead, primaryCta, bullets, situations, result, questions, note }: AudiencePageProps) {
  return (
    <main>
      <section className="audience-hero">
        <div className="wrap audience-hero-grid">
          <div>
            <div className="eyebrow">{eyebrow}</div>
            <h1>{title}</h1>
            <p className="lead">{lead}</p>
            <div className="hero-bullets">{bullets.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="cta">
              <a className="btn primary" href={site.botUrl}>{primaryCta} <span className="arrow">→</span></a>
              <Link className="btn ghost" href="/example">Посмотреть пример резюме</Link>
            </div>
            <div className="disclaimer">{legalDisclaimer}</div>
          </div>
          <aside className="audience-panel" aria-label="Что получится на выходе">
            <span>На выходе</span>
            <h2>Материал, который удобно передать специалисту</h2>
            <ul>{result.map((item) => <li key={item}>{item}</li>)}</ul>
          </aside>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-title">
            <div><div className="kicker">Сценарии</div><h2>Когда это особенно полезно</h2></div>
            <p>Сервис подходит для подготовки вводных, а не для самостоятельного окончательного решения спора.</p>
          </div>
          <div className="pain-grid three-cards">
            {situations.map((item, index) => (
              <article className="pain" key={item}>
                <div className="num">0{index + 1}</div>
                <h3>{item}</h3>
                <p>Бот поможет собрать факты, даты, суммы, документы и вопросы для проверки специалистом.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process">
        <div className="wrap">
          <div className="section-title">
            <div><div className="kicker">Подготовка</div><h2>Какие вопросы стоит сформулировать заранее</h2></div>
            <p>Хороший список вопросов экономит время консультации и помогает быстрее перейти к сути.</p>
          </div>
          <div className="result-grid">
            <div className="result-card light-card"><h3>Вопросы специалисту</h3>{questions.map((item) => <div className="check" key={item}>{item}</div>)}</div>
            <div className="summary"><h3>Безопасная граница</h3><p>{note}</p><p className="muted">Сервис не подаёт документы без вашего действия, не заменяет специалиста и не гарантирует исход.</p></div>
          </div>
        </div>
      </section>

      <section className="final">
        <div className="wrap">
          <div><h2>Начните с короткого описания ситуации</h2><p>Юридические термины не нужны: достаточно изложить факты обычным языком.</p></div>
          <a className="btn light" href={site.botUrl}>Открыть бота <span className="arrow">→</span></a>
        </div>
      </section>
    </main>
  );
}
