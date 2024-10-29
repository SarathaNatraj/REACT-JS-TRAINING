//usecase 1
export class IceCreamComponent {
    
    @Emoji()
    flavor = 'vanilla';
  }
  const IceCream = new IceCreamComponent();
  console.log(IceCream.flavor);

  
  // Property Decorator
  function Emoji() {
    return function(target: any, key: string | symbol) {
  
      let val = target[key];
  

      //definitions getter & setter
      const getter = () =>  {
          return val;
      };
      const setter = (next:any) => {
          console.log('adding flavor...');
          
          val = ` ${next + " hello "} `;
      };

        //Ends the property Decorator with this Object.defineProperty with args
      Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
      });
  
    };
  }