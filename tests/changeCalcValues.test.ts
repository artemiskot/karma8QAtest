import { test, expect } from '@playwright/test';
import { MainPage } from '@utils/Pages/MainPage/page';
import { RABATA_URL } from '@utils/consts';
import { generateRandomValue } from '@utils/functions'
test.describe('Slider interaction', () => {
    let page;
    let mainPage: MainPage;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        mainPage = new MainPage(page);
    });

    test('should change sliders values and verify them', async () => {
        await test.step('Go to rabata.io page', async () => {
            await page.goto(RABATA_URL);
        });

        await test.step('Change Total Data Stored slider', async () => {
            const newValue = generateRandomValue(1, 1000);
            await mainPage.setTotalDataStored(newValue);
            const value = await mainPage.getTotalDataStoredValue();
            expect(value.trim()).toBe(`${newValue}`);
        });

        await test.step('Change Monthly Downloaded Data slider', async () => {
            const newValue = generateRandomValue(1, 1000);
            await mainPage.setMonthlyDownloadedData(newValue);
            const value = await mainPage.getMonthlyDownloadedDataValue();
            expect(value.trim()).toBe(`${newValue}`);
        });
    });
    test.afterAll(async () => {
        await page.close();
    });
});
