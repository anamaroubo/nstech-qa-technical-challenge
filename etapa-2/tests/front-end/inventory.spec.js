import { test, expect } from '@playwright/test';
import { login } from './utils/auth';
import { InventoryPage } from './pages/InventoryPage';

test.describe('Fluxos de inventário', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);
  });

  test('Ordenar produtos por preço crescente', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    await inventoryPage.waitForPage();
    const sortSelect = page.locator('.product_sort_container');
    await expect(sortSelect).toBeVisible();
    await sortSelect.selectOption('lohi');
    const priceLocator = page.locator('.inventory_item_price');
    await expect(priceLocator.first()).toBeVisible();
    const prices = await priceLocator.allTextContents();
    const pricesNumber = prices.map(p => Number(p.replace('$', '').trim()));
    const sortedPrices = [...pricesNumber].sort((a, b) => a - b);
    expect(pricesNumber).toEqual(sortedPrices);
  });
});
