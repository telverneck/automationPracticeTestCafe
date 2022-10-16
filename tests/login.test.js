const { Selector } = require('testcafe');
import LoginPage from '../Pages/LoginPage';


fixture `Login Suite`.page("./");

test('Valid Login', async t => {

  LoginPage.login("standard_user", "secret_sauce")
  await t
  .expect(Selector(".title").innerText).eql("PRODUCTS")
});

test('invalid Login', async t => {

  LoginPage.login('invalid', '11111')
  await t
  .expect(Selector("h3[data-test='error']").innerText)
  .eql(
    "Epic sadface: Username and password do not match any user in this service")
});

