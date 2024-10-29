//In JavaScript, we often use Object.keys to get a list of property keys. In the TypeScript world, the equivalent concept is the 
//keyof operator. Although they are similar, keyof only works on the type level and returns a literal union type, 
//while Object.keys returns values.

//Introduced in TypeScript 2.1, the keyof operator is used so frequently that it has become a
// building block for advanced typing in TypeScript.

const userK = {
    name: 'John',
    age: 32
  };
  type userKeyType = keyof typeof userK; //  "name" | "age"


  console.log(Object.keys(userK));
  // output: Array ["name", "age"]
  Object.keys(userK).forEach(key => {
   // console.log(userK)
   console.log(userK[key as userKeyType]) //a[0] = userK["name"] , userK["age"]

  }) // output: John, 32
  
    export interface Task {
        title: string;
        priority: TaskPriority;
      }
      
      export enum TaskPriority {
        LOW = "Low",
        MEDIUM = "Medium",
        HIGH = "High"
      }
      
      // Assign number as a flad to each priority status
      const priorityOrder = { High: 1, Medium: 2, Low: 3 } as const;
      
      // sort by High > Medium > Low
      export const sortByPriority = (arr: Task[]) => {
        const highToLow = (a: Task, b: Task) => {
          return (
            priorityOrder[a.priority as keyof typeof priorityOrder] -
            priorityOrder[b.priority as keyof typeof priorityOrder]
          );
        };
      
        return arr.sort(highToLow);
      };

    const tasks: Task[] = [
        { title: "test1", priority: TaskPriority.MEDIUM }, // TaskPriority.MEDIUM = "Medium"
        { title: "test2", priority: TaskPriority.LOW },
        { title: "test3", priority: TaskPriority.HIGH },
        { title: "test4", priority: TaskPriority.LOW }
      ];
      
      const sortedArr = sortByPriority(tasks);
      console.log(sortedArr);
      

      interface Person {
        name: string;
        age: number;
      }
      
      function printPersonProperty(person: Person, property: keyof Person) {
        console.log(`The person's ${property} is ${person[property]}`);
      }
      
      let person = { name: "Alice", age: 25 };
      
      printPersonProperty(person, "name"); // The person's name is Alice -> person["name"]= Alice
      printPersonProperty(person, "age"); // The person's age is 25  -> person["age"] = 25



      function getPropertyValue<T, K extends keyof T>(obj: T, key: K): T[K] {
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
    //  let hobby = getPropertyValue(person1, "hobby"); 
      
      