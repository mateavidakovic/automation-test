import { test, expect } from '@playwright/test';
import { ContactPage } from '../pages/pages/contact.page';

test('Contact modal opens', async ({ page }) => {
  const contactPage = new ContactPage(page);

  await contactPage.goto();
  await contactPage.openContactModal();

  await contactPage.expectModalFieldsVisible();
});

test('Contact modal closes', async ({ page }) => {
  const contactPage = new ContactPage(page);

  await contactPage.goto();
  await contactPage.openContactModal();

  await contactPage.expectModalOpen();
  await contactPage.closeModal();
  await contactPage.expectModalClosed();
});

test('Contact modal has correct title', async ({ page }) => {
  const contactPage = new ContactPage(page);

  await contactPage.goto();
  await contactPage.openContactModal();

  await expect.soft(contactPage.modalTitle).toBeVisible();
});

test('Contact modal fields are correct', async ({ page }) => {
  const contactPage = new ContactPage(page);

  await contactPage.goto();
  await contactPage.openContactModal();

  await expect.soft(contactPage.emailInput).toHaveAttribute('id', 'recipient-email');
  await expect.soft(contactPage.nameInput).toHaveAttribute('id', 'recipient-name');
  await expect.soft(contactPage.messageInput).toHaveAttribute('id', 'message-text');

});

test('Send message can be clicked', async ({ page }) => {
  const contactPage = new ContactPage(page);

  await contactPage.goto();
  await contactPage.openContactModal();

  await contactPage.sendMessageAcceptDialog();
});

test('Contact modal body is white', async ({ page }) => {
  const contactPage = new ContactPage(page);

  await contactPage.goto();
  await contactPage.openContactModal();
  await expect.soft(contactPage.modalBody).toHaveCSS('background-color', 'rgb(255, 255, 255)');
});

test('Send message button styling is correct', async ({ page }) => {
  const contactPage = new ContactPage(page);

  await contactPage.goto();
  await contactPage.openContactModal();

  await expect(contactPage.sendMessageButton).toHaveCSS('color', 'rgb(255, 255, 255)');
  await expect(contactPage.sendMessageButton).toHaveCSS('border-radius', '4px');
});







