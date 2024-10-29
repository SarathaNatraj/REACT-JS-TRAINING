//The nullish coalescing operator is written as two question marks ??.

let firstName = "Gowtham";
let lastName = null;
let nickName = "Supercoder";
//let nickName = null;

// shows the first defined value: - until gets the defined value, search continues
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder

// shows the first truthy value: ?? replaces with ||
console.log(firstName || lastName || nickName || "Anonymous"); // Supercoder

//The important difference between them is that:
//|| returns the first truthy value.
//?? returns the first defined value.


const foo = { someFooProp: "null" };
//?:  lenth : 0

console.log(foo.someFooProp?.toUpperCase() ?? "not available"); // "HI"




let height = 10;

console.log(height || 100); // 100 // false ||  true -> true 
console.log(height ?? 100); // 0 // true && true -> true

// The height || 100 checks height for being a falsy value, and it’s 0, falsy indeed.
// so the result of || is the second argument, 100.
// The height ?? 100 checks height for being null/undefined, and it’s not,
// so the result is height “as is”, that is 0.


