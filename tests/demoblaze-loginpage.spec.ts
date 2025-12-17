import { test, expect } from '@playwright/test';

test('Log in modal opens and fields are visible', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  await page.getByRole('link', { name: 'Log in' }).click();

  const loginModal = page.locator('#logInModal');
  await expect(loginModal).toBeVisible();

  await expect(loginModal.getByRole('heading', { name: 'Log in' })).toBeVisible();
  await expect(page.locator('#loginusername')).toBeVisible();
  await expect(page.locator('#loginpassword')).toBeVisible();
  await expect(loginModal.getByRole('button', { name: 'Log in' })).toBeVisible();
});
