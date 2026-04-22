import { test, expect } from '@playwright/test';
import { login } from './utils/auth';
import { InventoryPage } from './pages/InventoryPage';
import { CartPage } from './pages/CartPage';

test.describe('Fluxos de carrinho', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test('Adicionar produto ao carrinho', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.waitForPage();
    await inventoryPage.addProductToCart('sauce-labs-backpack');

    await expect(inventoryPage.cartBadge).toHaveText('1');

    await inventoryPage.openCart();

    await expect(cartPage.productNames).toHaveText('Sauce Labs Backpack');
  });

  test('Remover produto do carrinho', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.waitForPage();
    await inventoryPage.addProductToCart('sauce-labs-backpack');
    await expect(inventoryPage.cartBadge).toHaveText('1');

    await inventoryPage.removeProductFromCart('sauce-labs-backpack');
    await expect(inventoryPage.cartBadge).toHaveCount(0);

    await inventoryPage.openCart();

    await expect(cartPage.cartItems).toHaveCount(0);
  });

  test('Visualizar produtos no carrinho', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.waitForPage();
    await inventoryPage.addProductToCart('sauce-labs-backpack');
    await inventoryPage.addProductToCart('sauce-labs-bike-light');

    await inventoryPage.openCart();

    await expect(cartPage.cartItems).toHaveCount(2);
    await expect(cartPage.productNames).toContainText([
      'Sauce Labs Backpack',
      'Sauce Labs Bike Light',
    ]);
  });

  test('Manter itens no carrinho após navegação', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.waitForPage();
    await inventoryPage.addProductToCart('sauce-labs-backpack');

    await inventoryPage.openCart();
    await expect(cartPage.cartItems).toHaveCount(1);

    await cartPage.continueShopping();
    await inventoryPage.waitForPage();

    await expect(inventoryPage.cartBadge).toHaveText('1');
  });
});
