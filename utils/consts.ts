export const RABATA_URL = 'https://rabata.io/';

export const EXPECTED_SIGNUP_URL_REGEX = /.*signup/;

export const EXPECTED_CONFIRMATION_TEXT = "Please confirm your e-mail address";

export const PRIVACY_POLICY_TEXT = `
    This Privacy Policy (the “Policy”) describes how the Rabata Technologies LLC (US) & Rabata Technologies LP (EU) (for more details,
    see “Contact Information” below) (“Rabata,” “we,” “our” or “us”) collect, use, and share information in connection with your use 
    of our websites (the “Sites”), as well as any products, services, and/or applications available on or through the Sites 
    (collectively, the “Services”). However, this Policy does not apply to information customers or users (“users”, “you,” or “your”)
    may process when using our Services.
`.trim();


/*
    This object could be used as a possible test data which I used first time to check. 
    Later data, which should not be random could be stored in a same way.
*/
export const TEST_DATA_REGISTRATION1 = {
    name:'test testov',
    email: 'test@testmail.com',
    password:'AAAqwe1[]'
}