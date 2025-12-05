import { test, expect } from '@playwright/test';
test ('has title' , async ({ page }) => {
    await page.goto( 'https://www.demoblaze.com/index.html' );

    // Expect the title to be STORE.
  await expect(page).toHaveTitle(/STORE/);
})

test('can open home page', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  // Click the home link.
  await page.getByRole('link', { name: 'Home ' }).click();

  // Expects page to have a Categories.
  await expect(page.getByText('Categories')).toBeVisible();
});

test ('Phones link has display:flex' , async ({ page }) => {
  await page.goto( 'https://www.demoblaze.com/index.html' );

  const phonesLink = page.getByRole('link', { name: 'Phones' });
  await expect(phonesLink).toHaveCSS('display', 'flex');
});