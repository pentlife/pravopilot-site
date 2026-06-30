import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8');

function indexOfRequired(fragment, message) {
  const index = page.indexOf(fragment);
  assert.notEqual(index, -1, message);
  return index;
}

const heroIndex = indexOfRequired('className="hero-modern"', 'Hero section must exist');
const exampleIndex = indexOfRequired('id="example"', 'Example/result section must exist');
const situationsIndex = indexOfRequired('id="situations"', 'Landing must include recognizable user situations near the top');
const workIndex = indexOfRequired('id="work"', 'How-it-works section must exist');
const comparisonIndex = indexOfRequired('<ComparisonBlock />', 'Comparison block must exist');
const templatesIndex = indexOfRequired('id="templates"', 'Free templates section must exist');
const dataSafetyIndex = indexOfRequired('id="data-safety"', 'Landing must include data/privacy safety section');
const limitsIndex = indexOfRequired('className="limits"', 'Limits section must exist');
const faqIndex = indexOfRequired('id="questions"', 'FAQ section must exist');
const pricingChoiceIndex = indexOfRequired('id="pricing-choice"', 'Landing must include choice guidance before pricing');
const pricingIndex = indexOfRequired('id="pricing"', 'Pricing section must exist');
const finalIndex = indexOfRequired('className="final"', 'Final CTA must exist');

assert.ok(heroIndex < exampleIndex, 'Hero must come before example');
assert.ok(exampleIndex < situationsIndex, 'Example must come before recognizable situations');
assert.ok(situationsIndex < workIndex, 'Situations must come before how-it-works');
assert.ok(workIndex < comparisonIndex, 'How-it-works must come before comparison');
assert.ok(comparisonIndex < templatesIndex, 'Comparison must be moved above templates/pricing');
assert.ok(templatesIndex < dataSafetyIndex, 'Templates must come before data safety section');
assert.ok(dataSafetyIndex < limitsIndex, 'Data safety must come before limits');
assert.ok(limitsIndex < faqIndex, 'Limits must come before FAQ');
assert.ok(faqIndex < pricingChoiceIndex, 'FAQ must be before pricing choice guidance');
assert.ok(pricingChoiceIndex < pricingIndex, 'Choice guidance must be immediately before pricing');
assert.ok(pricingIndex < finalIndex, 'Pricing must come before final CTA');

for (const phrase of [
  'Вернуть деньги за товар или услугу',
  'Работодатель задерживает выплату',
  'Контрагент не платит по договору',
  'Жалоба в УК, банк или РКН',
  'Есть договор или акт, но непонятны риски',
  'Удалить текущую заявку можно командой',
  '/privacy',
  '/consent',
  '/terms',
  'Что выбрать: шаблоны, пробный разбор или подписку',
]) {
  assert.match(page, new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `Landing must mention: ${phrase}`);
}

for (const forbidden of [
  /данные не передаются третьим лицам/i,
  /не переда[её]м третьим лицам/i,
  /диалоги шифруются/i,
  /данные хранятся только в РФ/i,
  /экономит 70%/i,
  /юрист одобрил/i,
  /клиент выиграл/i,
  /AI-адвокат решит/i,
]) {
  assert.doesNotMatch(page, forbidden, `Landing must not contain unsafe claim: ${forbidden}`);
}

console.log('landing sales structure contract ok');
