"use strict";
//In JavaScript, we often use Object.keys to get a list of property keys. In the TypeScript world, the equivalent concept is the 
//keyof operator. Although they are similar, keyof only works on the type level and returns a literal union type, 
//while Object.keys returns values.
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortByPriority = exports.TaskPriority = void 0;
//Introduced in TypeScript 2.1, the keyof operator is used so frequently that it has become a
// building block for advanced typing in TypeScript.
const userK = {
    name: 'John',
    age: 32
};
console.log(Object.keys(userK));
// output: Array ["name", "age"]
Object.keys(userK).forEach(key => {
    // console.log(userK)
    console.log(userK[key]);
}); // output: John, 32
var TaskPriority;
(function (TaskPriority) {
    TaskPriority["LOW"] = "Low";
    TaskPriority["MEDIUM"] = "Medium";
    TaskPriority["HIGH"] = "High";
})(TaskPriority || (exports.TaskPriority = TaskPriority = {}));
// Assign number as a flad to each priority status
const priorityOrder = { High: 1, Medium: 2, Low: 3 };
// sort by High > Medium > Low
const sortByPriority = (arr) => {
    const highToLow = (a, b) => {
        return (priorityOrder[a.priority] -
            priorityOrder[b.priority]);
    };
    return arr.sort(highToLow);
};
exports.sortByPriority = sortByPriority;
const tasks = [
    { title: "test1", priority: TaskPriority.MEDIUM },
    { title: "test2", priority: TaskPriority.LOW },
    { title: "test3", priority: TaskPriority.HIGH },
    { title: "test4", priority: TaskPriority.LOW }
];
const sortedArr = (0, exports.sortByPriority)(tasks);
console.log(sortedArr);
function printPersonProperty(person, property) {
    console.log(`The person's ${property} is ${person[property]}`);
}
let person = { name: "Alice", age: 25 };
printPersonProperty(person, "name"); // The person's name is Alice
printPersonProperty(person, "age"); // The person's age is 25
function getPropertyValue(obj, key) {
    return obj[key];
}
let person1 = {
    name: "Alice",
    age: 25,
    occupation: "programmer",
};
// Using the function with valid arguments
let sname = getPropertyValue(person1, "name"); // Alice
let age = getPropertyValue(person1, "age"); // 25
let occupation = getPropertyValue(person1, "occupation"); // Programmer
console.log(sname);
console.log(age);
console.log(occupation);
// Error: Type '"hobby"' is not assignable to type '"name" | "age" | "occupation"'
//let hobby = getPropertyValue(person1, "hobby"); 
