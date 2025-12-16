import { test, expect } from '@playwright/test';

test('About Us modal opens', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  await page.getByRole('link', { name: 'About us' }).click();

  await expect(page.locator('#videoModal')).toBeVisible();

  await expect(page.locator('#videoModal').getByRole('heading', { name: 'About us' })).toBeVisible();
});

test('About Us modal closes', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  await page.getByRole('link', { name: 'About us' }).click();

  await expect(page.locator('#videoModal')).toBeVisible();

  await page.locator('#videoModal .btn.btn-secondary').click();

  await expect(page.locator('#videoModal')).toBeHidden();
});

test('About Us modal has video element', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  await page.getByRole('link', { name: 'About us' }).click();

  const videoElement = page.locator('#videoModal .video-js');

  await expect(videoElement).toBeVisible();
});


test('About Us modal closes with x button', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  await page.getByRole('link', { name: 'About us' }).click();
  await expect(page.locator('#videoModal')).toBeVisible();

  await page.locator('#videoModal .close').click();

  await expect(page.locator('#videoModal')).toBeHidden();
});

  





