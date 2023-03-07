import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/en');

  await expect(page).toHaveTitle(/Landing/);
});

test('contains text', async ({ page }) => {
  await page.goto('/en');

  await expect(page.getByText('Hello, World!')).toBeVisible();
});
