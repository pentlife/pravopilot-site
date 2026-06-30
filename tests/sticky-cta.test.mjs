import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const layout = readFileSync(new URL('../app/layout.tsx', import.meta.url), 'utf8');
const css = readFileSync(new URL('../app/globals.css', import.meta.url), 'utf8');

assert.match(layout, /function StickyCta\(\)/, 'Layout must define a reusable mobile sticky CTA component');
assert.match(layout, /<StickyCta \/>/, 'Mobile sticky CTA must be rendered in the shared layout');
assert.match(layout, /className="sticky-cta"/, 'Sticky CTA wrapper class must exist');
assert.match(layout, /className="sticky-cta__bar"/, 'Sticky CTA must use a bar container');
assert.match(layout, /Подготовить в Telegram/, 'Primary mobile sticky button must clearly open the Telegram bot');
assert.match(layout, /Бесплатные образцы/, 'Secondary mobile sticky button must lead to templates');
assert.match(layout, /href=\{site\.botUrl\}/, 'Sticky primary CTA must use configured bot URL');
assert.match(layout, /href="\/#templates"/, 'Sticky secondary CTA must link to templates section');

assert.match(css, /\.sticky-cta\{[^}]*position:fixed[^}]*bottom:0/s, 'Mobile sticky CTA must be fixed to the viewport bottom');
assert.match(css, /\.sticky-cta\{[^}]*z-index:90/s, 'Mobile sticky CTA must stay above content but below cookie banner');
assert.match(css, /padding-bottom:calc\(12px \+ env\(safe-area-inset-bottom\)\)/, 'Mobile sticky CTA must respect iOS safe-area bottom inset');
assert.match(css, /body\{[^}]*padding-bottom:96px/s, 'Mobile layout must reserve space so fixed CTA does not cover content');
assert.match(css, /\.sticky-cta__bar\{[^}]*gap:12px/s, 'Sticky CTA buttons must have visible spacing between them');
assert.match(css, /@media\(min-width:981px\)\{\.sticky-cta\{display:none\}body\{padding-bottom:0\}\}/, 'Desktop must hide sticky CTA and remove mobile-only body padding');
assert.match(css, /\.cta\{[^}]*gap:16px/s, 'Inline CTA button groups must not look glued together');
assert.match(css, /\.cta\{[^}]*margin-top:22px/s, 'Inline CTA groups must have breathing room above buttons');
assert.doesNotMatch(css, /@media\(min-width:981px\).*\.sticky-cta\{left:auto;right:24px;bottom:24px/s, 'Desktop must not show a floating sticky CTA');

console.log('sticky CTA contract ok');
