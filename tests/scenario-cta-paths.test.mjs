import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8');

const required = [
  'const scenarioPaths = [',
  'Что нажать в боте',
  'что подготовить',
  'какой результат получите',
  'Выберите «Шаблоны документов»',
  'Выберите «Правовой вопрос»',
  'Выберите «Разбор документа»',
  'сроки покупки, чек, договор, переписку и фото недостатков',
  'трудовой договор, расчётные листки, даты и суммы долга',
  'договор, акты, счета, переписку и сумму задолженности',
  'адрес объекта, номер обращения, ответ организации и фотографии',
  'файл договора или акта без лишних персональных данных',
  'Черновик претензии или список вопросов специалисту',
  'Список фактов и вопросов для консультации',
  'Основа претензии и перечень доказательств',
  'Черновик жалобы или план обращения',
  'Сводка условий и зон внимания для проверки',
];

for (const fragment of required) {
  assert.match(page, new RegExp(fragment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')), `Scenario CTA path must include: ${fragment}`);
}

const genericBotLinks = [...page.matchAll(/href=\{site\.botUrl\}>Открыть в боте/g)];
assert.equal(genericBotLinks.length, 0, 'Scenario cards must not use generic “Открыть в боте” links only');

const scenarioIndex = page.indexOf('id="situations"');
const featuresIndex = page.indexOf('id="features"');
const pathIndex = page.indexOf('Что нажать в боте');
assert.ok(scenarioIndex !== -1 && featuresIndex !== -1 && pathIndex !== -1, 'Scenario path block must exist between situations and features');
assert.ok(scenarioIndex < pathIndex && pathIndex < featuresIndex, 'Scenario path details must stay in the situations block before features');

const pathsStart = page.indexOf('const scenarioPaths = [');
const pathsEnd = page.indexOf('const pricingChoices = [');
const scenarioPathsSource = page.slice(pathsStart, pathsEnd);

for (const forbidden of [
  /гарантируем/i,
  /выигра[еє]те/i,
  /точн(о|ый) результат/i,
  /юридическое заключение/i,
]) {
  assert.doesNotMatch(scenarioPathsSource, forbidden, `Scenario CTA path must avoid unsafe promise: ${forbidden}`);
}

console.log('scenario cta paths contract ok');
