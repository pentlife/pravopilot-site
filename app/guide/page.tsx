import type { Metadata } from "next";
import Link from "next/link";
import { legalDisclaimer, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Как безопасно пользоваться ботом",
  description: "Короткая инструкция для пользователей: что доступно бесплатно, какие функции требуют доступа, как описывать ситуацию без лишних персональных данных и как удалить текущие данные.",
};

const freeSteps = [
  "открыть каталог образцов документов",
  "выбрать подходящую форму по жизненной ситуации",
  "скачать текстовый файл и заполнить его своими данными",
  "показать важный документ специалисту перед отправкой или подписанием",
];

const accessSteps = [
  "AI-разбор правовой ситуации",
  "адаптация текста под описание пользователя",
  "предварительный разбор загруженного документа",
  "подписка для регулярной подготовки материалов",
];

const privacyRules = [
  "заменяйте ФИО на роли: покупатель, работник, арендатор, исполнитель, заказчик",
  "не отправляйте паспорт, СНИЛС, банковские карты, телефон и точный адрес без необходимости",
  "не загружайте реальные документы, если достаточно описания или обезличенного фрагмента",
  "по возможности обобщайте даты и суммы, если точность не нужна для первичной подготовки",
];

const commands = [
  ["/start", "начать работу и увидеть основные возможности"],
  ["/templates", "открыть бесплатные образцы документов"],
  ["/subscription", "узнать про доступ к расширенным функциям"],
  ["/privacy", "посмотреть правила обработки данных"],
  ["/delete", "сбросить текущий запрос и удалить данные текущего кейса"],
];

export default function GuidePage() {
  return (
    <main>
      <section className="audience-hero">
        <div className="wrap audience-hero-grid">
          <div>
            <div className="eyebrow">инструкция пользователю</div>
            <h1>Как безопасно пользоваться ботом</h1>
            <p className="lead">
              «Помощник адвоката» — AI-помощник по правовой информации. Он помогает подготовить материалы: выбрать образец, описать ситуацию, собрать вопросы и зоны внимания для проверки специалистом.
            </p>
            <div className="hero-bullets">
              <span>бесплатные образцы</span>
              <span>текстовый файл</span>
              <span>без лишних персональных данных</span>
              <span>проверка специалистом обязательна</span>
            </div>
            <div className="cta">
              <a className="btn primary" href={site.botUrl}>Открыть бота <span className="arrow">→</span></a>
              <Link className="btn ghost" href="/scenarios">Выбрать ситуацию</Link>
            </div>
            <div className="disclaimer">{legalDisclaimer}</div>
          </div>
          <aside className="audience-panel" aria-label="Главное правило">
            <span>Главное правило</span>
            <h2>Не отправляйте лишние персональные данные</h2>
            <ul>
              <li>используйте роли вместо ФИО</li>
              <li>не прикладывайте паспорт без необходимости</li>
              <li>удаляйте текущий кейс командой /delete</li>
            </ul>
          </aside>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-title">
            <div><div className="kicker">Бесплатно</div><h2>С чего начать без оплаты</h2></div>
            <p>Для простого старта достаточно открыть каталог, выбрать образец и скачать текстовый файл. Расширенный разбор включается только если пользователь сам выбирает этот режим.</p>
          </div>
          <div className="result-grid">
            <div className="result-card light-card">
              <h3>Бесплатный путь</h3>
              {freeSteps.map((item) => <div className="check" key={item}>{item}</div>)}
            </div>
            <div className="summary">
              <h3>Когда нужна проверка</h3>
              <p>Если документ будет отправляться в госорган, контрагенту, работодателю или в суд, итоговый текст лучше проверить у юриста или адвоката.</p>
              <p className="muted">Бот помогает подготовить структуру, но не заменяет профессиональную оценку фактов и документов.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="process">
        <div className="wrap">
          <div className="section-title">
            <div><div className="kicker">Доступ</div><h2>Что относится к расширенным функциям</h2></div>
            <p>Эти режимы могут требовать доступа или подписки, потому что используют более глубокую подготовку материалов.</p>
          </div>
          <div className="pain-grid">
            {accessSteps.map((item, index) => (
              <article className="pain" key={item}>
                <div className="num">0{index + 1}</div>
                <h3>{item}</h3>
                <p>Результат остаётся предварительным материалом для проверки специалистом.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-title">
            <div><div className="kicker">Безопасность</div><h2>Как описывать ситуацию без лишних данных</h2></div>
            <p>Для первичной подготовки часто достаточно обезличенного описания. Чем меньше лишних персональных данных, тем безопаснее пользоваться ботом.</p>
          </div>
          <div className="audiences">
            {privacyRules.map((item) => (
              <article className="aud" key={item}>
                <div className="mini">правило</div>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process">
        <div className="wrap">
          <div className="section-title">
            <div><div className="kicker">Команды</div><h2>Короткая памятка</h2></div>
            <p>Эти команды помогают быстро открыть нужный режим, посмотреть правила и удалить текущие данные.</p>
          </div>
          <div className="questions-grid">
            {commands.map(([command, text]) => (
              <div className="q" key={command}>
                <b>{command}</b>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final">
        <div className="wrap">
          <div>
            <h2>Начните с безопасного описания</h2>
            <p>Опишите ситуацию обычным языком, без лишних персональных данных. Бот поможет подготовить материалы, а важный результат нужно проверить со специалистом.</p>
          </div>
          <a className="btn light" href={site.botUrl}>Открыть бота <span className="arrow">→</span></a>
        </div>
      </section>
    </main>
  );
}
