import { type Locator, type Page, expect } from '@playwright/test';

export class DemoblazeHomePage {
  readonly page: Page;
  readonly welcomeUser: Locator;

  constructor(page: Page) {
    this.page = page;
    this.welcomeUser = page.locator('#nameofuser');
    
  }

  async goto() {
    await this.page.goto('https://www.demoblaze.com/index.html');
  }

  async expectWelcomeUser(username: string) {
    await expect(this.welcomeUser).toContainText(`Welcome ${username}`);
  }
}

