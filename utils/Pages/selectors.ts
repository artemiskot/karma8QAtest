export const mainPageLocators = {
    SIGN_UP_CLASS: 'header >> .header-signup:has-text("Sign Up")',
    TRY_FOR_FREE_BUTTON_TEXT: 'text="Try it for free"',
    PRIVACY_POLICY_TEXT: 'text="Privacy policy"',
    TOTAL_DATA_STORED_SLIDER: '#dataApiStoredInput',
    TOTAL_DATA_STORED_VALUE: '#tbApiStored',
    MONTHLY_DOWNLOADED_DATA_SLIDER: '#dataDownloadInput',
    MONTHLY_DOWNLOADED_DATA_VALUE: '#tbDownload',
}

export const authorizationPageLocators = {
    NAME_INPUT_ID:'#registration_form_fullName',
    EMAIL_INPUT_ID:'#registration_form_email',
    PASSWORD_INPUT_ID:'#registration_form_plainPassword_first',
    CONFIRM_PASSWORD_INPUT_ID: '#registration_form_plainPassword_second',
    AGREE_TERMS_CHECKBOX_LABEL:'label[for="registration_form_agreeTerms"]',
    SIGN_UP_BUTTON_TEXT:'button:has-text("Sign up")'
}