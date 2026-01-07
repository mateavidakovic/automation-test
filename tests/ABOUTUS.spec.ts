import { test, expect } from '@playwright/test';
import { AboutPage } from '../pages/pages/aboutus.page';

test('About Us modal opens', async ({ page }) => {
  const aboutPage = new AboutPage(page);

  await aboutPage.goto();
  await aboutPage.openAboutModal();

  await aboutPage.expectModalOpen();
  await aboutPage.expectHeadingVisible();
});

test('About Us modal closes with footer button', async ({ page }) => {
  const aboutPage = new AboutPage(page);

  await aboutPage.goto();
  await aboutPage.openAboutModal();
  await aboutPage.expectModalOpen();

  await aboutPage.closeWithFooterButton();
  await aboutPage.expectModalClosed();
});

test('About Us modal has video element', async ({ page }) => {
  const aboutPage = new AboutPage(page);

  await aboutPage.goto();
  await aboutPage.openAboutModal();

  await aboutPage.expectVideoVisible();
});


test('About Us modal closes with x button', async ({ page }) => {
  const aboutPage = new AboutPage(page);

  await aboutPage.goto();
  await aboutPage.openAboutModal();
  await aboutPage.expectModalOpen();

  await aboutPage.closeWithXButton();
  await aboutPage.expectModalClosed();
});


test('About Us modal title has correct CSS styling', async ({ page }) => {
  const aboutPage = new AboutPage(page);

  await aboutPage.goto();
  await aboutPage.openAboutModal();

  await aboutPage.expectTitleCssStyling();
});


  





