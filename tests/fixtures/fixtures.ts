import { test as base } from '@playwright/test';
import { HomePage } from '../../pages/pages/home.page';
import { ContactPage } from '../../pages/pages/contact.page';
import { LoginPage } from '../../pages/pages/login.page';
import { CartPage } from '../../pages/pages/cart.page';
import { AboutPage } from '../../pages/pages/aboutus.page';

type Pages = {
    homePage: HomePage;
    contactPage: ContactPage;
    loginPage: LoginPage;
    cartPage: CartPage;
    aboutPage: AboutPage;
};

export const test = base.extend<Pages> ({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    contactPage: async ({ page }, use) => {
        await use(new ContactPage (page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage (page));
    },
    cartPage: async ({ page }, use) => {
        await use (new CartPage(page));
    },
    aboutPage: async ({ page }, use) => {
        await use(new AboutPage(page));
    },

});

export { expect } from '@playwright/test';