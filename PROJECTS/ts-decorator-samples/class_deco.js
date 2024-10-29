"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Class decorator function
function logClassName(constructor) {
    console.log(`Class name: ${constructor.name}`);
}
// Applying the class decorator
let ExampleClass1 = class ExampleClass1 {
    constructor() {
        this.message = "Hello, world!";
    }
    showMessage() {
        console.log(this.message);
    }
};
ExampleClass1 = __decorate([
    logClassName
], ExampleClass1);
// Creating an instance of the decorated class
const example1 = new ExampleClass1();
example1.showMessage(); // Output: "Hello, world!"
