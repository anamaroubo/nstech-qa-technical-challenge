import { test, expect } from '@playwright/test';
import { login } from './utils/auth';
import { InventoryPage } from './pages/InventoryPage';

test.describe('Fluxos de carrinho', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

test('Adicionar produto ao carrinho', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.waitForPage();
    await inventoryPage.addProductToCart('sauce-labs-backpack');
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
    await inventoryPage.openCart();
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
  });

test('Remover produto do carrinho', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.waitForPage();
  await inventoryPage.addProductToCart('sauce-labs-backpack');
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  await inventoryPage.removeProductFromCart('sauce-labs-backpack');
  await expect(page.locator('.shopping_cart_badge')).toHaveCount(0);
  await inventoryPage.openCart();
  await expect(page.locator('.cart_item')).toHaveCount(0);
});

test('Visualizar produtos no carrinho', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.waitForPage();
  await inventoryPage.addProductToCart('sauce-labs-backpack');
  await inventoryPage.addProductToCart('sauce-labs-bike-light');
  await expect(page.locator('.shopping_cart_badge')).toHaveText('2');
  await inventoryPage.openCart();
  const itens = page.locator('.cart_item');
  await expect(itens).toHaveCount(2);
  await expect(page.locator('.inventory_item_name')).toContainText([
    'Sauce Labs Backpack',
    'Sauce Labs Bike Light'
  ]);
});
});