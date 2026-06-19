import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const layout = readFileSync(new URL('../app/layout.tsx', import.meta.url), 'utf8');
const component = readFileSync(new URL('../components/CookieBanner.tsx', import.meta.url), 'utf8');
const css = readFileSync(new URL('../app/globals.css', import.meta.url), 'utf8');

assert.match(layout, /<CookieBanner\s*\/>/, 'Root layout must render the cookie warning for every page');
assert.match(component, /localStorage\.getItem\("pravopilot-cookie-consent"\)/, 'Banner must remember accepted cookie warning');
assert.match(component, /Мы используем куки/, 'Banner must explain cookie usage in Russian');
assert.match(component, /href="\/privacy"/, 'Banner must link to privacy policy');
assert.match(component, /aria-live="polite"/, 'Banner must be announced accessibly without interrupting the user');
assert.match(css, /\.cookie-banner/, 'Cookie banner styles must exist');
assert.match(css, /@media\(max-width:580px\)[\s\S]*\.cookie-banner__inner/, 'Cookie banner must have mobile layout styles');

console.log('cookie banner contract ok');
