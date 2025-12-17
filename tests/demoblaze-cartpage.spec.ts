import { test, expect } from '@playwright/test';

test('User can add a product to the cart', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  
  const samsungLink = page.getByRole('link', { name: 'Samsung galaxy s6' }).first();
  await samsungLink.click();

  page.once('dialog', dialog => dialog.accept());
  await page.getByRole('link', { name: 'Add to cart' }).click();

  await page.waitForTimeout(1000);
  
  await page.locator('#cartur').click();

  const cartTable = page.locator('#tbodyid');
  await expect(cartTable).toContainText('Samsung galaxy s6');
});

test('User can remove a product from the cart', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  const samsungLink = page.getByRole('link', { name: 'Samsung galaxy s6' }).first();
  await samsungLink.click();
  await page.waitForLoadState('domcontentloaded');

  page.once('dialog', dialog => dialog.accept());
  await page.getByRole('link', { name: 'Add to cart' }).click();

  await page.waitForTimeout(1000);

  await page.locator('#cartur').click();

  const firstRow = page.locator('#tbodyid .success').first();
  await expect(firstRow).toContainText('Samsung galaxy s6');

  await firstRow.getByText('Delete').click();

  await page.waitForTimeout(1000);

  await expect(page.locator('#tbodyid .success')).toHaveCount(0);
});


test('Cart page has main elements and headers', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
  await page.locator('#cartur').click();

  await expect(page.getByText('Products')).toBeVisible();
  await expect(page.getByText('Pic')).toBeVisible();
  await expect(page.getByText('Title')).toBeVisible();
  await expect(page.getByText('Price')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Total' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Place Order' })).toBeVisible();
});

test('Cart Products heading has correct design', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  await page.locator('#cartur').click();

  const productsHeading = page.getByRole('heading', { name: 'Products' });

  await expect(productsHeading).toBeVisible();

  await expect(productsHeading).toHaveCSS('color', 'rgb(41, 43, 44)');
  await expect(productsHeading).toHaveCSS('font-size', '32px');
  await expect(productsHeading).toHaveCSS('font-weight', '500');
});


