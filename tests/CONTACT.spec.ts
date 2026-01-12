import { test, expect } from './fixtures/fixtures';

test('Contact modal opens', async ({ contactPage }) => {

  await contactPage.goto();
  await contactPage.openContactModal();

  await contactPage.expectModalFieldsVisible();
});

test('Contact modal closes', async ({ contactPage }) => {

  await contactPage.goto();
  await contactPage.openContactModal();

  await contactPage.expectModalOpen();
  await contactPage.closeModal();
  await contactPage.expectModalClosed();
});

test('Contact modal has correct title', async ({ contactPage }) => {

  await contactPage.goto();
  await contactPage.openContactModal();

  await expect.soft(contactPage.modalTitle).toBeVisible();
});

test('Contact modal fields are correct', async ({ contactPage }) => {

  await contactPage.goto();
  await contactPage.openContactModal();

  await expect.soft(contactPage.emailInput).toHaveAttribute('id', 'recipient-email');
  await expect.soft(contactPage.nameInput).toHaveAttribute('id', 'recipient-name');
  await expect.soft(contactPage.messageInput).toHaveAttribute('id', 'message-text');

});

test('Send message can be clicked', async ({ contactPage }) => {

  await contactPage.goto();
  await contactPage.openContactModal();

  await contactPage.sendMessageAcceptDialog();
});

test('Contact modal body is white', async ({ contactPage }) => {

  await contactPage.goto();
  await contactPage.openContactModal();
  await expect.soft(contactPage.modalBody).toHaveCSS('background-color', 'rgb(255, 255, 255)');
});

test('Send message button styling is correct', async ({ contactPage }) => {

  await contactPage.goto();
  await contactPage.openContactModal();

  await expect(contactPage.sendMessageButton).toHaveCSS('color', 'rgb(255, 255, 255)');
  await expect(contactPage.sendMessageButton).toHaveCSS('border-radius', '4px');
});







