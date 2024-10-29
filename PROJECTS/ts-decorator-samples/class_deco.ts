// Class decorator function
function logClassName(constructor: Function) {
    console.log(`Class name: ${constructor.name}`);
  }
  
  // Applying the class decorator
  @logClassName
  class ExampleClass1 {
    message = "Hello, world!";
  
    showMessage() {
      console.log(this.message);
    }
  }
  
  // Creating an instance of the decorated class
  const example1 = new ExampleClass1();
  example1.showMessage(); // Output: "Hello, world!"
  