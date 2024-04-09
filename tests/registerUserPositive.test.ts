import { test, expect } from '@playwright/test';
import { MainPage } from '@utils/Pages/MainPage/page';
import { AuthorizationPage } from '@utils/Pages/AuthorizationPage/page'; // Убедитесь, что путь корректный
import { testDataRegistration1, url } from '@utils/consts';

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
      await page.goto(url);
    });

    await test.step('Click sign up', async () => {
      await mainPage.clickSignUp();
      await expect(page).toHaveURL(/.*signup/);
    });

    await test.step('Register a new user', async () => {
      await authPage.registerUser(testDataRegistration1.name, testDataRegistration1.email, testDataRegistration1.password, testDataRegistration1.password);
    });
    // TODO: - add validation for last page proceeding
  });

  test.afterAll(async () => {
    await page.close();
  });
});
