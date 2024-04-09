import { Locator, Page } from "playwright";
import { mainPageLocators } from "../selectors";
export class MainPage{
    readonly page: Page
    readonly signUpButtonLocator: Locator;

    constructor(page: Page){
        this.page = page;
        this.signUpButtonLocator = page.locator('header >> .header-signup:has-text("Sign Up")');
    }

    async clickSignUp() {
        await this.signUpButtonLocator.click();
    }
    
}
