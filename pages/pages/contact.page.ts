import { Locator, Page, expect } from '@playwright/test';

export class ContactPage {
  readonly page: Page;
  
  readonly contactLink: Locator;
  readonly modal: Locator;
  readonly emailInput: Locator;
  readonly nameInput: Locator;
  readonly messageInput: Locator;
  readonly sendMessageButton: Locator;
  readonly closeButton: Locator;
  readonly modalTitle: Locator;
  readonly modalBody: Locator;

  constructor(page: Page) {
    this.page = page;
    this.contactLink = page.getByRole('link', { name: 'Contact' });
    this.modal = page.locator('#exampleModal');
    this.emailInput = page.locator('#recipient-email');
    this.nameInput = page.locator('#recipient-name');
    this.messageInput = page.locator('#message-text');
    this.sendMessageButton = page.getByRole('button', { name: 'Send message' });
    this.closeButton = page.locator('#exampleModal .btn.btn-secondary');
    this.modalTitle = page.getByText('New message');
    this.modalBody = page.locator('#exampleModal .modal-content');
  }

  async goto() {
    await this.page.goto('https://www.demoblaze.com/index.html', {
      waitUntil: 'domcontentloaded',
    });
  }

  async openContactModal() {
    await this.contactLink.click();
  }

  async expectModalFieldsVisible() {
    await expect.soft(this.emailInput).toBeVisible();
    await expect.soft(this.nameInput).toBeVisible();
    await expect.soft(this.messageInput).toBeVisible();
  }

  async closeModal() {
    await this.closeButton.click();
  }

  async sendMessageAcceptDialog() {
    this.page.once('dialog', (dialog) => dialog.accept());
    await this.sendMessageButton.click();
  }

  async expectModalOpen() {
    await expect.soft(this.modal).toBeVisible();
  }

  async expectModalClosed() {
    await expect.soft(this.modal).toBeHidden();
  }



}