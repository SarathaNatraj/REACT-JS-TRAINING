const parameterDecorator = (target: any, methodName: string, position: number) => {
    // do something with your parameter
    console.log('Parameter decorator!');
    console.log(target);
    console.log(methodName);
    console.log(position);
  }
  
  class ProductParam {
    
    title: string;
    private _price: number;
  
    constructor(t: string, p: number) {
      this.title = t;
      this._price = p;
    }
  
    //method header 
    getPriceWithDiscount(@parameterDecorator discount: number) :number{
        const finalPrice:number = this._price - (this._price * discount) / 100;
      return finalPrice;
    }
  }
  
  const param = new ProductParam("laptop",200);
  const price = param.getPriceWithDiscount(20);
  console.log(price);

//Other scenario - fetching the index
  function printIndex(target: any, propertyKey: string, index: number) {
    console.log("Parameter index is: " + index)
    console.log(propertyKey);
  }
  
  class SomeClass {
    constructor(){
  
    }
    //@dec1
    //@dec2
    public someMethod(first: string, second: string, @printIndex third: string){
  
    }
  }
  
  let myClass = new SomeClass()
  