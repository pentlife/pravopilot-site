#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/home/botapp/apps/pravopilot-site}"
URL="${URL:-http://127.0.0.1:3000/}"

cd "$APP_DIR"
echo "== node =="
node -v
echo "== npm =="
npm -v
echo "== files =="
test -f package.json
test -d .next
echo "== http =="
curl -fsS -I "$URL" | sed -n '1,8p'
echo "OK: site ops_check passed"
