import { Locator, Page } from "playwright";
import { mainPageLocators } from "../selectors";
export class MainPage{
    readonly page: Page
    readonly signUpButtonLocator: Locator;
    readonly tryForFreeButtonLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signUpButtonLocator = page.locator(mainPageLocators.signUpClass);
        this.tryForFreeButtonLocator = page.locator(mainPageLocators.tryForFreeButtonText);
    }

    async clickSignUp() {
        await this.signUpButtonLocator.click();
    }

    async clickTryForFree() {
        await this.tryForFreeButtonLocator.click();
    }    
}
