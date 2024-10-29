// Decorator function for logging method calls
function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Calling method ${propertyKey} with arguments:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Method ${propertyKey} returned:`, result);
    return result;
  };

  return descriptor;
}

// Example class using the decorator
class ExampleClass {
  @logMethod
  add(a: number, b: number) {
    return a + b;
  }
}

const example = new ExampleClass();
example.add(5, 10); // This will log method call details and the result
