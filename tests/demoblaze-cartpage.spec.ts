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
