"use strict";
//The nullish coalescing operator is written as two question marks ??.
var _a, _b, _c, _d;
let firstName = "Gowtham";
let lastName = null;
let nickName = "Supercoder";
//let nickName = null;
// shows the first defined value: - until gets the defined value, search continues
console.log((_b = (_a = firstName !== null && firstName !== void 0 ? firstName : lastName) !== null && _a !== void 0 ? _a : nickName) !== null && _b !== void 0 ? _b : "Anonymous"); // Supercoder
// shows the first truthy value: ?? replaces with ||
console.log(firstName || lastName || nickName || "Anonymous"); // Supercoder
//The important difference between them is that:
//|| returns the first truthy value.
//?? returns the first defined value.
const foo = { someFooProp: "null" };
//?:  lenth : 0
console.log((_d = (_c = foo.someFooProp) === null || _c === void 0 ? void 0 : _c.toUpperCase()) !== null && _d !== void 0 ? _d : "not available"); // "HI"
let height = 10;
console.log(height || 100); // 100 // false ||  true -> true 
console.log(height !== null && height !== void 0 ? height : 100); // 0 // true && true -> true
// The height || 100 checks height for being a falsy value, and it’s 0, falsy indeed.
// so the result of || is the second argument, 100.
// The height ?? 100 checks height for being null/undefined, and it’s not,
// so the result is height “as is”, that is 0.
