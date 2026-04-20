import { test, expect } from '@playwright/test';
import { login } from './utils/auth';
import { InventoryPage } from './pages/InventoryPage';
import { CheckoutPage } from './pages/CheckoutPage';

test.describe('Fluxos de checkout', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test('Finalizar compra com dados válidos', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const checkoutPage = new CheckoutPage(page);
    await inventoryPage.waitForPage();
    await inventoryPage.addProductToCart('sauce-labs-backpack');
    await inventoryPage.openCart();
    await checkoutPage.startCheckout();
    await checkoutPage.fillInformation('Ana', 'Teste', '12345');
    await checkoutPage.continue();
    await checkoutPage.finish();
    await expect(checkoutPage.getSuccessMessage()).toHaveText(
      'Thank you for your order!'
    );
  });

  test('Validar campos obrigatórios no checkout', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const checkoutPage = new CheckoutPage(page);
    await inventoryPage.waitForPage();
    await inventoryPage.addProductToCart('sauce-labs-backpack');
    await inventoryPage.openCart();
    await checkoutPage.startCheckout();
    await checkoutPage.continue();
    await expect(checkoutPage.getErrorMessage()).toHaveText(
      'Error: First Name is required'
    );

    await expect(page).toHaveURL(/checkout-step-one/);
  });

  test('Comportamento do checkout com carrinho vazio', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.waitForPage();
    await inventoryPage.openCart();

    await expect(page.locator('.cart_item')).toHaveCount(0);

    await page.click('[data-test="checkout"]');

    await expect(page).toHaveURL(/checkout-step-one/);
    await expect(page.locator('[data-test="continue"]')).toBeVisible();
  });
});
