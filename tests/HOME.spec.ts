import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/pages/home.page';
test ('has title' , async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await expect.soft(page).toHaveTitle(/STORE/);
})

test('can open home page', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await homePage.clickHome();

  // Expects page to have a Categories.
  await expect.soft(page.getByText('Categories')).toBeVisible();
});

test('main elements are visible', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await homePage.expectMainElementsVisible();
});

test('Phones filter displays phone products', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await homePage.filterByPhones();
  await homePage.expectProductsVisible();
});

test('Laptops filter displays laptop products', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await homePage.filterByLaptops();
  await homePage.expectProductsVisible();
});

test ('Phones link has display:flex' , async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await expect.soft(homePage.phonesLink).toHaveCSS('display', 'flex');
});

test('Home link has correct color', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await expect.soft(homePage.homeLink).toHaveCSS('color', 'rgb(255, 255, 255)');
});

