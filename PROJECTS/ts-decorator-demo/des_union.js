"use strict";
//It means that a function can be called with an argument whose interface is any one of the interfaces in the union type. 
//A common property such as type should be included in every interface, which TypeScript uses to figure out which
// interface to validate against when accessing properties.
// Function that operates on the Discriminated Union
function calculateArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
        case 'square':
            return shape.sideLength ** 2;
        case 'triangle':
            return 0.5 * shape.base * shape.height;
        default:
            throw new Error('Unknown shape');
    }
}
// Usage
const circle = { kind: 'circle', radius: 5 };
const square = { kind: 'square', sideLength: 4 };
const triangle = { kind: 'triangle', base: 6, height: 3 };
console.log(calculateArea(circle)); // Output: 78.53981633974483
console.log(calculateArea(square)); // Output: 16
console.log(calculateArea(triangle)); // Output: 9
function AllowRestrictedArea(person) {
    //console.log(person.employeecode) //Property 'employeecode' does not exist on type 'Person'.
    if (person.type == "Employee") {
        console.log("Allowed to Employee " + person.employeecode);
        return true;
    }
    else if (person.type == "Visitor") {
        console.log("Not Allowed to Visitor " + person.visitorcode);
        return false;
    }
    else {
        console.log("Allowed to Contractors " + person.contractorcode);
        return true;
    }
}
let employee = { type: "Employee", employeecode: 1, name: "Rahul" };
AllowRestrictedArea(employee);
let vistor = { type: "Visitor", visitorcode: 1, name: "Sachin" };
AllowRestrictedArea(vistor);
let contractor = { type: "Contractor", contractorcode: 1, name: "Saurav" };
AllowRestrictedArea(contractor);
