import { test, expect } from '@playwright/test';

test('Contact modal opens', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  await page.getByRole('link', { name: 'Contact' }).click();

  await expect(page.locator('#recipient-email')).toBeVisible();
  await expect(page.locator('#recipient-name')).toBeVisible();
  await expect(page.locator('#message-text')).toBeVisible();
});

test('Contact modal closes', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  await page.getByRole('link', { name: 'Contact' }).click();

  await expect(page.locator('#exampleModal')).toBeVisible();
  await page.locator('#exampleModal .btn.btn-secondary').click();
  await expect(page.locator('#exampleModal')).toBeHidden();
});
