import { Locator, Page } from "playwright";
import { mainPageLocators } from "../selectors";
import { expect } from "playwright/test";
import { PRIVACY_POLICY_TEXT } from "@utils/consts";
export class MainPage {
    readonly page: Page
    readonly signUpButtonLocator: Locator;
    readonly tryForFreeButtonLocator: Locator;
    /* 
       Potentially privacyPolicy need to move to separate footer object which will be inherited,
       but for test task i guess ok :)
    */
    readonly privacyPolicyLocator: Locator;
    readonly totalDataStoredSliderLocator: Locator;
    readonly totalDataStoredValueLocator: Locator;
    readonly monthlyDownloadedDataSliderLocator: Locator;
    readonly monthlyDownloadedDataValueLocator: Locator;
    constructor(page: Page) {
        this.page = page;
        this.signUpButtonLocator = page.locator(mainPageLocators.SIGN_UP_CLASS);
        this.tryForFreeButtonLocator = page.locator(mainPageLocators.TRY_FOR_FREE_BUTTON_TEXT);
        this.privacyPolicyLocator = page.locator(mainPageLocators.PRIVACY_POLICY_TEXT)
        this.totalDataStoredSliderLocator = this.page.locator(mainPageLocators.TOTAL_DATA_STORED_SLIDER);
        this.totalDataStoredValueLocator = this.page.locator(mainPageLocators.TOTAL_DATA_STORED_VALUE);
        this.monthlyDownloadedDataSliderLocator = this.page.locator(mainPageLocators.MONTHLY_DOWNLOADED_DATA_SLIDER);
        this.monthlyDownloadedDataValueLocator = this.page.locator(mainPageLocators.MONTHLY_DOWNLOADED_DATA_VALUE);
    }

    async clickSignUp() {
        await this.signUpButtonLocator.click();
    }

    async clickTryForFree() {
        await this.tryForFreeButtonLocator.click();
    }

    async clickPrivacyPolicy() {
        await this.privacyPolicyLocator.click();
    }

    async checkPrivacyPolicyContent() {
        await expect(this.page.locator(`text=${PRIVACY_POLICY_TEXT}`)).toBeVisible();
    }

    async setTotalDataStored(value: string) {
        await this.totalDataStoredSliderLocator.fill(value);
    }

    async getTotalDataStoredValue() {
        return await this.totalDataStoredValueLocator.textContent();
    }

    async setMonthlyDownloadedData(value: string) {
        await this.monthlyDownloadedDataSliderLocator.fill(value);
    }

    async getMonthlyDownloadedDataValue() {
        return await this.monthlyDownloadedDataValueLocator.textContent();
    }
}
