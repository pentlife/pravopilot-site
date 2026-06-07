import type { Metadata } from "next";
import { legalDisclaimer, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Пример DOCX-brief для юриста",
  description:
    "Пример результата: как Telegram-бот превращает описание правовой ситуации в структурированный brief для консультации с юристом.",
};

const timeline = [
  ["12 марта", "Заключён договор на ремонт ванной, оплата 70 000 ₽."],
  ["20 марта", "Исполнитель обещал завершить работы, но перенёс срок."],
  ["28 марта", "Работы частично выполнены, появились недостатки и спор по возврату."],
  ["2 апреля", "Пользователь хочет понять, какие материалы собрать перед консультацией."],
];

const documents = [
  "договор или переписка с условиями работ",
  "чеки, переводы, квитанции об оплате",
  "фото результата и выявленных недостатков",
  "переписка о сроках, переносах и претензиях",
  "контакты исполнителя и реквизиты сторон",
];

const lawyerQuestions = [
  "Какие требования разумно заявлять: устранение недостатков, уменьшение цены или возврат?",
  "Нужна ли экспертиза качества работ до направления претензии?",
  "Какие сроки и доказательства критичны именно в этой ситуации?",
  "Как безопасно сформулировать предварительный текст претензии?",
];

export default function ExamplePage() {
  return (
    <main>
      <section className="legal-page example-page">
        <div className="wrap">
          <div className="breadcrumbs">Главная → Пример результата</div>
          <div className="section-title example-title">
            <div>
              <div className="kicker">Пример результата</div>
              <h1>Как выглядит brief, который удобно передать юристу</h1>
            </div>
            <p>
              Это демонстрационный пример: бот не решает спор и не даёт юридическое заключение. Он помогает
              собрать факты, документы и вопросы для последующей проверки специалистом.
            </p>
          </div>

          <div className="before-after example-large">
            <article>
              <span>Ввод пользователя</span>
              <p>
                «Оплатил ремонт ванной. Сроки сорвали, качество плохое, исполнитель отвечает редко.
                Есть переписка и переводы. Хочу понять, что подготовить перед разговором с юристом».
              </p>
            </article>
            <article>
              <span>Результат бота</span>
              <p>
                Короткий DOCX-brief: хронология, платежи, документы, зоны внимания и вопросы специалисту.
                Его можно скачать, дополнить и показать на консультации.
              </p>
            </article>
          </div>

          <div className="brief-preview">
            <aside className="result-card light-card">
              <h3>Что попадает в brief</h3>
              {documents.map((item) => (
                <div className="check" key={item}>{item}</div>
              ))}
            </aside>
            <article className="brief">
              <h3>Фрагмент структуры</h3>
              <div className="brief-line"><b>Ситуация</b><span>Спор с исполнителем по срокам и качеству ремонта.</span></div>
              <div className="brief-line"><b>Цель</b><span>Подготовить материалы для консультации и предварительного текста претензии.</span></div>
              <div className="brief-line"><b>Деньги</b><span>Оплата 70 000 ₽, способ подтверждения — банковские переводы.</span></div>
              <div className="brief-line"><b>Зоны внимания</b><span>Сроки, доказательства недостатков, условия договора, порядок фиксации претензий.</span></div>
              <div className="brief-line"><b>Оговорка</b><span>{legalDisclaimer}</span></div>
            </article>
          </div>

          <div className="example-columns">
            <section>
              <h2>Хронология</h2>
              {timeline.map(([date, text]) => (
                <div className="brief-line" key={date}><b>{date}</b><span>{text}</span></div>
              ))}
            </section>
            <section>
              <h2>Вопросы юристу</h2>
              <ul>
                {lawyerQuestions.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
          </div>

          <div className="final example-final">
            <div className="wrap inner-final">
              <div>
                <h2>Хотите собрать такой brief по своей ситуации?</h2>
                <p>Откройте Telegram-бота, опишите проблему обычными словами и проверьте результат со специалистом.</p>
              </div>
              <a className="btn light" href={site.botUrl}>Собрать brief в Telegram <span className="arrow">→</span></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
