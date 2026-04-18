import { LoginPage } from '../pages/LoginPage';

export async function login(page, username = 'standard_user', password = 'secret_sauce') {
  const loginPage = new LoginPage(page);

  await loginPage.goTo();
  await loginPage.login(username, password);
}