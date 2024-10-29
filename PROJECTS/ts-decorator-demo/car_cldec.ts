import  {v4 as uuidv4, v4 } from 'uuid';
//passing constructor to decorator
function SetColorDecorator(constructor: Function) {
    console.log("first class decorator");
    return class extends Car {
      constructor() {
        super();
        this.color = "blue";
      }
    };
  }
  
  function infoDeco1(constructor:Function){
    console.log(" info deco called");
}

function debugDeco1(constructor:Function){
    console.log(" debug deco called");
}


  // Method Decorator
  function ConfirmableMethod(target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
    console.log('inside deco');
    
    var originalMethod = descriptor.value;
 
      descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        console.log(args);
        var a = args.map(function (a) { return JSON.stringify(a); }).join();
        console.log(a);
        // note usage of originalMethod here
        var result = originalMethod.apply(this, args);
        console.log(result);
        var r = JSON.stringify(result);
        console.log("Call: "  + "(" + a + ") => " + r);
    
        return result;
    };
    return descriptor;
  };
  
      

  @infoDeco1
  @debugDeco1
  @SetColorDecorator
  class Car {
    public isFixed: boolean;
    public color: string;
    constructor() {
      console.log("calling class constructor");
      this.isFixed = true;
      this.color="red";
    }

    @ConfirmableMethod
  //  @Confirmable('Are you super, super sure? There is no going back!')
    addTools(tool:string, tool1 : string):string {
      return this.color + " " + this.isFixed + " says: toppings available are " + tool + " " + tool1; 
    }

  }
  
  const car = new Car();
  
  console.log({
    isFixed: car.isFixed,
    color: car.color,
  });
  car.addTools('Lights','Audio system');


  //usecase 2

function TimeStamp<T extends { new(...args: any[]): {}}>(target: T) {
    return class extends target {
        uuid = uuidv4();
        created = new Date().toLocaleString("en-US");

        hello(msg: string) { console.log(`Extended ${msg}`); }
    }
}

@TimeStamp
class ClockIn {
    // methods and properties
}

@TimeStamp
class ClockOut {
    // methods and properties
}

const ci = new ClockIn();
const ci2 = new ClockIn();
const co = new ClockOut();

console.log(ci);
console.log(ci2);
console.log(co);

console.log(ci.hasOwnProperty('uuid'));

console.log((<any>ci).uuid);

(<any>ci).hello('World #2');


//usecase 3
function Override<T extends { new(...args: any[]): {} }>(target: T) {
  return class extends target {
      area(w: number, h: number) {
          return {
              w, h, area: w * h
          };
      }
  }
}

@Override
class Overridden {

  area(w: number, h: number) {
      return w * h;
  }
}

console.log(new Overridden().area(5, 6));
console.log(new Overridden().area(6, 7));
