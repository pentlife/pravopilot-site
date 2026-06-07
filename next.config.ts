import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Сайт запускается через `next start` в systemd, поэтому standalone-сборка не нужна.
  // Обычная production-сборка снижает риск рассинхронизации манифестов Next.js
  // после деплоя поверх старой `.next` директории.
};

export default nextConfig;
