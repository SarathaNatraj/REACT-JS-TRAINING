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
exports.IceCreamComponent = void 0;
class IceCreamComponent {
    constructor(name, flavour) {
        this.toppings = [];
        this.name = name;
        this.flavour = flavour;
    }
    //  @Confirmable('Are you super, super sure? There is no going back!')
    addTopping(topping, othertopping) {
        return this.name + " " + this.flavour + " says: toppings available are " + topping + " " + othertopping;
    }
}
exports.IceCreamComponent = IceCreamComponent;
__decorate([
    Confirmable
    //  @Confirmable('Are you super, super sure? There is no going back!')
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", String)
], IceCreamComponent.prototype, "addTopping", null);
// Method Decorator
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
const IceCream = new IceCreamComponent('CR', 'Vannila');
IceCream.addTopping('chocolates', 'peanuts');
const IceCream1 = new IceCreamComponent('Baskin Robins', 'Chocolates');
IceCream1.addTopping('ch', 'peanuts');
