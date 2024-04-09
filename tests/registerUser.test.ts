import { test, expect, Page } from '@playwright/test';
import { MainPage } from '@utils/Pages/MainPage/page';

test('Register user', async ({ browser  }) => {
    let page: Page;
    let mainPage: MainPage;
    test.beforeAll(async () => {
        page = await browser.newPage();
        mainPage = new MainPage(page);
    })
    test('Click sign up button on main page', async ({ }, testInfo) => {
        await test.step('Click sign up', async () => {
            
        })
    })
});