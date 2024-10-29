// Parameter decorator
function logParameter(target: any, propertyKey: string | undefined, parameterIndex: number) {
    console.log(`Parameter ${parameterIndex} of ${propertyKey} is being accessed.`);
  }
  
  class ExampleClassParam {
    showMessage(@logParameter prefix: string) {
      console.log(`${prefix}: Hello, world!`);
    }
  }
  
  const exampleParam = new ExampleClassParam();
  exampleParam.showMessage("LOG"); // Output: "Parameter 0 of showMessage is being accessed." followed by "LOG: Hello, world!"
  