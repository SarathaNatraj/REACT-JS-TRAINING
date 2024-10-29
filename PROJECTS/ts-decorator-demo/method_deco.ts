export class IceCreamComponent {
  public name: string;
  public flavour: string;
  
  constructor(name : string, flavour : string) { 
    this.name = name;
    this.flavour = flavour;
  }

    toppings:string[]=[];
  
    @Confirmable
  //  @Confirmable('Are you super, super sure? There is no going back!')
    addTopping(topping:string, othertopping : string):string {
      return this.name + " " + this.flavour + " says: toppings available are " + topping + " " + othertopping; 
    }
  
  }
  
  
  // Method Decorator
  function Confirmable(target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
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
  
      

  
  
  const IceCream = new IceCreamComponent('CR','Vannila');
  IceCream.addTopping('chocolates','peanuts');

  const IceCream1 = new IceCreamComponent('Baskin Robins','Chocolates');
  IceCream1.addTopping('ch','peanuts');
