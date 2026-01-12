import { test, expect } from './fixtures/fixtures'

test('About Us modal opens', async ({ aboutPage }) => {

  await aboutPage.goto();
  await aboutPage.openAboutModal();

  await aboutPage.expectModalOpen();
  await aboutPage.expectHeadingVisible();
});

test('About Us modal closes with footer button', async ({ aboutPage }) => {

  await aboutPage.goto();
  await aboutPage.openAboutModal();
  await aboutPage.expectModalOpen();

  await aboutPage.closeWithFooterButton();
  await aboutPage.expectModalClosed();
});

test('About Us modal has video element', async ({ aboutPage }) => {

  await aboutPage.goto();
  await aboutPage.openAboutModal();

  await aboutPage.expectVideoVisible();
});


test('About Us modal closes with x button', async ({ aboutPage }) => {

  await aboutPage.goto();
  await aboutPage.openAboutModal();
  await aboutPage.expectModalOpen();

  await aboutPage.closeWithXButton();
  await aboutPage.expectModalClosed();
});


test('About Us modal title has correct CSS styling', async ({ aboutPage }) => {

  await aboutPage.goto();
  await aboutPage.openAboutModal();

  await aboutPage.expectTitleCssStyling();
});


  





