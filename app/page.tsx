import { ComparisonBlock } from "@/components/ComparisonBlock";
import { site } from "@/lib/site";

const pains = [
  ["01", "Нужен понятный старт", "В боте есть бесплатные шаблоны претензий, заявлений, жалоб и договорных документов."],
  ["02", "Документ вызывает сомнения", "Сервис помогает выделить неочевидные условия и вопросы, которые стоит проверить со специалистом."],
  ["03", "Есть правовой вопрос", "Можно подготовить список фактов, документов и вопросов для обсуждения со специалистом."],
  ["04", "Нужно идти к адвокату", "Структурированный анализ облегчает специалисту дальнейшую работу по делу."],
];

const steps = [
  ["1", "Откройте бота в мессенджере", "Выберите: бесплатный шаблон, правовой вопрос или Подготовка разбора документа."],
  ["2", "Опишите ситуацию", "Кратко укажите факты, даты, суммы и приложите документ, если нужен разбор."],
  ["3", "Получите структуру материалов", "Бот сгруппирует обстоятельства и подсветит условия, требующие проверки специалистом."],
  ["4", "Скачайте шаблон или текстовый файл", "Используйте бесплатную форму либо подготовленный черновик для дальнейшей проверки."],
  ["5", "Передайте адвокату", "Готовая структура экономит время на первичном разборе и помогает быстрее перейти к стратегии."],
];

const features = [
  ["📄", "Бесплатные шаблоны", "Претензии, заявления, жалобы и базовые договорные документы доступны в боте без оплаты."],
  ["🤖", "AI-разбор ситуации", "Предварительная сводка помогает собрать материалы и подготовить вопросы специалисту."],
  ["🔍", "Разбор документа", "Бот подсвечивает условия документа и зоны внимания для последующей проверки специалистом."],
];

const templates = ["претензия продавцу или исполнителю", "заявление работодателю", "жалоба в управляющую компанию", "запрос/заявление в банк", "расписка и долговая претензия", "базовые семейные заявления", "документы по закупкам 44-ФЗ", "персональные данные и РКН"];
const freeBotItems = ["каталог типовых образцов", "быстрый подбор формы по описанию ситуации", "скачивание текстового файла", "переход к расширенному режиму только по желанию"];
const topics = ["Потребители|возврат денег, услуги|/scenarios/vozvrat-deneg-za-tovar", "Труд|зарплата, увольнение|/scenarios/trudovoy-spor", "Долги|расписки, претензии|/scenarios/dolg-i-pretenziya", "ЖКХ|жалобы, перерасчёт|/scenarios/zhkh-upravlyayushchaya-kompaniya", "Аренда|залог, акты, переписка|/scenarios/arenda-zalog", "Договоры|условия, акты|/scenarios/dogovory-i-akty", "Семья|алименты, развод|/scenarios", "Банки|списания, кредиты|/scenarios", "152-ФЗ|персональные данные, РКН|/scenarios"];
const checks = ["предварительная сводка ситуации", "хронология событий", "зоны внимания для проверки специалистом", "важные даты и суммы", "перечень документов", "вопросы адвокату"];

const socialLinks = [
  ["Открыть бота", site.botUrl, "M20.8 4.7 17.7 19.6c-.2.8-1.1 1-1.7.6l-4.8-3.6-2.3 2.2c-.5.5-1.3.2-1.1-.5l.9-3.8 7.1-6.4-8.8 5.5-3.8-1.2c-.8-.3-.8-1.4.1-1.7l16.9-6.5c.7-.3 1.4.3 1.2 1.1Z"],
  ["Написать в поддержку", site.supportUrl, "M12 2a10 10 0 0 0-8.7 14.9L2 22l5.3-1.2A10 10 0 1 0 12 2Zm4.8 14.1c-.2.6-1.2 1.1-1.7 1.2-.5.1-1.1.2-3.4-.7-2.9-1.1-4.8-4-4.9-4.2-.1-.1-1.2-1.6-1.2-3.1s.8-2.2 1.1-2.5c.2-.3.6-.4.9-.4h.6c.2 0 .5 0 .7.5l.9 2.2c.1.3.1.5 0 .7l-.4.6c-.1.2-.3.4-.1.7.2.4.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.5 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.5-.3.8-.2l2 .9c.3.2.6.3.6.5 0 .1 0 .7-.2 1.4Z"],
  ["Посмотреть образцы", "/#templates", "M6 3.8A2.8 2.8 0 0 1 8.8 1h6.4A2.8 2.8 0 0 1 18 3.8V21l-6-3.2L6 21V3.8Zm2.8-.6a.6.6 0 0 0-.6.6v13.5l3.8-2 3.8 2V3.8a.6.6 0 0 0-.6-.6H8.8Zm1.2 3.3h4v2.1h-4V6.5Zm0 4h4v2.1h-4v-2.1Z"],
];

