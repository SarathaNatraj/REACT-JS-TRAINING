function simpleDecorator(target:Function,context:any):any
{
   console.log("I am from simple decorator");
}



//@simpleDecorator
export class ClassType
{
  constructor()
  {
    console.log("I am from ctor");
  }
}
let instance = new ClassType();
