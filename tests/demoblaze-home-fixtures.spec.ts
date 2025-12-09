import { expect } from '@playwright/test';
import { test } from './fixtures/basePage';

test ('Welcome label should contain username', async ({ homePage, page }) => {
    await homePage.goto();

    await page.getByRole('link' , { name: 'Log in'}).click();
    await page.fill('#loginusername', 'mvidakovic');
    await page.fill('#loginpassword', 'password');
    await page.getByRole('button', {name: 'Log in'}).click();

    await homePage.expectWelcomeUser('mvidakovic');

});