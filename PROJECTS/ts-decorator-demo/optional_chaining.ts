//optional chaining is defined as the ability to immediately stop running an expression if a part of 
//it evaluates to either null or undefined. It was introduced in TypeScript 3.7 with the ?. operator.

//Optional chaining is often used together with nullish coalescing, which is the ability to
// fall back to a default value when the primary expression evaluates to null or undefined.
// In this case, the operator to be used is ??.

//str?.length?:0
//(a>b)?a: b

type UserOp = {
    id: number;
    name?: {
        firstName: string;
        lastName?: string;
    }
};
  
const users: UserOp[] = [{
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
  
users.map(element => console.log(element.name?.lastName));


type personDetails = {
    name : string,
    details? : {
      age?: number,
      location?: string,
    }
  }
    
  let person_one: personDetails = {
    name: "Suraj Kumar",
    details : {
      age: 20,
      location: "Noida"
    }
  }
    
  let person_two: personDetails = {
    name: "Gowtham Ranganathan",
    details : {
      location: "Noida"
    }
  }
    
  let person_three: personDetails = {
    name: "Prasanna Kumar Reddy",
    details : {
      age: 20,
    }
  }
    
  let data_1 = person_one.name + " " 
      + person_one.details?.age + " " 
      + person_one.details?.location;
  console.log(data_1);
    
  let data_2 = person_two.name + " " 
      + person_two.details?.age + " " 
      + person_two.details?.location;
  console.log(data_2);
    
  let data_3 = person_three.name + " " 
      + person_three.details?.age + " " 
      + person_three.details?.location;
  console.log(data_3);