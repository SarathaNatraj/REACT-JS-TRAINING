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
// Parameter decorator
function logParameter(target, propertyKey, parameterIndex) {
    console.log(`Parameter ${parameterIndex} of ${propertyKey} is being accessed.`);
}
class ExampleClassParam {
    showMessage(prefix) {
        console.log(`${prefix}: Hello, world!`);
    }
}
__decorate([
    __param(0, logParameter),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExampleClassParam.prototype, "showMessage", null);
const exampleParam = new ExampleClassParam();
exampleParam.showMessage("LOG"); // Output: "Parameter 0 of showMessage is being accessed." followed by "LOG: Hello, world!"
