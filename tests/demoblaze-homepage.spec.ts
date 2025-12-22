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

test('main elements are visible', async ({ page }) => {
  await page.goto('https://www.demoblaze.com');

  await expect(page.locator('#navbarExample')).toBeVisible();
  await expect(page.getByText('CATEGORIES')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Sign up' })).toBeVisible();
});

test('Phones filter displays phone products', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  await page.getByRole('link', { name: 'Phones' }).click();

  const products = page.locator('.card-title');
  await expect(products.first()).toBeVisible();
})

test('Laptops filter displays laptop products', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  await page.getByRole('link', { name: 'Laptops' }).click();

  const products = page.locator('.card-title');
  await expect(products.first()).toBeVisible();
});

test ('Phones link has display:flex' , async ({ page }) => {
  await page.goto( 'https://www.demoblaze.com/index.html' );

  const phonesLink = page.getByRole('link', { name: 'Phones' });
  await expect(phonesLink).toHaveCSS('display', 'flex');
});

test('Home link has correct color', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  const homeLink = page.getByRole('link', { name: 'Home' });
  await expect(homeLink).toHaveCSS('color', 'rgb(255, 255, 255)');
});


import { DemoblazeHomePage } from '../pages/pages/home.page';

test('Home page: Cart link is visible', async ({ page }) => {
  const home = new DemoblazeHomePage(page);

  await home.goto();
  await expect(home.cartLink).toBeVisible();
});

test('Home page: can open Login modal', async ({ page }) => {
  const home = new DemoblazeHomePage(page);

  await home.goto();
  await home.loginLink.click();

  await expect(page.locator('#logInModal')).toBeVisible();
});
