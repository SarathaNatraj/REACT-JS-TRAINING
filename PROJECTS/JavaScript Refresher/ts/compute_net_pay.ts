/*

The calculateNetPayable() function should accept 3 inputs:
pricePerKilo, quantityInKilo and discountPercentage.

Calculate the net amount post discount that would be payable.

The function should return the computed value.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type Number !!", 
for any non-numeric value passed to the function.

*/

/*

function calculateNetPayable(
    pricePerKilo: number,
    quantityInKilo: number,
    discountPercentage: number
): number | string {
    // Check if all inputs are of type number
    if (typeof pricePerKilo !== 'number' || typeof quantityInKilo !== 'number' || typeof discountPercentage !== 'number') {
        return "Invalid Input Types, All Inputs Should Be of Type Number !!";
    }

    // Calculate the total price
    const totalPrice = pricePerKilo * quantityInKilo;

    // Calculate the discount amount
    const discountAmount = (totalPrice * discountPercentage) / 100;

    // Calculate net payable amount
    const netPayable = totalPrice - discountAmount;

    return netPayable;
}

// Example usage
const netPayable = calculateNetPayable(10, 5, 20);
console.log(`Net Payable: ${netPayable}`); // Outputs: Net Payable: 40

// Example of invalid input
const invalidInput = calculateNetPayable(10, "5" as any, 20); // Passing a string instead of a number
console.log(invalidInput); // Outputs: Invalid Input Types, All Inputs Should Be of Type Number !!


*/