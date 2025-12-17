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

test('Empty login shows required fields alert', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  await page.getByRole('link', { name: 'Log in' }).click();
  const loginModal = page.locator('#logInModal');
  await expect(loginModal).toBeVisible();

  page.once('dialog', dialog => {
    expect(dialog.message()).toBe('Please fill out Username and Password.');
    dialog.accept();
  });

  await loginModal.getByRole('button', { name: 'Log in' }).click();

  await expect(loginModal).toBeVisible();
});
