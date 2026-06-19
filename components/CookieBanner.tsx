"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const COOKIE_CONSENT_KEY = "pravopilot-cookie-consent";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(localStorage.getItem("pravopilot-cookie-consent") !== "accepted");
  }, []);

  function acceptCookies() {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <aside className="cookie-banner" aria-live="polite" aria-label="Предупреждение об использовании куков">
      <div className="cookie-banner__inner">
        <div>
          <b>Мы используем куки</b>
          <p>
            Сайт использует необходимые куки для корректной работы и обезличенную аналитику, чтобы улучшать
            материалы сервиса. Продолжая пользоваться сайтом, вы соглашаетесь с их использованием.
          </p>
          <Link href="/privacy">Подробнее в политике обработки данных</Link>
        </div>
        <button type="button" className="cookie-banner__button" onClick={acceptCookies}>
          Понятно
        </button>
      </div>
    </aside>
  );
}
