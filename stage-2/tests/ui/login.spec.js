import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';

test.describe('Fluxos de login', () => {
  test('Login com credenciais válidas', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
  });

  test('Impedir login com usuário bloqueado', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');
    await expect(loginPage.getErrorMessage()).toHaveText(
      'Epic sadface: Sorry, this user has been locked out.'
    );

    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

  test('Exibir erro ao realizar login com credenciais inválidas', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('usuario_invalido', 'senha_invalida');
    await expect(loginPage.getErrorMessage()).toHaveText(
      'Epic sadface: Username and password do not match any user in this service'
    );

    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

  test('Realizar logout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.locator('[data-test="username"]')).toBeVisible();
  });

  test('Impedir acesso direto à página de produtos sem login', async ({
    page,
  }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');

    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  });

  test('Impedir acesso à área autenticada após logout', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');

    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.locator('[data-test="username"]')).toBeVisible();

    await page.goto('https://www.saucedemo.com/inventory.html');

    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
  });
});
