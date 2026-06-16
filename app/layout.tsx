import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { legalDisclaimer, site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  title: {
    default: "Помощник адвоката — AI-подготовка правовых материалов в боте",
    template: "%s · Помощник адвоката",
  },
  description: site.description,
  openGraph: {
    title: "Помощник адвоката — AI-подготовка правовых материалов",
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/images/hero-man-laptop-bg.png", width: 1200, height: 900, alt: "Помощник адвоката — подготовка правовых материалов" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Помощник адвоката — AI-подготовка правовых материалов",
    description: site.description,
    images: ["/images/hero-man-laptop-bg.png"],
  },
  robots: { index: true, follow: true },
};

function Header() {
  return (
    <>
      <div className="notice">
        <div className="wrap">
          <span><b>Бот:</b> бесплатные образцы документов без запуска расширенного разбора</span>
          <span>Не заменяет специалиста · Проверка специалистом обязательна</span>
        </div>
      </div>
      <header>
        <div className="wrap nav">
          <Link className="brand" href="/">
            <span className="seal">§</span><span>{site.name}</span>
          </Link>
          <nav className="links" aria-label="Основная навигация">
            <Link href="/#free-samples">Бесплатные образцы</Link>
            <Link href="/example">Пример резюме</Link>
            <Link href="/for-people">Для людей</Link>
            <Link href="/for-business">Для бизнеса</Link>
            <Link href="/for-lawyers">Юристам</Link>
            <Link href="/scenarios">Сценарии</Link>
            <Link href="/#analysis">Разбор документа</Link>
            <Link href="/#pricing">Тарифы</Link>
            <Link href="/#questions">Вопросы</Link>
          </nav>
          <a className="btn primary" href={site.botUrl}>Открыть бота <span className="arrow">→</span></a>
          <span className="mobile" aria-hidden="true">☰</span>
        </div>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div>
          <Link className="brand" href="/"><span className="seal">§</span><span>{site.name}</span></Link>
          <p className="legal">«{site.name}» — сервис предварительной подготовки материалов. {legalDisclaimer}</p>
        </div>
        <div className="foot-links">
          <div><b>Сайт</b><Link href="/#work">Как работает</Link><Link href="/for-people">Для людей</Link><Link href="/for-business">Для бизнеса</Link><Link href="/for-lawyers">Юристам</Link><Link href="/scenarios">Сценарии</Link><Link href="/#pricing">Тарифы</Link></div>
          <div><b>Документы</b><Link href="/privacy">Политика ПДн</Link><Link href="/consent">Согласие</Link><Link href="/terms">Пользовательское соглашение</Link><Link href="/limitations">Ограничения сервиса</Link></div>
          <div><b>Контакты</b><a href={site.botUrl}>Бот</a><a href={site.supportUrl}>Поддержка</a><Link href="/privacy#delete">Удаление данных</Link></div>
        </div>
      </div>
    </footer>
  );
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  description: site.description,
  areaServed: { "@type": "Country", name: "RU" },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description: site.description,
  inLanguage: "ru-RU",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
