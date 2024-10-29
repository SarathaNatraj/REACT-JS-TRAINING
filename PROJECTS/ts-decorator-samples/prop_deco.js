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
// Property decorator
function uppercase(target, propertyKey) {
    let value;
    const getter = function () {
        return value;
    };
    const setter = function (newValue) {
        value = newValue.toUpperCase();
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    });
}
// Applying the property decorator to a class property
class ExampleClassProp {
    constructor(message) {
        this.message = message;
    }
}
__decorate([
    uppercase,
    __metadata("design:type", String)
], ExampleClassProp.prototype, "message", void 0);
// Creating an instance of the decorated class
const exampleProp = new ExampleClassProp("Hello, world!");
console.log(exampleProp.message); // Output: "HELLO, WORLD!"
