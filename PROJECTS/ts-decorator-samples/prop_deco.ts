// Property decorator
function uppercase(target: any, propertyKey: string) {
    let value: string;
  
    const getter = function () {
      return value;
    };
  
    const setter = function (newValue: string) {
      value = newValue.toUpperCase();
    };
  
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  }
  
  // Applying the property decorator to a class property
  class ExampleClassProp {
    @uppercase
    message: string;
  
    constructor(message: string) {
      this.message = message;
    }
  }
  
  // Creating an instance of the decorated class
  const exampleProp = new ExampleClassProp("Hello, world!");
  console.log(exampleProp.message); // Output: "HELLO, WORLD!"
  