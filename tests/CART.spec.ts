import { test, expect } from './fixtures/fixtures';

test('User can add a product to the cart', async ({ cartPage, page }) => {

  await cartPage.goto();
  await cartPage.addSamsungGalaxyS6ToCart();

  await page.waitForTimeout(1000);

  await cartPage.openCart();
  await cartPage.expectProductInCart('Samsung galaxy s6');
});

test('User can remove a product from the cart', async ({ cartPage, page }) => {

  await cartPage.goto();
  await cartPage.addSamsungGalaxyS6ToCart();

  await page.waitForTimeout(1000);

  await cartPage.openCart();
  await cartPage.expectFirstRowContains('Samsung galaxy s6');

  await cartPage.deleteFirstItem();

  await page.waitForTimeout(1000);

  await cartPage.expectCartEmpty();
});


test('Cart page has main elements and headers', async ({ cartPage }) => {

  await cartPage.goto();
  await cartPage.openCart();

  await cartPage.expectCartMainElementsVisible();
});

test('Cart Products heading has correct design', async ({ cartPage }) => {

  await cartPage.goto();
  await cartPage.openCart();

  await cartPage.expectProductsHeadingDesign();
});


