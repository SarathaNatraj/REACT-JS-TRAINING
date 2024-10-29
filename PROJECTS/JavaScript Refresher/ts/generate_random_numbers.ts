/*

The generateRandomNumber() function should accept min and max as range boundary values.

The function should generate a random whole number in the given range and return it.




function generateRandomNumber(min: number, max: number): number {
    // Ensure min is less than max
    if (min > max) {
        throw new Error("Min must be less than Max");
    }

    // Generate a random number within the specified range
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage
const randomNum = generateRandomNumber(1, 10);
console.log(`Random Number: ${randomNum}`);


*/