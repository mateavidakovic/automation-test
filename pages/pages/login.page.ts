import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly loginLink: Locator;
  readonly loginModal: Locator;
  readonly loginModalHeader: Locator;
  readonly loginHeading: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.loginLink = page.getByRole('link', { name: 'Log in' });
    this.loginModal = page.locator('#logInModal');

    this.loginModalHeader = page.locator('#logInModal .modal-header');
    this.loginHeading = this.loginModal.getByRole('heading', { name: 'Log in' });

    this.usernameInput = page.locator('#loginusername');
    this.passwordInput = page.locator('#loginpassword');
    this.loginButton = this.loginModal.getByRole('button', { name: 'Log in' });
  }

  async goto() {
    await this.page.goto('https://www.demoblaze.com/index.html', {
      waitUntil: 'domcontentloaded',
    });
  }

  async openLoginModal() {
    await this.loginLink.click();
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async fillCredentials(username: string, password: string) {
    await this.fillUsername(username);
    await this.fillPassword(password);
  }

  async clickLoginAndAcceptDialog(expectedMessage: string) {
    this.page.once('dialog', async (dialog) => {
      expect(dialog.message()).toBe(expectedMessage);
      await dialog.accept();
    });

    await this.clickLogin();
  }

  async expectModalVisible() {
    await expect.soft(this.loginModal).toBeVisible();
  }

  async expectFieldsVisible() {
    await expect.soft(this.loginHeading).toBeVisible();
    await expect.soft(this.usernameInput).toBeVisible();
    await expect.soft(this.passwordInput).toBeVisible();
    await expect.soft(this.loginButton).toBeVisible();
  }

  async expectWelcomeText(username: string) {
    await expect
      .soft(this.page.getByText(`Welcome ${username}`, { exact: false }))
      .toBeVisible();
  }

  async expectHeaderStyling() {
    await expect.soft(this.loginModalHeader).toBeVisible();
    await expect.soft(this.loginModalHeader).toHaveCSS('display', 'flex');
    await expect.soft(this.loginModalHeader).toHaveCSS('align-items', 'center');
  }
}
