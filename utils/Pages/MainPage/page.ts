import { Locator, Page } from "playwright";
import { mainPageLocators } from "../selectors";
export class MainPage{
    readonly page: Page
    readonly signUpButtonLocator: Locator;
    readonly tryForFreeButtonLocator: Locator;
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
}
