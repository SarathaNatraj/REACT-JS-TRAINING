// Class decorator
function logClassNameM(constructor: Function) {
    console.log(`Class name: ${constructor.name}`);
  }
  
  // Method decorator
  function logMethodM(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(`Logging method: ${propertyKey}`);
  }
  
  // Applying multiple decorators to the class
  @logClassNameM
  class ExampleClassMulti {
    // Applying the method decorator
    @logMethodM
    showMessage() {
      console.log("Hello, world!");
    }
  }
  
  // Creating an instance of the decorated class
  const exampleMulti = new ExampleClassMulti();
  exampleMulti.showMessage(); // Output: "Logging method: showMessage" followed by "Hello, world!"
  