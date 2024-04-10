import { test, expect } from '@playwright/test';
import { MainPage } from '@utils/Pages/MainPage/page';
import { AuthorizationPage } from '@utils/Pages/AuthorizationPage/page';
import { EXPECTED_CONFIRMATION_TEXT, EXPECTED_SIGNUP_URL_REGEX, RABATA_URL, TEST_DATA_REGISTRATION1 } from '@utils/consts';
import { allure } from "allure-playwright";
import { generateRandomEmail, generateRandomName, generateRandomPassword } from '@utils/functions';

test.describe('Register user', () => {
    let page;
    let mainPage: MainPage;
    let authPage: AuthorizationPage;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        mainPage = new MainPage(page);
        authPage = new AuthorizationPage(page);
    });

    test('should navigate to rabata.io, click on try for free and register', async () => {
        allure.feature('User Registration');
        allure.story('Register a new user through the try for free button');
        await allure.step('Go to rabata page', async () => {
            await page.goto(RABATA_URL);
        });

        await allure.step('Click sign up', async () => {
            await mainPage.clickTryForFree();
            await expect(page).toHaveURL(EXPECTED_SIGNUP_URL_REGEX);
        });
        
        await allure.step('Register a new user', async () => {
            let name = generateRandomName(5);
            let email = generateRandomEmail();
            let password = generateRandomPassword();
            await authPage.registerUser(name, email, password, password);
        });

        await allure.step('Verify email confirmation message', async () => {
            await expect(page.locator(`text=${EXPECTED_CONFIRMATION_TEXT}`)).toBeVisible();
        });
    });

    test.afterAll(async () => {
        await page.close();
    });
});
