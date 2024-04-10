export function generateRandomValue(min: number, max: number): string {
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomValue.toString();
}

export function generateRandomName(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function generateRandomEmail(): string {
    const domains = ["example.com", "mail.com", "test.org", "sample.net"];
    const domain = domains[Math.floor(Math.random() * domains.length)];
    return `${generateRandomName(10)}@${domain}`;
}

export function generateRandomPassword(): string {
    const length = 8;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#%!_}{[]";
    let retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }

    // Ensure the password contains at least one uppercase letter, one special character, and one number
    retVal += 'A';
    retVal += '0';
    retVal += '$';

    return retVal;
}