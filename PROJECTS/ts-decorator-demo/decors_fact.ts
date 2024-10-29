//Decorator factory return a decoratory function 
function decoratorFactory(paramters: Array<string>)
{
  return function(ctor:Function)
  {
  console.log(`Data passed onto decorator:${paramters}`);
  }
}


//Decorator factory applied to class level
@decoratorFactory(['aaa','bbb','ccc'])
export class TargetClass{
}

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

//decorator factory
function ConfirmFactory()
{
  return Confirmable
}
export class IceCreamComponentFactory {
  public name: string;
  public flavour: string;
  
  constructor(name : string, flavour : string) { 
    this.name = name;
    this.flavour = flavour;
  }

    toppings:string[]=[];
  
    //decorator factory is applied to method level
    @ConfirmFactory()
  //  @Confirmable('Are you super, super sure? There is no going back!')
    addTopping(topping:string, othertopping : string):string {
      return this.name + " " + this.flavour + " says: toppings available are " + topping + " " + othertopping; 
    }
  
  }


  const IceCream1 = new IceCreamComponentFactory('Baskin Robins','Chocolates');
  IceCream1.addTopping('ch','peanuts');

