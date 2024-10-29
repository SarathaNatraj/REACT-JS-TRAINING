/*

The drawPattern() function should accept number of rows as input.

The function should return string that contains the pyramid structure for the number of rows inputted.

The pyramid structure should have the following pattern:

        *
       * *
      * * *
     * * * *
    * * * * *

The function should return error message "Invalid Input Type, Row Input Should Be of Type Number !!", 
if non-numeric value is passed to the function.

*/

/*

function drawPattern(rows: any): string | string {
    // Check if the input is a number
    if (typeof rows !== 'number') {
        return "Invalid Input Type, Row Input Should Be of Type Number !!";
    }

    let pattern = '';

    for (let i = 0; i < rows; i++) {
        // Generate leading spaces
        const spaces = ' '.repeat(rows - i - 1);
        // Generate stars
        const stars = '* '.repeat(i + 1);
        // Combine spaces and stars
        pattern += spaces + stars.trim() + '\n'; // trim to remove the trailing space
    }

    return pattern;
}

// Example usage
const pyramid = drawPattern(5);
console.log(pyramid);

Outputs:
        *
       * *
      * * *
     * * * *
    * * * * *


// Example of invalid input
const invalidInput = drawPattern("5" as any); // Passing a string instead of a number
console.log(invalidInput); // Outputs: Invalid Input Type, Row Input Should Be of Type Number !!



*/