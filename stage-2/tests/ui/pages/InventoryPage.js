export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.inventoryList = '.inventory_list';
    this.cartBadge = '.shopping_cart_badge';
    this.cartLink = '.shopping_cart_link';
  }

  addToCartButton(productId) {
    return `[data-test="add-to-cart-${productId}"]`;
  }

  removeFromCartButton(productId) {
    return `[data-test="remove-${productId}"]`;
  }

  async removeProductFromCart(productId) {
    await this.page.click(this.removeFromCartButton(productId));
  }
  async waitForPage() {
    await this.page.locator(this.inventoryList).waitFor();
  }

  async addProductToCart(productId) {
    await this.page.click(this.addToCartButton(productId));
  }

  async openCart() {
    await this.page.click(this.cartLink);
  }
}
