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


test('About Us modal title has correct CSS styling', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

 
  await page.getByRole('link', { name: 'About us' }).click();

  const aboutTitle = page.locator('#videoModalLabel');

  await expect(aboutTitle).toBeVisible();

  await expect(aboutTitle).toHaveCSS('color', 'rgb(134, 134, 136)');
  await expect(aboutTitle).toHaveCSS('display', 'block');
  await expect(aboutTitle).toHaveCSS('font-size', '20px');
  await expect(aboutTitle).toHaveCSS('font-weight', '500');
  await expect(aboutTitle).toHaveCSS('line-height', '30px');
});


  





