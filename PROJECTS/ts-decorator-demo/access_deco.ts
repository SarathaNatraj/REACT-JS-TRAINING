const accessorDecorator = (target: any, memberName: string, descriptor: PropertyDescriptor) => {
    // do something with your accessor
    console.log('Accessor decorator!');
    console.log(target);
    console.log(memberName);
    console.log(descriptor);
  }
  
  class Product {
    title: string;
    private _price: number;
  
    @accessorDecorator
    get price() {
      return this._price
    }
  
    set price(val: number) {
      if (val > 0) {
        this._price = val;
      } else {
        throw new Error('Price cannot be lower than zero!');
      }
    }
  
  
    constructor(t: string, p: number) {
      this.title = t;
      this._price = p;
    }
  }
  

  const prod:Product = new Product('laptop',100);
  //prod.price = -10;
  console.log(prod);

//usecase 2
  function canEnumerate(val: boolean){
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = val
    }
  }
  

  // class , obj.x -> get method x, obj.x = 11 -> set method x
  class SomeClass1 {
    _x: number;
    _y: number;
    constructor(x: number, y: number){
      this._x = x;
      this._y = y;
    }
  
    @canEnumerate(true)
    get x(){
      return this._x
    }

  
    @canEnumerate(false)
    get y(){
      return this._y
    }
  }
  
  const myClass1:SomeClass1 = new SomeClass1(1, 2)
  for (let key in myClass1) {
      console.log(key + " = " + myClass1.y);
  }