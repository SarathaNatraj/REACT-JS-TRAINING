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
// Class decorator
function logClassNameM(constructor) {
    console.log(`Class name: ${constructor.name}`);
}
// Method decorator
function logMethodM(target, propertyKey, descriptor) {
    console.log(`Logging method: ${propertyKey}`);
}
// Applying multiple decorators to the class
let ExampleClassMulti = class ExampleClassMulti {
    // Applying the method decorator
    showMessage() {
        console.log("Hello, world!");
    }
};
__decorate([
    logMethodM,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExampleClassMulti.prototype, "showMessage", null);
ExampleClassMulti = __decorate([
    logClassNameM
], ExampleClassMulti);
// Creating an instance of the decorated class
const exampleMulti = new ExampleClassMulti();
exampleMulti.showMessage(); // Output: "Logging method: showMessage" followed by "Hello, world!"
