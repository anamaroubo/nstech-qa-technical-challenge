export class CartPage {
  constructor(page) {
    this.page = page;

    this.cartItems = page.locator('[data-test="inventory-item"]');
    this.productNames = page.locator('[data-test="inventory-item-name"]');
    this.continueShoppingButton = page.locator(
      '[data-test="continue-shopping"]'
    );
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async removeItem(productId) {
    await this.page.click(`[data-test="remove-${productId}"]`);
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }

  async goToCheckout() {
    await this.checkoutButton.click();
  }
}
