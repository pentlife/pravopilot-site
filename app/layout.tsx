import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { legalDisclaimer, site } from "@/lib/site";
import { CookieBanner } from "@/components/CookieBanner";

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
    images: [{ url: "/images/hero-legal-assistant-bg.png", width: 1672, height: 941, alt: "Помощник адвоката — подготовка правовых материалов" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Помощник адвоката — AI-подготовка правовых материалов",
    description: site.description,
    images: ["/images/hero-legal-assistant-bg.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
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
          <Link className="brand" href="/" aria-label="Помощник адвоката — на главную">
            <img className="brand-logo" src="/brand/pravopilot-shield-logo.svg" alt="Помощник адвоката" width="296" height="64" />
          </Link>
          <nav className="links" aria-label="Основная навигация">
            <Link href="/#templates">Бесплатные образцы</Link>
            <Link href="/example">Пример резюме</Link>
            <Link href="/for-people">Для людей</Link>
            <Link href="/for-business">Для бизнеса</Link>
            <Link href="/for-lawyers">Юристам</Link>
            <Link href="/scenarios">Сценарии</Link>
            <Link href="/guide">Как пользоваться</Link>
            <Link href="/#analysis">Разбор документа</Link>
            <Link href="/#pricing">Тарифы</Link>
            <Link href="/#questions">Вопросы</Link>
          </nav>
          <a className="btn primary desktop-cta" href={site.botUrl}>Открыть бота <span className="arrow">→</span></a>
          <details className="mobile-menu">
            <summary aria-label="Открыть меню">☰</summary>
            <div className="mobile-panel">
              <Link href="/#templates">Бесплатные образцы</Link>
              <Link href="/example">Пример резюме</Link>
              <Link href="/for-people">Для людей</Link>
              <Link href="/for-business">Для бизнеса</Link>
              <Link href="/for-lawyers">Юристам</Link>
              <Link href="/scenarios">Сценарии</Link>
              <Link href="/guide">Как пользоваться</Link>
              <Link href="/#analysis">Разбор документа</Link>
              <Link href="/#pricing">Тарифы</Link>
              <Link href="/#questions">Вопросы</Link>
              <a className="btn primary" href={site.botUrl}>Открыть бота <span className="arrow">→</span></a>
            </div>
          </details>
        </div>
      </header>
    </>
  );
}

function StickyCta() {
  return (
    <div className="sticky-cta" aria-label="Быстрые действия">
      <div className="sticky-cta__bar">
        <a className="sticky-cta__primary" href={site.botUrl}>Подготовить в Telegram</a>
        <a className="sticky-cta__secondary" href="/#templates">Бесплатные образцы</a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div>
          <Link className="brand" href="/" aria-label="Помощник адвоката — на главную"><img className="brand-logo footer-brand-logo" src="/brand/pravopilot-shield-logo.svg" alt="Помощник адвоката" width="252" height="64" /></Link>
          <p className="legal">«{site.name}» — сервис предварительной подготовки материалов. {legalDisclaimer}</p>
        </div>
        <div className="foot-links">
          <div><b>Сайт</b><Link href="/#work">Как работает</Link><Link href="/guide">Как пользоваться</Link><Link href="/for-people">Для людей</Link><Link href="/for-business">Для бизнеса</Link><Link href="/for-lawyers">Юристам</Link><Link href="/scenarios">Сценарии</Link><Link href="/#pricing">Тарифы</Link></div>
          <div><b>Документы</b><Link href="/privacy">Политика ПДн</Link><Link href="/consent">Согласие</Link><Link href="/terms">Пользовательское соглашение</Link><Link href="/limitations">Ограничения сервиса</Link></div>
          <div><b>Контакты</b><a href={site.botUrl}>Telegram-бот</a><a href={site.supportUrl}>Поддержка: {site.supportEmail}</a><Link href="/privacy#delete">Удаление данных</Link></div>
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
        <StickyCta />
        <CookieBanner />
      </body>
    </html>
  );
}
