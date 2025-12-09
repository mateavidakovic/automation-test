import { test, expect } from '@playwright/test';

test('Demoblaze home screenshot', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await expect(page).toHaveScreenshot();
})