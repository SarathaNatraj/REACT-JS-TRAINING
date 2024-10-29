// Decorator factory
function logProperty(prefix: string) {
    return function (target: any, propertyKey: string) {
      console.log(`${prefix} - Property ${propertyKey} is being accessed.`);
    };
  }
  
  // Applying the decorator using a decorator factory
  class ExampleClassFact {
    @logProperty("LOG")
    message = "Hello, world!";
  }

  class ExampleClassFactDebug {
    @logProperty("DEBUG")
    message = "Hello, world!";
  }
  
  // Creating an instance of the class
  const exampleFact = new ExampleClassFact();
  console.log(exampleFact.message); // Output: "LOG - Property message is being accessed."

  const exampleFactDebug = new ExampleClassFactDebug();
  console.log(exampleFact.message); // Output: "LOG - Property message is being accessed."
  