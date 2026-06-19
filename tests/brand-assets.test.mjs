import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const layout = readFileSync(new URL('../app/layout.tsx', import.meta.url), 'utf8');
const css = readFileSync(new URL('../app/globals.css', import.meta.url), 'utf8');
const logoPath = new URL('../public/brand/pravopilot-shield-logo.svg', import.meta.url);
const iconPath = new URL('../public/favicon.svg', import.meta.url);

assert.equal(existsSync(logoPath), true, 'Main SVG logo asset must exist');
assert.equal(existsSync(iconPath), true, 'SVG favicon asset must exist');

const logo = readFileSync(logoPath, 'utf8');
const icon = readFileSync(iconPath, 'utf8');

assert.match(logo, /<title[^>]*>Помощник адвоката — логотип<\/title>/, 'Logo must have an accessible Russian title');
assert.match(logo, /§/, 'Logo must use the paragraph symbol as the legal mark');
assert.match(logo, /#632334/i, 'Logo must use the site burgundy brand color');
assert.match(logo, /#A78343/i, 'Logo must use the site gold accent');
assert.match(icon, /<title[^>]*>Помощник адвоката — фавикон<\/title>/, 'Favicon must have an accessible Russian title');
assert.match(icon, /§/, 'Favicon must use the paragraph symbol');

assert.match(layout, /icons:\s*{[\s\S]*icon:\s*"\/favicon\.svg"/, 'Metadata must point to the favicon');
assert.match(layout, /<img[\s\S]*src="\/brand\/pravopilot-shield-logo\.svg"[\s\S]*alt="Помощник адвоката"/, 'Header brand must render the SVG logo image with alt text');
assert.match(css, /\.brand-logo/, 'Header logo image must have styles');
assert.doesNotMatch(layout, /<span className="seal">§<\/span>/, 'Header must not use the old text-only seal');

console.log('brand assets contract ok');
