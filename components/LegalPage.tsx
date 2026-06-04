type Section = { title: string; body: string[] };

export function LegalPage({ title, lead, sections }: { title: string; lead: string; sections: Section[] }) {
  return (
    <main className="legal-page">
      <div className="wrap">
        <div className="breadcrumbs">Главная / Документы</div>
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
        <div className="legal-card">
          <p><b>Важно:</b> тексты правовых документов являются рабочей редакцией для запуска сайта и должны быть проверены юристом перед публикацией.</p>
          {sections.map((section) => (
            <section key={section.title} style={{ padding: 0, border: 0 }}>
              <h2>{section.title}</h2>
              {section.body.map((p) => <p key={p}>{p}</p>)}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
