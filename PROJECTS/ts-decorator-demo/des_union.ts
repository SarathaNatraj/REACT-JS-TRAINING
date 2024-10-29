//It means that a function can be called with an argument whose interface is any one of the interfaces in the union type. 
//A common property such as type should be included in every interface, which TypeScript uses to figure out which
// interface to validate against when accessing properties.

// Define the types that will be part of the union
interface Circle {
    kind: 'circle';
    radius: number;
}

interface Square {
    kind: 'square';
    sideLength: number;
}

interface Triangle {
    kind: 'triangle';
    base: number;
    height: number;
}

// Combine the types into a Discriminated Union 
type Shape = Circle | Square | Triangle;

// Function that operates on the Discriminated Union
function calculateArea(shape: Shape): number {
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
const circle: Circle = { kind: 'circle', radius: 5 };
const square: Square = { kind: 'square', sideLength: 4 };
const triangle: Triangle = { kind: 'triangle', base: 6, height: 3 };

console.log(calculateArea(circle));   // Output: 78.53981633974483
console.log(calculateArea(square));   // Output: 16
console.log(calculateArea(triangle)); // Output: 9


interface Employee {
    type: "Employee"
    employeecode: number
    name:string
}
 
interface Visitor {
    type: "Visitor"
    visitorcode: number
    name:string
}
 
interface Contractor {
    type: "Contractor"
    contractorcode: number
    name:string
}
 
type PersonDes = Employee | Visitor | Contractor

function AllowRestrictedArea(person:PersonDes): boolean {
 
    //console.log(person.employeecode) //Property 'employeecode' does not exist on type 'Person'.
 
    if (person.type == "Employee") {
        console.log("Allowed to Employee " + person.employeecode)
        return true
    }
    else if (person.type == "Visitor") {
        console.log("Not Allowed to Visitor " + person.visitorcode)
        return false
    }
    else {
        console.log("Allowed to Contractors "+person.contractorcode)
        return true
    }
}
 
let employee:Employee = { type:"Employee", employeecode:1, name:"Rahul"}
AllowRestrictedArea(employee)
 
let vistor:Visitor = { type:"Visitor", visitorcode:1, name:"Sachin"}
AllowRestrictedArea(vistor)
 
let contractor:Contractor = { type:"Contractor", contractorcode:1, name:"Saurav"}
AllowRestrictedArea(contractor)