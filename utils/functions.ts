export function generateRandomValue(min: number, max: number): string {
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomValue.toString();
}