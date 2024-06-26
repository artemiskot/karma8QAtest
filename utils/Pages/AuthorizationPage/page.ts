import { Locator, Page } from "playwright";
import { authorizationPageLocators } from "../selectors";

export class AuthorizationPage {
    readonly page: Page;
    readonly fullNameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly agreeTermsCheckbox: Locator;
    readonly signUpButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.fullNameInput = page.locator(authorizationPageLocators.NAME_INPUT_ID);
        this.emailInput = page.locator(authorizationPageLocators.EMAIL_INPUT_ID);
        this.passwordInput = page.locator(authorizationPageLocators.PASSWORD_INPUT_ID);
        this.confirmPasswordInput = page.locator(authorizationPageLocators.CONFIRM_PASSWORD_INPUT_ID);
        this.agreeTermsCheckbox = page.locator(authorizationPageLocators.AGREE_TERMS_CHECKBOX_LABEL);
        this.signUpButton = page.locator(authorizationPageLocators.SIGN_UP_BUTTON_TEXT);
    }

    async enterFullName(fullName: string) {
        await this.fullNameInput.fill(fullName);
    }

    async enterEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async enterConfirmPassword(confirmPassword: string) {
        await this.confirmPasswordInput.fill(confirmPassword);
    }

    async agreeToTerms() {
        await this.agreeTermsCheckbox.click();
    }
    
    async submitRegistration() {
        await this.signUpButton.click();
    }

    async registerUser(fullName: string, email: string, password: string, confirmPassword: string) {
        await this.enterFullName(fullName);
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.enterConfirmPassword(confirmPassword);
        await this.agreeToTerms();
        await this.submitRegistration();
    }
}
