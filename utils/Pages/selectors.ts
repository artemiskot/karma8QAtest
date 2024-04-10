export const mainPageLocators = {
    signUpClass: 'header >> .header-signup:has-text("Sign Up")',
    tryForFreeButtonText: 'text="Try it for free"'
}

export const authorizationPageLocators = {
    nameInputId:'#registration_form_fullName',
    emailInputId:'#registration_form_email',
    passwordInputId:'#registration_form_plainPassword_first',
    confirmPasswordInputId: '#registration_form_plainPassword_second',
    agreeTermsCheckboxLabel:'label[for="registration_form_agreeTerms"]',
    signUpButtonText:'button:has-text("Sign up")'
}