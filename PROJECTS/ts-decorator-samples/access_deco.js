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
// Accessor decorator
function logAccessor(target, propertyKey, descriptor) {
    const originalGetter = descriptor.get;
    descriptor.get = function () {
        console.log(`Getting value from ${propertyKey}`);
        return originalGetter.call(this);
    };
}
class ExampleClassAccess {
    constructor() {
        this._message = "Hello, world!";
    }
    get message() {
        return this._message;
    }
    set message(value) {
        this._message = value;
    }
}
__decorate([
    logAccessor,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], ExampleClassAccess.prototype, "message", null);
const exampleAcc = new ExampleClassAccess();
console.log(exampleAcc.message); // Output: "Getting value from message" followed by "Hello, world!"
