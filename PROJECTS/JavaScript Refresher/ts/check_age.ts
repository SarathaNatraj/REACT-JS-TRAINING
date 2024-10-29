/*

The checkEligibility() function should accept age as input and check for eligibility to vote

The validity criteria for age is 18 and above.

The function should return true if eligibility criteria is satisfied else should retun false.

The function should return error message "Invalid Age Input, Age Should Only Be Number !!", 
for any non-numeric value passed to the function.

*/

/*


function checkEligibility(age: any): boolean | string {
    // Check if the input is a number
    if (typeof age !== 'number') {
        return "Invalid Age Input, Age Should Only Be Number !!";
    }

    // Check eligibility criteria
    return age >= 18;
}

// Example usage
const eligible = checkEligibility(20);
console.log(`Is eligible to vote: ${eligible}`); // Outputs: Is eligible to vote: true

const notEligible = checkEligibility(16);
console.log(`Is eligible to vote: ${notEligible}`); // Outputs: Is eligible to vote: false

// Example of invalid input
const invalidInput = checkEligibility("18" as any); // Passing a string instead of a number
console.log(invalidInput); // Outputs: Invalid Age Input, Age Should Only Be Number !!


*/