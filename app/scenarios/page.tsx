import type { Metadata } from "next";
import Link from "next/link";
import { scenarios } from "@/lib/scenarios";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Сценарии подготовки к консультации",
  description: "Практичные сценарии подготовки: ЖКХ, трудовые вопросы, долги, договоры. Сервис собирает факты, документы и вопросы для специалиста.",
};

export default function ScenariosPage() {
  return (
    <main>
      <section className="audience-hero">
        <div className="wrap audience-hero-grid">
          <div>
            <div className="eyebrow">практичные сценарии</div>
            <h1>Выберите ситуацию и соберите материалы для специалиста</h1>
            <p className="lead">Сценарные страницы помогают понять, какие факты, документы и вопросы подготовить перед консультацией. Это не юридическое заключение, а удобная подготовка.</p>
            <div className="cta"><a className="btn primary" href={site.botUrl}>Начать в боте <span className="arrow">→</span></a><Link className="btn ghost" href="/example">Посмотреть пример</Link></div>
          </div>
          <aside className="audience-panel"><span>На выходе</span><h2>Резюме ситуации по выбранной теме</h2><ul><li>факты и даты</li><li>документы и доказательства</li><li>зоны внимания</li><li>вопросы юристу</li></ul></aside>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="section-title"><div><div className="kicker">Темы</div><h2>Популярные жизненные и деловые ситуации</h2></div><p>Начинаем с массовых сценариев, где важны документы, сроки и понятная структура фактов.</p></div>
          <div className="audiences">
            {scenarios.map((scenario) => <article className="aud" key={scenario.slug}><div className="mini">{scenario.shortTitle}</div><h3>{scenario.title}</h3><p className="muted">{scenario.description}</p><Link className="text-link" href={`/scenarios/${scenario.slug}`}>Открыть сценарий →</Link></article>)}
          </div>
        </div>
      </section>
    </main>
  );
}
