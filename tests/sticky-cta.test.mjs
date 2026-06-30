import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const layout = readFileSync(new URL('../app/layout.tsx', import.meta.url), 'utf8');
const css = readFileSync(new URL('../app/globals.css', import.meta.url), 'utf8');

assert.match(layout, /function StickyCta\(\)/, 'Layout must define a reusable sticky CTA component');
assert.match(layout, /<StickyCta \/>/, 'Sticky CTA must be rendered on every page');
assert.match(layout, /className="sticky-cta"/, 'Sticky CTA wrapper class must exist');
assert.match(layout, /className="sticky-cta__bar"/, 'Sticky CTA must use a bar container');
assert.match(layout, /Подготовить в Telegram/, 'Primary sticky button must clearly open the Telegram bot');
assert.match(layout, /Бесплатные образцы/, 'Secondary sticky button must lead to templates');
assert.match(layout, /href=\{site\.botUrl\}/, 'Sticky primary CTA must use configured bot URL');
assert.match(layout, /href="\/#templates"/, 'Sticky secondary CTA must link to templates section');

assert.match(css, /\.sticky-cta\{[^}]*position:fixed[^}]*bottom:0/s, 'Sticky CTA must be fixed to the viewport bottom');
assert.match(css, /\.sticky-cta\{[^}]*z-index:90/s, 'Sticky CTA must stay above content but below cookie banner');
assert.match(css, /padding-bottom:calc\(12px \+ env\(safe-area-inset-bottom\)\)/, 'Sticky CTA must respect iOS safe-area bottom inset');
assert.match(css, /body\{[^}]*padding-bottom:96px/s, 'Body must reserve space so fixed CTA does not cover content');
assert.match(css, /@media\(min-width:981px\)\{\.sticky-cta\{display:none\}body\{padding-bottom:0\}\}/, 'Desktop must not show mobile sticky CTA or reserve extra body space');

console.log('sticky CTA contract ok');
