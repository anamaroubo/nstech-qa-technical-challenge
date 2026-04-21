export class InventoryPage {
  constructor(page) {
    this.page = page;

    this.inventoryList = page.locator('[data-test="inventory-list"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
    this.sortSelect = page.locator('[data-test="product-sort-container"]');
    this.productPrice = page.locator('[data-test="inventory-item-price"]');
    this.productName = page.locator('[data-test="inventory-item-name"]');
    this.cartItems = page.locator('[data-test="inventory-item"]');
  }

  getAddToCartBtn(productId) {
    return this.page.locator(`[data-test="add-to-cart-${productId}"]`);
  }

  getRemoveFromCartBtn(productId) {
    return this.page.locator(`[data-test="remove-${productId}"]`);
  }

  async waitForPage() {
    await this.inventoryList.waitFor();
  }

  async addProductToCart(productId) {
    await this.getAddToCartBtn(productId).click();
  }

  async removeProductFromCart(productId) {
    await this.getRemoveFromCartBtn(productId).click();
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async sortBy(value) {
    await this.sortSelect.selectOption(value);
  }
}
