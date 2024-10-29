@Frozen
class IceCream {}

function Frozen(constructor: Function) {
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}
console.log("hello");
console.log(Object.isFrozen(IceCream)); // true

@Frozen
class FroYo extends IceCream {} 

console.log(Object.isFrozen(FroYo));