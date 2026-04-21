import { test, expect } from '@playwright/test';
import { login } from './utils/auth';
import { InventoryPage } from './pages/InventoryPage';

test.describe('Fluxos de produtos', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test('Ordenar produtos por preço crescente', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.waitForPage();
    await expect(inventoryPage.sortSelect).toBeVisible();

    await inventoryPage.sortBy('lohi');

    const firstPrice = inventoryPage.productPrice.first();
    await expect(firstPrice).toBeVisible();

    const prices = await inventoryPage.productPrice.allTextContents();
    const pricesNumber = prices.map((price) =>
      Number(price.replace('$', '').trim())
    );

    const sortedPrices = [...pricesNumber].sort((a, b) => a - b);

    expect(pricesNumber).toEqual(sortedPrices);
  });

  test('Ordenação mantém consistência após interação', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.waitForPage();

    await inventoryPage.sortBy('lohi');

    await inventoryPage.addProductToCart('sauce-labs-onesie');

    const prices = await inventoryPage.productPrice.allTextContents();
    const pricesNumber = prices.map((price) =>
      Number(price.replace('$', '').trim())
    );

    const minPrice = Math.min(...pricesNumber);
    expect(pricesNumber[0]).toBe(minPrice);

    const sortedPrices = [...pricesNumber].sort((a, b) => a - b);
    expect(pricesNumber).toEqual(sortedPrices);
  });

  test('Manter sessão após refresh', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.waitForPage();
    await page.reload();

    await inventoryPage.waitForPage();
    await expect(inventoryPage.inventoryList).toBeVisible();
  });
});
