export const site = {
  name: "Помощник адвоката",
  url: "https://pravopilot.ru",
  botUrl: process.env.NEXT_PUBLIC_TELEGRAM_BOT_URL || "https://t.me/AIAdvokat34_bot",
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "pentlife@gmail.com",
  supportUrl: process.env.NEXT_PUBLIC_SUPPORT_URL || "mailto:pentlife@gmail.com",
  description:
    "AI-бот с бесплатными шаблонами правовых документов, предварительной подготовкой материалов и сводкой по ситуации для обращения к юристу или адвокату.",
};

export const legalDisclaimer =
  "Сервис не является юридической консультацией, не заменяет адвоката или юриста, не даёт юридическое заключение, не гарантирует результат и не контролирует процессуальные сроки. Подготовленные материалы требуют проверки специалистом.";
