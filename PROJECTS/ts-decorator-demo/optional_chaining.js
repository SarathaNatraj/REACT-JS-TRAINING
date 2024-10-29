"use strict";
//optional chaining is defined as the ability to immediately stop running an expression if a part of 
//it evaluates to either null or undefined. It was introduced in TypeScript 3.7 with the ?. operator.
// ? .
var _a, _b, _c, _d, _e, _f;
const users = [{
        id: 1,
        name: {
            firstName: "GeeksforGeeks"
        }
    },
    {
        id: 2,
        name: {
            firstName: "Hello",
            lastName: "World"
        }
    },
    {
        id: 3
    },
];
users.map(element => { var _a; return console.log((_a = element.name) === null || _a === void 0 ? void 0 : _a.lastName); });
let person_one = {
    name: "Suraj Kumar",
    details: {
        age: 20,
        location: "Noida"
    }
};
let person_two = {
    name: "Gowtham Ranganathan",
    details: {
        location: "Noida"
    }
};
let person_three = {
    name: "Prasanna Kumar Reddy",
    details: {
        age: 20,
    }
};
let data_1 = person_one.name + " "
    + ((_a = person_one.details) === null || _a === void 0 ? void 0 : _a.age) + " "
    + ((_b = person_one.details) === null || _b === void 0 ? void 0 : _b.location);
console.log(data_1);
let data_2 = person_two.name + " "
    + ((_c = person_two.details) === null || _c === void 0 ? void 0 : _c.age) + " "
    + ((_d = person_two.details) === null || _d === void 0 ? void 0 : _d.location);
console.log(data_2);
let data_3 = person_three.name + " "
    + ((_e = person_three.details) === null || _e === void 0 ? void 0 : _e.age) + " "
    + ((_f = person_three.details) === null || _f === void 0 ? void 0 : _f.location);
console.log(data_3);
