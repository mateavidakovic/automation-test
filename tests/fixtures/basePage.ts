import { test as base } from '@playwright/test';
import { DemoblazeHomePage} from '../../pages/pages/demoblaze-home-page';

export const test = base.extend<{
  homePage: DemoblazeHomePage;
}>({
  homePage: async ({ page }, use) => {
    const home = new DemoblazeHomePage(page);
    await use(home);
  },
});