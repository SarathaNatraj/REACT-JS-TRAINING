/*

The checkPassword() function should accept password as input and check if it is valid.

The validation criteria for password are:
- should have minimum 6 characters and maximum 20 characters
- should have at least one lower-case and one upper-case alphabet
- should have at least one digit
- should have at least one symbol

The function should return true if validation criteria is satisfied else should return false.

Use Regular Expression to perform validation check.

*/


/*

function checkPassword(password: string): boolean {
    // Regular expression for password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,20}$/;

    // Test the password against the regex
    return passwordRegex.test(password);
}

// Example usage
const validPassword = checkPassword("Passw0rd!");
console.log(`Is password valid: ${validPassword}`); // Outputs: Is password valid: true

const invalidPassword = checkPassword("password");
console.log(`Is password valid: ${invalidPassword}`); // Outputs: Is password valid: false

const anotherInvalidPassword = checkPassword("P@ss");
console.log(`Is password valid: ${anotherInvalidPassword}`); // Outputs: Is password valid: false




*/