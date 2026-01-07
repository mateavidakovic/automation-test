import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;

  readonly cartLink: Locator;
  readonly samsungGalaxyS6Link: Locator;
  readonly addToCartLink: Locator;
  readonly cartTableBody: Locator;
  readonly cartRows: Locator;
  readonly firstRow: Locator;
  readonly productsHeading: Locator;
  readonly picHeader: Locator;
  readonly titleHeader: Locator;
  readonly priceHeader: Locator;
  readonly totalHeading: Locator;
  readonly placeOrderButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartLink = page.locator('#cartur');
    this.samsungGalaxyS6Link = page.getByRole('link', { name: 'Samsung galaxy s6' }).first();
    this.addToCartLink = page.getByRole('link', { name: 'Add to cart' });

    this.cartTableBody = page.locator('#tbodyid');
    this.cartRows = page.locator('#tbodyid .success');
    this.firstRow = this.cartRows.first();

    this.productsHeading = page.getByRole('heading', { name: 'Products' });
    this.picHeader = page.getByText('Pic');
    this.titleHeader = page.getByText('Title');
    this.priceHeader = page.getByText('Price');
    this.totalHeading = page.getByRole('heading', { name: 'Total' });
    this.placeOrderButton = page.getByRole('button', { name: 'Place Order' });
  }

  async goto() {
    await this.page.goto('https://www.demoblaze.com/index.html', {
      waitUntil: 'domcontentloaded',
    });
  }

  async openCart() {
    await this.cartLink.click();
  }

  async openSamsungGalaxyS6() {
    await this.samsungGalaxyS6Link.click();
  }

  async addToCartAcceptDialog() {
    this.page.once('dialog', (dialog) => dialog.accept());
    await this.addToCartLink.click();
  }

  async addSamsungGalaxyS6ToCart() {
    await this.openSamsungGalaxyS6();
    await this.addToCartAcceptDialog();
  }

  async deleteFirstItem() {
    await this.firstRow.getByText('Delete').click();
  }

  async expectProductInCart(productName: string) {
    await expect.soft(this.cartTableBody).toContainText(productName);
  }

  async expectFirstRowContains(productName: string) {
    await expect.soft(this.firstRow).toContainText(productName);
  }

  async expectCartEmpty() {
    await expect.soft(this.cartRows).toHaveCount(0);
  }

  async expectCartMainElementsVisible() {
    await expect.soft(this.productsHeading).toBeVisible();
    await expect.soft(this.picHeader).toBeVisible();
    await expect.soft(this.titleHeader).toBeVisible();
    await expect.soft(this.priceHeader).toBeVisible();
    await expect.soft(this.totalHeading).toBeVisible();
    await expect.soft(this.placeOrderButton).toBeVisible();
  }

  async expectProductsHeadingDesign() {
    await expect.soft(this.productsHeading).toBeVisible();
    await expect.soft(this.productsHeading).toHaveCSS('color', 'rgb(41, 43, 44)');
    await expect.soft(this.productsHeading).toHaveCSS('font-size', '32px');
    await expect.soft(this.productsHeading).toHaveCSS('font-weight', '500');
  }
}
