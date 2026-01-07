import { Page, Locator, expect } from '@playwright/test';

export class AboutPage {
  readonly page: Page;
  readonly aboutUsLink: Locator;
  readonly aboutModal: Locator;
  readonly modalHeading: Locator;
  readonly closeButtonFooter: Locator; 
  readonly closeXButton: Locator;  
  readonly videoElement: Locator;
  readonly modalTitle: Locator;        

  constructor(page: Page) {
    this.page = page;
    this.aboutUsLink = page.getByRole('link', { name: 'About us' });
    this.aboutModal = page.locator('#videoModal');
    this.modalHeading = this.aboutModal.getByRole('heading', { name: 'About us' });
    this.closeButtonFooter = page.locator('#videoModal .btn.btn-secondary');
    this.closeXButton = page.locator('#videoModal .close');
    this.videoElement = page.locator('#videoModal .video-js');
    this.modalTitle = page.locator('#videoModalLabel');
  }

  async goto() {
    await this.page.goto('https://www.demoblaze.com/index.html', {
      waitUntil: 'domcontentloaded',
    });
  }

  async openAboutModal() {
    await this.aboutUsLink.click();
  }

  async closeWithFooterButton() {
    await this.closeButtonFooter.click();
  }

  async closeWithXButton() {
    await this.closeXButton.click();
  }

  async expectModalOpen() {
    await expect.soft(this.aboutModal).toBeVisible();
  }

  async expectModalClosed() {
    await expect.soft(this.aboutModal).toBeHidden();
  }

  async expectHeadingVisible() {
    await expect.soft(this.modalHeading).toBeVisible();
  }

  async expectVideoVisible() {
    await expect.soft(this.videoElement).toBeVisible();
  }

  async expectTitleCssStyling() {
    await expect(this.modalTitle).toBeVisible();

    await expect(this.modalTitle).toHaveCSS('color', 'rgb(134, 134, 136)');
    await expect(this.modalTitle).toHaveCSS('display', 'block');
    await expect(this.modalTitle).toHaveCSS('font-size', '20px');
    await expect(this.modalTitle).toHaveCSS('font-weight', '500');
    await expect(this.modalTitle).toHaveCSS('line-height', '30px');
  }
}
