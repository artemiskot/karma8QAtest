import { Locator, Page } from "playwright";
import { mainPageLocators } from "../selectors";
import { expect } from "playwright/test";
import { PRIVACY_POLICY_TEXT } from "@utils/consts";
export class MainPage{
    readonly page: Page
    readonly signUpButtonLocator: Locator;
    readonly tryForFreeButtonLocator: Locator;
    /* 
       Potentially privacyPolicy need to move to separate footer object which will be inherited,
       but for test task i guess ok :)
    */
    readonly privacyPolicyLocator: Locator; 
    constructor(page: Page) {
        this.page = page;
        this.signUpButtonLocator = page.locator(mainPageLocators.SIGN_UP_CLASS);
        this.tryForFreeButtonLocator = page.locator(mainPageLocators.TRY_FOR_FREE_BUTTON_TEXT);
        this.privacyPolicyLocator = page.locator(mainPageLocators.PRIVACY_POLICY_TEXT)
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
}
