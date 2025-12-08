import { test, expect } from '@playwright/test';
import { DemoblazeHomePage} from '../pages/pages/demoblaze-home-page';

test('Welcome label should contain username', async ({ page }) => {
  const home = new DemoblazeHomePage(page);

  await home.goto();

  await page.getByRole('link', { name: 'Log in' }).click();
  await page.fill('#loginusername', 'mvidakovic');
  await page.fill('#loginpassword', 'password');
  await page.getByRole('button', { name: 'Log in' }).click();
  
  const username = 'mvidakovic';
  await home.expectWelcomeUser(username);
});

