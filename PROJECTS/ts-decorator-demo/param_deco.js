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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const parameterDecorator = (target, methodName, position) => {
    // do something with your parameter
    console.log('Parameter decorator!');
    console.log(target);
    console.log(methodName);
    console.log(position);
};
class ProductParam {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    //method header 
    getPriceWithDiscount(discount) {
        const finalPrice = this._price - (this._price * discount) / 100;
        return finalPrice;
    }
}
__decorate([
    __param(0, parameterDecorator),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Number)
], ProductParam.prototype, "getPriceWithDiscount", null);
const param = new ProductParam("laptop", 200);
const price = param.getPriceWithDiscount(20);
console.log(price);
//Other scenario - fetching the index
function printIndex(target, propertyKey, index) {
    console.log("Parameter index is: " + index);
    console.log(propertyKey);
}
class SomeClass {
    constructor() {
    }
    //@dec1
    //@dec2
    someMethod(first, second, third) {
    }
}
__decorate([
    __param(2, printIndex),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], SomeClass.prototype, "someMethod", null);
let myClass = new SomeClass();
