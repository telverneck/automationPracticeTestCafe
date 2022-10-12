
import { Selector } from 'testcafe'

const baseURL = `https://www.google.com.br`;

fixture `TestCafé automation test`.page `https://www.google.com.br`

test('Search Training Center on Google', async t => {
  const results = Selector('#rso');

  await t
    .typeText('[name="q"]', 'Training Center')
    .click('div[jscontroller] ul li:nth-child(1)')
    .expect( Selector('#rso h3').nth(0).innerText ).eql('Training Center - GitHub')
    .takeScreenshot()
})