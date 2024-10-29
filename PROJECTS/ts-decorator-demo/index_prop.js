"use strict";
//you can reference the type of an object property using the square bracket notation.
function getProperty(o, propertyName) {
    return o[propertyName]; // o[propertyName] is of type T[K] - index property
}
const test = { propA: 1, propB: "b" };
console.log(getProperty(test, "propA")); //  1 test["propA"]
console.log(getProperty(test, "propB")); // b test["propB"]
let s = { 'enabled': true, 'maximized': false };
console.log(s);
console.log(s['maximized']);
let s1 = { screenName: "main" };
s1["enabled"] = true;
s1["maximized"] = false;
s1["width"] = 300;
s1["height"] = 200;
console.log(s1);
