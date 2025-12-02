import { test, expect } from '@playwright/test';
test ('has title' , async ({ page }) => {
    await page.goto( 'https://www.demoblaze.com/index.html' );

    // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Store/);
})

test('can open home page', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  // Click the home link.
  await page.getByRole('link', { name: 'Home ' }).click();

  // Expects page to have a Categories.
  await expect(page.getByText('Categories')).toBeVisible();
});
// test save