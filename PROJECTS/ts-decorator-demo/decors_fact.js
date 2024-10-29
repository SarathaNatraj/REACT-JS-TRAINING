"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IceCreamComponentFactory = exports.TargetClass = void 0;
//Decorator factory return a decoratory function 
function decoratorFactory(paramters) {
    return function (ctor) {
        console.log(`Data passed onto decorator:${paramters}`);
    };
}
//Decorator factory applied to class level
let TargetClass = exports.TargetClass = class TargetClass {
};
exports.TargetClass = TargetClass = __decorate([
    decoratorFactory(['aaa', 'bbb', 'ccc'])
], TargetClass);
function Confirmable(target, key, descriptor) {
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
        console.log("Call: " + "(" + a + ") => " + r);
        return result;
    };
    return descriptor;
}
;
//decorator factory
function ConfirmFactory() {
    return Confirmable;
}
class IceCreamComponentFactory {
    constructor(name, flavour) {
        this.toppings = [];
        this.name = name;
        this.flavour = flavour;
    }
    //decorator factory is applied to method level
    //  @Confirmable('Are you super, super sure? There is no going back!')
    addTopping(topping, othertopping) {
        return this.name + " " + this.flavour + " says: toppings available are " + topping + " " + othertopping;
    }
}
exports.IceCreamComponentFactory = IceCreamComponentFactory;
__decorate([
    ConfirmFactory()
    //  @Confirmable('Are you super, super sure? There is no going back!')
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", String)
], IceCreamComponentFactory.prototype, "addTopping", null);
const IceCream1 = new IceCreamComponentFactory('Baskin Robins', 'Chocolates');
IceCream1.addTopping('ch', 'peanuts');
