import { test, expect } from '@playwright/test';
import { MainPage } from '@utils/Pages/MainPage/page';
import { AuthorizationPage } from '@utils/Pages/AuthorizationPage/page';
import { RABATA_URL } from '@utils/consts';
import { allure } from "allure-playwright";

test.describe('Register user', () => {
    let page;
    let mainPage: MainPage;
    let authPage: AuthorizationPage;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        mainPage = new MainPage(page);
        authPage = new AuthorizationPage(page);
    });

    test('should navigate to rabata.io, click on privacy policy', async () => {
        allure.feature('Privacy policy');
        allure.story('Check privacy policy on main page');
        await allure.step('Go to rabata page', async () => {
            await page.goto(RABATA_URL);
        });

        await allure.step('Click privacy policy button', async () => {
            await mainPage.clickPrivacyPolicy();
        });
        await allure.step('Verify privacy policy text', async () => {
            await mainPage.checkPrivacyPolicyContent();
        });

    });

    test.afterAll(async () => {
        await page.close();
    });
});
