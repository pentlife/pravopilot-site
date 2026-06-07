export const site = {
  name: "Помощник адвоката",
  url: "https://pravopilot.ru",
  botUrl: process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL || "https://t.me/pravopilot_bot",
  supportUrl: process.env.NEXT_PUBLIC_SUPPORT_URL || "https://t.me/pravopilot_support",
  description:
    "бот в мессенджере с бесплатными шаблонами правовых документов, предварительной автоматизированной справкой по правовым вопросам и предварительным разбором документов для подготовки к работе с адвокатом.",
};

export const legalDisclaimer =
  "Сервис не является юридической консультацией, не заменяет адвоката или юриста, не даёт юридическое заключение, не гарантирует результат и не контролирует процессуальные сроки. Подготовленные материалы требуют проверки специалистом.";
