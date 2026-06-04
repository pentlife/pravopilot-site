#!/usr/bin/env bash
set -euo pipefail

# Установка сайта «Помощник адвоката» на Ubuntu VPS.
# Запускать под root из папки, где лежит архив pravopilot-site-2026-06-03.tar.gz:
#   bash install_pravopilot_site.sh
#
# Можно переопределить параметры:
#   DOMAIN=example.ru WWW_DOMAIN=www.example.ru BOT_URL=https://t.me/mybot SUPPORT_URL=https://t.me/support bash install_pravopilot_site.sh

APP_USER="${APP_USER:-botapp}"
APP_DIR="${APP_DIR:-/home/${APP_USER}/apps/pravopilot-site}"
ARCHIVE="${ARCHIVE:-pravopilot-site-2026-06-03.tar.gz}"
DOMAIN="${DOMAIN:-pravopilot.ru}"
WWW_DOMAIN="${WWW_DOMAIN:-www.pravopilot.ru}"
BOT_URL="${BOT_URL:-https://t.me/pravopilot_bot}"
SUPPORT_URL="${SUPPORT_URL:-https://t.me/pravopilot_support}"
PORT="${PORT:-3000}"

if [ "$(id -u)" -ne 0 ]; then
  echo "ОШИБКА: скрипт нужно запускать под root." >&2
  exit 1
fi

if [ ! -f "$ARCHIVE" ]; then
  echo "ОШИБКА: архив не найден: $ARCHIVE" >&2
  echo "Положите архив рядом со скриптом или задайте ARCHIVE=/path/to/archive.tar.gz" >&2
  exit 1
fi

echo "== 1/9 Проверяем систему =="
whoami
hostnamectl || true
free -h || true
df -h / || true

echo "== 2/9 Ставим базовые пакеты =="
apt update
DEBIAN_FRONTEND=noninteractive apt install -y curl git nginx ufw ca-certificates

if ! command -v node >/dev/null 2>&1; then
  echo "== Node.js не найден, ставим Node.js 22 =="
  curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
  DEBIAN_FRONTEND=noninteractive apt install -y nodejs
fi

NODE_MAJOR="$(node -v | sed 's/^v//' | cut -d. -f1)"
if [ "$NODE_MAJOR" -lt 20 ]; then
  echo "ОШИБКА: нужна Node.js 20+; сейчас $(node -v). Обновите Node.js." >&2
  exit 1
fi
node -v
npm -v

echo "== 3/9 Готовим пользователя и папку приложения =="
id "$APP_USER" >/dev/null 2>&1 || adduser --disabled-password --gecos '' "$APP_USER"
mkdir -p "$APP_DIR"
chown -R "$APP_USER:$APP_USER" "$(dirname "$APP_DIR")"

echo "== 4/9 Останавливаем старую версию и распаковываем сайт =="
systemctl stop pravopilot-site 2>/dev/null || true
mkdir -p "${APP_DIR}.releases"
if [ -d "$APP_DIR" ] && [ "$(find "$APP_DIR" -mindepth 1 -maxdepth 1 2>/dev/null | wc -l)" -gt 0 ]; then
  BACKUP_DIR="${APP_DIR}.backup.$(date +%Y%m%d_%H%M%S)"
  mv "$APP_DIR" "$BACKUP_DIR"
  echo "Старая версия сохранена: $BACKUP_DIR"
fi
mkdir -p "$APP_DIR"
tar -xzf "$ARCHIVE" -C "$APP_DIR"
chown -R "$APP_USER:$APP_USER" "$APP_DIR"

echo "== 5/9 Пишем .env с публичными ссылками =="
cat > "$APP_DIR/.env" <<EOF
NEXT_PUBLIC_TELEGRAM_BOT_URL=${BOT_URL}
NEXT_PUBLIC_SUPPORT_URL=${SUPPORT_URL}
PORT=${PORT}
HOSTNAME=127.0.0.1
EOF
chown "$APP_USER:$APP_USER" "$APP_DIR/.env"
chmod 600 "$APP_DIR/.env"

echo "== 6/9 Устанавливаем зависимости и собираем сайт =="
sudo -iu "$APP_USER" bash <<EOF
set -e
cd '$APP_DIR'
npm install
npm run typecheck
npm run build
EOF

echo "== 7/9 Устанавливаем systemd service =="
cp "$APP_DIR/deploy/systemd/pravopilot-site.service" /etc/systemd/system/pravopilot-site.service
# Подставляем порт, если он отличается от 3000
sed -i "s/PORT=3000/PORT=${PORT}/g; s/--port 3000/--port ${PORT}/g; s#WorkingDirectory=/home/botapp/apps/pravopilot-site#WorkingDirectory=${APP_DIR}#g; s#EnvironmentFile=-/home/botapp/apps/pravopilot-site/.env#EnvironmentFile=-${APP_DIR}/.env#g; s#ReadWritePaths=/home/botapp/apps/pravopilot-site#ReadWritePaths=${APP_DIR}#g; s/User=botapp/User=${APP_USER}/g; s/Group=botapp/Group=${APP_USER}/g" /etc/systemd/system/pravopilot-site.service
systemctl daemon-reload
systemctl enable --now pravopilot-site
sleep 2
systemctl --no-pager --full status pravopilot-site || true

echo "== 8/9 Устанавливаем Nginx reverse proxy =="
cp "$APP_DIR/deploy/nginx/pravopilot.ru.conf" "/etc/nginx/sites-available/${DOMAIN}.conf"
sed -i "s/server_name pravopilot.ru www.pravopilot.ru;/server_name ${DOMAIN} ${WWW_DOMAIN};/g; s#proxy_pass http://127.0.0.1:3000;#proxy_pass http://127.0.0.1:${PORT};#g" "/etc/nginx/sites-available/${DOMAIN}.conf"
ln -sfn "/etc/nginx/sites-available/${DOMAIN}.conf" "/etc/nginx/sites-enabled/${DOMAIN}.conf"
nginx -t
systemctl reload nginx

echo "== 9/9 Проверяем HTTP и firewall =="
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable
ufw status verbose
curl -I "http://127.0.0.1:${PORT}/"
curl -I "http://127.0.0.1/" -H "Host: ${DOMAIN}" || true
sudo -iu "$APP_USER" bash -lc "APP_DIR='$APP_DIR' URL='http://127.0.0.1:${PORT}/' '$APP_DIR/scripts/ops_check.sh'"

echo
echo "ГОТОВО: сайт установлен."
echo "Проверьте DNS домена ${DOMAIN}. После DNS можно включить HTTPS:"
echo "  apt install -y certbot python3-certbot-nginx"
echo "  certbot --nginx -d ${DOMAIN} -d ${WWW_DOMAIN}"
