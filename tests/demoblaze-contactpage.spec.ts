import { test, expect } from '@playwright/test';

test('Contact modal opens', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  await page.getByRole('link', { name: 'Contact' }).click();

  await expect(page.locator('#recipient-email')).toBeVisible();
  await expect(page.locator('#recipient-name')).toBeVisible();
  await expect(page.locator('#message-text')).toBeVisible();
});

test('Contact modal closes', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  await page.getByRole('link', { name: 'Contact' }).click();

  await expect(page.locator('#exampleModal')).toBeVisible();
  await page.locator('#exampleModal .btn.btn-secondary').click();
  await expect(page.locator('#exampleModal')).toBeHidden();
});

test('Contact modal has correct title', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');

    await page.getByRole('link', { name: 'Contact' }).click();

    await expect(page.getByText('New message')).toBeVisible();
});

test('Contact modal fields are correct', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');

    await page.getByRole('link', { name: 'Contact' }).click();

    const emailInput = page.locator('#recipient-email');
    const nameInput = page.locator('#recipient-name');
    const messageBox = page.locator('#message-text');

    await expect(emailInput).toHaveAttribute('id', 'recipient-email');
    await expect(nameInput).toHaveAttribute('id', 'recipient-name');
    await expect(messageBox).toHaveAttribute('id', 'message-text');

});

test('Send message can be clicked', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');

    await page.getByRole('link', { name: 'Contact' }).click();

    page.once('dialog', (dialog) => dialog.accept());
    await page.getByRole('button', { name: 'Send message' }).click();
});




