import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly homeLink: Locator;
    readonly phonesLink: Locator;
    readonly laptopsLink: Locator;
    readonly categoriesText: Locator;
    readonly navbar: Locator;
    readonly loginLink: Locator;
    readonly signupLink: Locator;
    readonly productTitles: Locator;

    constructor(page: Page) {
      this.page = page;

      this.homeLink = page.getByRole('link', { name: 'Home' });
      this.phonesLink = page.getByRole('link', { name: 'Phones' });
      this.laptopsLink = page.getByRole('link', { name: 'Laptops' });
      this.categoriesText = page.getByText(/categories/i);
      this.navbar = page.locator('#navbarExample');
      this.loginLink = page.getByRole('link', { name: 'Log in' });
      this.signupLink = page.getByRole('link', { name: 'Sign up' });
      this.productTitles = page.locator('.card-title');
  }

    async goto() {
    await this.page.goto('https://www.demoblaze.com/index.html', { waitUntil: 'domcontentloaded' });
  }
  
    async clickHome() {
    await this.homeLink.click();
  }

    async filterByPhones() {
    await this.phonesLink.click();
  }

    async filterByLaptops() {
    await this.laptopsLink.click();
  }

    async expectMainElementsVisible() {
      await expect.soft(this.navbar).toBeVisible();
      await expect.soft(this.categoriesText).toBeVisible();
      await expect.soft(this.loginLink).toBeVisible();
      await expect.soft(this.signupLink).toBeVisible();
  }

    async expectProductsVisible() {
      await expect.soft(this.productTitles.first()).toBeVisible();
  }

}