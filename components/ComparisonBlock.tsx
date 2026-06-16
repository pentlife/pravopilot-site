import { site } from "@/lib/site";

const options = [
  {
    title: "Обычный шаблон",
    tone: "neutral",
    points: [
      "не знает факты вашей ситуации",
      "не задаёт уточняющие вопросы",
      "оставляет пользователю риск пропустить важную дату, сумму или документ",
    ],
  },
  {
    title: "Обычный AI-чат",
    tone: "neutral",
    points: [
      "может звучать уверенно, даже когда вводных мало",
      "не всегда отделяет подготовку материалов от юридического вывода",
      "часто даёт длинный ответ вместо структуры для консультации",
    ],
  },
  {
    title: "Помощник адвоката",
    tone: "accent",
    points: [
      "собирает факты, даты, суммы и документы по шагам",
      "формирует структурированную сводку и вопросы специалисту",
      "сразу напоминает: результат нужно проверить у юриста или адвоката",
    ],
  },
];

const path = ["описание", "уточнения", "сводка", "проверка специалистом"];

export function ComparisonBlock() {
  return (
    <section className="comparison" id="why-not-template">
      <div className="wrap">
        <div className="section-title">
          <div>
            <div className="kicker">Почему не просто шаблон</div>
            <h2>Сервис не обещает решить спор — он помогает подготовиться без хаоса</h2>
          </div>
          <p>
            Шаблон полезен как форма, а обычный чат-бот — как источник идей. Но перед консультацией важнее другое:
            собрать факты, документы и вопросы в понятную структуру, которую специалист сможет быстро проверить.
          </p>
        </div>

        <div className="comparison-grid">
          {options.map((item) => (
            <article className={`compare-card ${item.tone === "accent" ? "accent" : ""}`} key={item.title}>
              <h3>{item.title}</h3>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="flow-card" aria-label="Путь подготовки материалов">
          {path.map((step, index) => (
            <div className="flow-step" key={step}>
              <span>{index + 1}</span>
              <b>{step}</b>
            </div>
          ))}
        </div>

        <div className="comparison-note">
          <p>
            Итоговый материал не является юридическим заключением. Его задача — сэкономить время первичного
            разбора и помочь прийти к специалисту с понятными вводными.
          </p>
          <a className="btn primary" href={site.botUrl}>Подготовить материалы в боте <span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  );
}
