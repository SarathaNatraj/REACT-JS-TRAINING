//usecase 2
function propertyDecorator(firstArgument:any, propertyName:any) {
    console.log({
        firstArgument,
        propertyName
    })
}

class User {
    @propertyDecorator
    email: string;

    @propertyDecorator
    maxDailyUsage = 12

    username: string;

    constructor(email: string, username: string) {
        this.email = email;
        this.username = username;
    }
}

const user = new User('p.shaddel@gmail.com', 'pshaddel')

//usecase 3
const propertyDecoratorTest = (target: any, propertyName: string) => {
    let currentAge: number = target[propertyName];
  
    Object.defineProperty(target, propertyName, {
      set: (newAge: number) => {
        if (newAge < 18) {
          return;
        }
        currentAge = newAge;
      },
      get: () => currentAge
    });
  }
  
  class PersonProp {
    @propertyDecoratorTest
     age = 28
  }
  
  const person = new PersonProp();
  console.log(person.age); // 28
  
  person.age = 16;
  console.log(person.age); // 28 overriding prevented
  
  person.age = 24;
  console.log(person.age); // 24
  