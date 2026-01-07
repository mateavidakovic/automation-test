import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/pages/login.page'; 

test('Log in modal opens and fields are visible', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.openLoginModal();

  await loginPage.expectModalVisible();
  await loginPage.expectFieldsVisible();
});

test('Empty login shows required fields alert', async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.goto()
  await loginPage.openLoginModal();
  await loginPage.expectModalVisible();
  await loginPage.clickLoginAndAcceptDialog('Please fill out Username and Password.');

  await loginPage.expectModalVisible();
});

test('Login with wrong password shows error alert', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.openLoginModal();
  await loginPage.expectModalVisible();

  await loginPage.fillCredentials('testsst', 'wrongpass');

  await loginPage.clickLoginAndAcceptDialog('Wrong password.');

  await loginPage.expectModalVisible();
});


test('User can successfully log in with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.openLoginModal();
  await loginPage.expectModalVisible();

  await loginPage.fillCredentials('mvidakovic', 'password');
  await loginPage.clickLogin();

  await loginPage.expectWelcomeText('mvidakovic');
});


test('Log in modal heading has correct styling', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.openLoginModal();

  await loginPage.expectHeaderStyling();
});


