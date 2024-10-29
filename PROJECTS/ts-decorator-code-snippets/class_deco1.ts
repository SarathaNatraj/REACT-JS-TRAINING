@frozen
class Icecream{}

function frozen(constructor:Function,context:any){
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}

console.log(Object.isFrozen(Icecream)) //true