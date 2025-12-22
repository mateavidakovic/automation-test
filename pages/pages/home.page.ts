import { expect, Locator, Page } from '@playwright/test';

export class DemoblazeHomePage {
    readonly page: Page;
    readonly cartLink: Locator;
    readonly loginLink: Locator;
    readonly aboutUsLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartLink = page.locator('#cartur');
        this.loginLink = page.getByRole('link', { name: 'Log in'});
        this.aboutUsLink = page.getByRole('link', { name: 'About us' });
    }

    async goto() {
    await this.page.goto('https://www.demoblaze.com/index.html', { waitUntil: 'domcontentloaded' });
  }

}