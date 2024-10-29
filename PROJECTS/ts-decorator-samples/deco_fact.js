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
// Decorator factory
function logProperty(prefix) {
    return function (target, propertyKey) {
        console.log(`${prefix} - Property ${propertyKey} is being accessed.`);
    };
}
// Applying the decorator using a decorator factory
class ExampleClassFact {
    constructor() {
        this.message = "Hello, world!";
    }
}
__decorate([
    logProperty("LOG"),
    __metadata("design:type", Object)
], ExampleClassFact.prototype, "message", void 0);
class ExampleClassFactDebug {
    constructor() {
        this.message = "Hello, world!";
    }
}
__decorate([
    logProperty("DEBUG"),
    __metadata("design:type", Object)
], ExampleClassFactDebug.prototype, "message", void 0);
// Creating an instance of the class
const exampleFact = new ExampleClassFact();
console.log(exampleFact.message); // Output: "LOG - Property message is being accessed."
const exampleFactDebug = new ExampleClassFactDebug();
console.log(exampleFact.message); // Output: "LOG - Property message is being accessed."
