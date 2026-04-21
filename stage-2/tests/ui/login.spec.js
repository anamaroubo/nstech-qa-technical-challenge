import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { InventoryPage } from './pages/InventoryPage';

test.describe('Fluxos de login', () => {
  test('Login com credenciais válidas', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
    await expect(inventoryPage.inventoryList).toBeVisible();
  });

  test('Impedir login com usuário bloqueado', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');

    await expect(loginPage.errorMessage).toHaveText(
      'Epic sadface: Sorry, this user has been locked out.'
    );
    await expect(loginPage.loginButton).toBeVisible();
  });

  test('Exibir erro ao realizar login com credenciais inválidas', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('usuario_invalido', 'senha_invalida');

    await expect(loginPage.errorMessage).toHaveText(
      'Epic sadface: Username and password do not match any user in this service'
    );
    await expect(loginPage.loginButton).toBeVisible();
  });

  test('Realizar logout', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await loginPage.logout();

    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

  test('Impedir acesso direto à página de produtos sem login', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);

    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(loginPage.loginButton).toBeVisible();
  });

  test('Impedir acesso à área autenticada após logout', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await loginPage.logout();

    await page.goto('https://www.saucedemo.com/inventory.html');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText(
      "You can only access '/inventory.html' when you are logged in."
    );
  });
});
