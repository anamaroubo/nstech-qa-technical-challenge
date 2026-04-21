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

    await expect(checkoutPage.successMessage).toHaveText(
      'Thank you for your order!'
    );
    await expect(checkoutPage.cartBadge).not.toBeVisible();
  });

  test('Validar campos obrigatórios no checkout', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const checkoutPage = new CheckoutPage(page);

    await inventoryPage.waitForPage();
    await inventoryPage.addProductToCart('sauce-labs-backpack');
    await inventoryPage.openCart();
    await checkoutPage.startCheckout();

    await checkoutPage.continue();
    await expect(checkoutPage.errorMessage).toHaveText(
      'Error: First Name is required'
    );

    await checkoutPage.firstNameInput.fill('Ana');
    await checkoutPage.continue();
    await expect(checkoutPage.errorMessage).toHaveText(
      'Error: Last Name is required'
    );

    await checkoutPage.lastNameInput.fill('Paula');
    await checkoutPage.continue();
    await expect(checkoutPage.errorMessage).toHaveText(
      'Error: Postal Code is required'
    );
  });

  test('Comportamento do checkout com carrinho vazio', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const checkoutPage = new CheckoutPage(page);

    await inventoryPage.waitForPage();
    await inventoryPage.openCart();

    await expect(inventoryPage.cartItems).toHaveCount(0);

    await checkoutPage.startCheckout();

    await expect(checkoutPage.continueButton).toBeVisible();
  });
});
