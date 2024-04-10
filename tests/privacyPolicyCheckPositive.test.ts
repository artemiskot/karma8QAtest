import { test, expect } from '@playwright/test';
import { MainPage } from '@utils/Pages/MainPage/page';
import { AuthorizationPage } from '@utils/Pages/AuthorizationPage/page';
import { EXPECTED_CONFIRMATION_TEXT, EXPECTED_SIGNUP_URL_REGEX, RABATA_URL, TEST_DATA_REGISTRATION1 } from '@utils/consts';

test.describe('Register user', () => {
  let page;
  let mainPage: MainPage;
  let authPage: AuthorizationPage;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    mainPage = new MainPage(page);
    authPage = new AuthorizationPage(page);
  });

  test('should navigate to rabata.io, click on sign up and register', async () => {
    await test.step('Go to rabata page', async () => {
      await page.goto(RABATA_URL);
    });

    await test.step('Click privacy policy button', async () => {
        await mainPage.clickPrivacyPolicy();
      });
  });

  test.afterAll(async () => {
    await page.close();
  });
});
