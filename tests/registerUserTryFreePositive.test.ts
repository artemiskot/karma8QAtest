import { test, expect } from '@playwright/test';
import { MainPage } from '@utils/Pages/MainPage/page';
import { AuthorizationPage } from '@utils/Pages/AuthorizationPage/page'; // Убедитесь, что путь корректный
import { EXPECTED_CONFIRMATION_TEXT, EXPECTED_SIGNUP_URL_REGEX, rabataUrl, testDataRegistration1 } from '@utils/consts';

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
            await page.goto(rabataUrl);
        });

        await test.step('Click sign up', async () => {
            await mainPage.clickTryForFree();
            await expect(page).toHaveURL(EXPECTED_SIGNUP_URL_REGEX);
        });

        await test.step('Register a new user', async () => {
            await authPage.registerUser(testDataRegistration1.name, testDataRegistration1.email, testDataRegistration1.password, testDataRegistration1.password);
        });

        await test.step('Verify email confirmation message', async () => {
            await expect(page.locator(`text=${EXPECTED_CONFIRMATION_TEXT}`)).toBeVisible();
        });
    });

    test.afterAll(async () => {
        await page.close();
    });
});
