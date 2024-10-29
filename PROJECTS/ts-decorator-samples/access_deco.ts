// Accessor decorator
function logAccessor(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalGetter = descriptor.get;
  
    descriptor.get = function () {
      console.log(`Getting value from ${propertyKey}`);
      return originalGetter!.call(this);
    };
  }
  
  class ExampleClassAccess {
    private _message = "Hello, world!";
  
    @logAccessor
    get message(): string {
      return this._message;
    }
  
    set message(value: string) {
      this._message = value;
    }
  }
  
  const exampleAcc = new ExampleClassAccess();
  console.log(exampleAcc.message); // Output: "Getting value from message" followed by "Hello, world!"
  