const faqItems = [
  ["Шаблоны действительно бесплатные?", "Да. Базовые шаблоны правовых документов доступны в боте бесплатно. Их можно использовать как стартовую форму, но важные документы лучше проверить у специалиста."],
  ["Бот использует AI?", "Да. Бот использует AI для предварительной обработки информации: помогает выделить факты, даты, документы, вопросы и собрать структурированную сводку. Результат не является юридическим заключением и требует проверки специалистом."],
  ["Это заменяет обращение к специалисту?", "Нет. Сервис формирует предварительную справку и материалы для подготовки. Он не заменяет адвоката или юриста и не даёт юридическое заключение."],
  ["Что даёт подготовка разбора документа?", "Она помогает выделить зоны внимания для проверки специалистом, спорные условия, важные факты и вопросы для адвоката с учётом действующего законодательства."],
  ["Зачем это адвокату?", "Адвокат получает структурированную сводку: факты, документы, зоны внимания и вопросы. Это облегчает первичный разбор и помогает быстрее перейти к профессиональной стратегии."],
  ["Можно использовать результат сразу?", "Для простых бытовых задач — как ориентир. Для отправки, подписания, подачи в суд или спора со значимыми последствиями результат должен проверить специалист."],
  ["Если срок истекает завтра?", "Обратитесь к юристу напрямую. Сервис не гарантирует выявление и контроль процессуальных сроков."],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
{/* Modern Hero Section */}
      <section className="hero-modern">
        <div className="hero-modern-grid">
          <div className="hero-modern-content">
            <h1>AI-помощник для подготовки правовых материалов<br/>Шаблоны, разбор и сводка для юриста</h1>
            <p className="lead">Бесплатные образцы документов, AI-подготовка по ситуации и понятное резюме для консультации со специалистом — всё в боте.</p>
            
            <div className="hero-modern-bullets">
              <span>50+ образцов</span>
              <span>2 бесплатных AI-разбора/неделю</span>
              <span>Сводка для юриста</span>
              <span>Без автосписания</span>
            </div>
            
            <div className="hero-modern-cta">
              <a className="btn-lime" href={site.botUrl}>Попробовать бесплатно →</a>
              <a className="btn-outline" href="/#templates">Посмотреть шаблоны</a>
            </div>
            <div className="social-row social-row-modern" aria-label="Быстрые ссылки"><span>Открыть через:</span>{socialLinks.map(([label, href, icon])=><a className="social-icon social-icon-modern" href={href} key={label} aria-label={label} title={label}><svg viewBox="0 0 24 24" aria-hidden="true"><path d={icon}/></svg></a>)}</div>
            
            <div className="hero-modern-disclaimer">
              Сервис готовит предварительные материалы для обсуждения со специалистом. Не является юридической консультацией, не заменяет адвоката и не даёт юридическое заключение.
            </div>
          </div>
          
        </div>
      </section>
      <section className="example-strip" id="example"><div className="wrap"><div className="section-title"><div><div className="kicker">Пример результата</div><h2>Из хаотичного описания — в структуру для юриста</h2></div><p>Показываем, как бытовой пересказ превращается в короткое резюме: факты, документы, вопросы и зоны внимания для проверки специалистом.</p></div><div className="before-after"><article><span>До</span><p>«Оплатил ремонт, сроки сорвали, часть работ сделана плохо, договор где-то в переписке. Не понимаю, что писать и какие доказательства нужны».</p></article><article><span>После</span><ul><li>хронология событий и платежей;</li><li>список документов и скриншотов;</li><li>вопросы юристу перед претензией;</li><li>предварительный текстовый шаблон для проверки.</li></ul></article></div><div className="cta"><a className="btn primary" href="/example">Открыть полный пример</a><a className="btn ghost" href={site.botUrl}>Повторить в боте</a></div></div></section>

      <section><div className="wrap"><div className="section-title"><div><div className="kicker">Главное</div><h2>Не только черновик, а понятный первый шаг</h2></div><p>Пользователь может бесплатно взять шаблон, получить предварительную справку по правовому вопросу или загрузить документ для разбора. Результат помогает подготовиться к разговору с адвокатом, но не подменяет его заключение.</p></div><div className="pain-grid">{pains.map(([n,t,p])=><div className="pain" key={n}><div className="num">{n}</div><h3>{t}</h3><p>{p}</p></div>)}</div></div></section>

      <section className="process" id="features"><div className="wrap"><div className="section-title"><div><div className="kicker">Возможности</div><h2>Три сценария в одном боте</h2></div><p>Сначала — бесплатные формы и подготовка материалов. Затем, если вопрос сложный, структурированную сводку можно показать адвокату для профессиональной оценки.</p></div><div className="audiences">{features.map(([icon,title,text])=><article className="aud" key={title}><div className="mini">{icon}</div><h3>{title}</h3><p className="muted">{text}</p><a className="btn ghost" href={site.botUrl}>Открыть бота</a></article>)}</div></div></section>

      <section id="templates"><div className="wrap"><div className="section-title"><div><div className="kicker">Попробуйте бесплатно</div><h2>Бесплатные образцы документов в боте</h2></div><p>Откройте каталог, выберите типовую форму и скачайте текстовый файл. Расширенная подготовка и загрузка документов включаются только если вы сами выбираете этот режим.</p></div><div className="result-grid"><div className="result-card"><h3>Что доступно сразу</h3>{freeBotItems.map(x=><div className="check" key={x}>{x}</div>)}{templates.slice(0,5).map(x=><div className="check" key={x}>{x}</div>)}</div><div className="summary"><h3>Как использовать шаблон</h3><div className="summary-line"><b>Выбор</b><span>Откройте бота и выберите категорию документа.</span></div><div className="summary-line"><b>Заполнение</b><span>Внесите факты, даты, суммы и реквизиты сторон самостоятельно.</span></div><div className="summary-line"><b>Безопасность</b><span>Перед отправкой не указывайте лишние персональные данные: заменяйте ФИО на роли и не отправляйте паспорт без необходимости.</span></div><div className="summary-line"><b>Проверка</b><span>Если вопрос спорный или последствия значимы — покажите документ юристу или адвокату.</span></div></div></div><div className="cta"><a className="btn primary" href={site.botUrl}>Открыть бесплатные образцы <span className="arrow">→</span></a><a className="btn ghost" href="/guide">Как пользоваться безопасно</a></div></div></section>

      <section className="result" id="analysis"><div className="wrap"><div className="section-title"><div><div className="kicker">Расширенный разбор</div><h2>Подготовка по вопросу или документу</h2></div><p>Сервис помогает увидеть структуру ситуации: какие факты важны, какие условия документа требуют внимания специалиста и что уточнить перед обращением. Такая сводка облегчает дальнейшую работу адвоката.</p></div><div className="result-grid"><div className="result-card"><h3>Что входит</h3>{checks.map(x=><div className="check" key={x}>{x}</div>)}</div><div className="summary"><h3>Пример результата</h3><div className="summary-line"><b>Ситуация</b><span>Пользователь загрузил договор услуг и описал спор по качеству результата.</span></div><div className="summary-line"><b>Зоны внимания</b><span>Сервис выделил неоднозначные сроки, порядок приёмки и возврата оплаты — для проверки специалистом.</span></div><div className="summary-line"><b>Вопросы</b><span>Что уточнить у адвоката: доказательства недостатков, сроки претензии, перспективы возврата.</span></div><div className="summary-line"><b>Оговорка</b><span>Это предварительная подсветка, а не экспертная оценка, юридическое заключение или гарантия исхода.</span></div></div></div></div></section>

      <section className="process" id="work"><div className="wrap"><div className="section-title"><div><div className="kicker">Как работает</div><h2>От шаблона или вопроса — к материалу для адвоката</h2></div><p>Процесс построен осторожно: бот помогает собрать вводные и сформировать ориентир, но окончательное решение принимает пользователь вместе со специалистом.</p></div><div className="steps">{steps.map(([n,t,p])=><div className="step" key={n}><strong>{n}</strong><h3>{t}</h3><p>{p}</p></div>)}</div></div></section>

      <section id="audiences"><div className="wrap"><div className="section-title"><div><div className="kicker">Для кого</div><h2>Разные пользователи — разная польза</h2></div><p>Сервис помогает подготовить материалы, получить первичный ориентир и прийти к юристу не с хаотичным пересказом, а с понятной структурой.</p></div><div className="audiences"><article className="aud"><div className="mini">Физические лица</div><h3>Понять порядок действий</h3><ul><li>бесплатные шаблоны заявлений и претензий</li><li>потребительские, трудовые, семейные вопросы</li><li>предварительный анализ документов</li></ul><p className="muted">Подготовка фактов и вопросов перед консультацией.</p><a className="text-link" href="/for-people">Подробнее для частных ситуаций →</a></article><article className="aud"><div className="mini">Бизнес и ИП</div><h3>Собрать позицию по спору</h3><ul><li>договоры и акты</li><li>претензии контрагентам</li><li>зоны внимания для проверки специалистом</li></ul><p className="muted">Черновик и список вопросов для проверки специалистом.</p><a className="text-link" href="/for-business">Подробнее для бизнеса →</a></article><article className="aud"><div className="mini">Юристы и адвокаты</div><h3>Первичное резюме без хаоса</h3><ul><li>структурированные вводные</li><li>вопросы клиенту</li><li>текстовое резюме</li><li>экономия времени приёма</li></ul><p className="muted">Клиент приходит с подготовленным материалом.</p><a className="text-link" href="/for-lawyers">Подробнее для специалистов →</a></article></div></div></section>

      <section><div className="wrap"><div className="section-title"><div><div className="kicker">Практичные темы</div><h2>Ситуации, с которыми помогает сервис</h2></div><p>Фокус на задачах, где важны образцы документов, подготовка фактов и предварительный разбор: без обещаний окончательного юридического решения.</p></div><div className="topics">{topics.map(item=>{const [b,t,href]=item.split('|');return <a className="topic" href={href} key={b}><b>{b}</b>{t}</a>})}</div></div></section>

      <ComparisonBlock />

      <section className="limits"><div className="wrap"><div className="section-title"><div><div className="kicker">Ограничения</div><h2>Честные границы — часть доверия</h2></div><p>Сервис полезен как подготовка материалов, но не является адвокатом, юридическим заключением или гарантией результата.</p></div><div className="limit-grid"><div className="limit good"><h3>Сервис помогает</h3><ul><li>получить бесплатный шаблон документа</li><li>структурировать ситуацию</li><li>предварительно разобрать документ</li><li>подготовить вопросы адвокату</li><li>сформировать текстовый черновик</li></ul></div><div className="limit bad"><h3>Сервис не делает</h3><ul><li>не заменяет юриста или адвоката</li><li>не даёт юридическое заключение</li><li>не гарантирует результат</li><li>не контролирует процессуальные сроки</li><li>не обеспечивает адвокатскую тайну</li></ul></div></div></div></section>

<section id="pricing"><div className="wrap"><div className="section-title"><div><div className="kicker">Тарифы</div><h2>Бесплатный старт и подписка без автосписания</h2></div><p>Базовые шаблоны доступны бесплатно. Для регулярной подготовки материалов — подписка с ручной активацией без автосписания.</p></div><div className="pricing"><div className="price"><h3>Шаблоны</h3><div className="amount">0 ₽</div><ul><li>базовые формы документов</li><li>категории по жизненным ситуациям</li><li>стартовая основа для заполнения</li><li>доступ в боте без ограничений</li></ul><a className="btn ghost" href={site.botUrl}>Получить</a></div><div className="price"><h3>Сбор материалов</h3><div className="amount">2 анализа<br/><small style={{fontSize:'16px',color:'var(--muted)'}}>в неделю бесплатно</small></div><ul><li>структура ситуации</li><li>список документов</li><li>вопросы юристу</li><li>текстовая сводка</li></ul><a className="btn ghost" href={site.botUrl}>Начать</a></div><div className="price featured"><h3>Подписка</h3><div className="amount">3 000 ₽<span style={{fontSize:'18px',color:'var(--muted)'}}>/мес</span></div><ul><li><b>безлимитная подготовка материалов</b></li><li>ручная активация администратором</li><li>без автоматического списания</li><li>все шаблоны включены</li><li>приоритетная обработка</li></ul><a className="btn primary" href={site.botUrl}>Оформить заявку →</a><p style={{fontSize:'12px',color:'var(--muted)',marginTop:'12px',textAlign:'center'}}>Напишите в боте: «Хочу подписку»</p></div><div className="price"><h3>С проверкой юриста</h3><div className="amount">4 990–7 990 ₽</div><ul><li>подготовка ботом</li><li>проверка юристом-партнёром</li><li>комментарии по доработке</li></ul><a className="btn ghost" href={site.botUrl}>Узнать</a></div></div></div></section>
      <section id="questions"><div className="wrap"><div className="section-title"><div><div className="kicker">Вопросы</div><h2>Ответы, которые снижают риск ложных ожиданий</h2></div><p>Мы прямо разделяем бесплатные шаблоны, предварительный ориентир, AI-подготовку материалов и профессиональную юридическую помощь.</p></div><div className="questions-grid">{faqItems.map(([question, answer]) => <div className="q" key={question}><b>{question}</b><p>{answer}</p></div>)}</div></div></section>

      <section className="final" id="bot"><div className="wrap"><div><h2>Начните с бесплатного шаблона или разбора</h2><p>Откройте бота: получите форму документа, задайте правовой вопрос или загрузите документ для предварительной подготовки перед обращением к адвокату.</p></div><a className="btn light" href={site.botUrl}>Открыть бота <span className="arrow">→</span></a></div></section>
    </main>
  );
}
