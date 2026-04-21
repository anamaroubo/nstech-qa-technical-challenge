export class LoginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async openMenu() {
    await this.menuButton.click();
  }

  async logout() {
    await this.openMenu();
    await this.logoutLink.waitFor({ state: 'visible' });
    await this.logoutLink.click();
  }
}
