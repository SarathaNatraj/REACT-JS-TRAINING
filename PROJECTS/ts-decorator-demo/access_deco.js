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
const accessorDecorator = (target, memberName, descriptor) => {
    // do something with your accessor
    console.log('Accessor decorator!');
    console.log(target);
    console.log(memberName);
    console.log(descriptor);
};
class Product {
    get price() {
        return this._price;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        else {
            throw new Error('Price cannot be lower than zero!');
        }
    }
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
}
__decorate([
    accessorDecorator,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], Product.prototype, "price", null);
const prod = new Product('laptop', 100);
//prod.price = -10;
console.log(prod);
//usecase 2
function canEnumerate(val) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = val;
    };
}
// class , obj.x -> get method x, obj.x = 11 -> set method x
class SomeClass1 {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
}
__decorate([
    canEnumerate(true),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], SomeClass1.prototype, "x", null);
__decorate([
    canEnumerate(false),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], SomeClass1.prototype, "y", null);
const myClass1 = new SomeClass1(1, 2);
for (let key in myClass1) {
    console.log(key + " = " + myClass1.y);
}
