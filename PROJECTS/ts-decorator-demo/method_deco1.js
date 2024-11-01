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
function logMethod(target, key, descriptor) {
    var originalMethod = descriptor.value;
    //editing the descriptor/value parameter
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        var a = args.map(function (a) { return JSON.stringify(a); }).join();
        // note usage of originalMethod here
        var result = originalMethod.apply(this, args);
        var r = JSON.stringify(result);
        console.log("Call: " + key + "(" + a + ") => " + r);
        return result;
    };
    // return edited descriptor as opposed to overwriting the descriptor
    return descriptor;
}
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    saySomething(message, messageExtra) {
        return this.name + " " + this.surname + " says: " + message + " " + messageExtra;
    }
}
__decorate([
    logMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", String)
], Person.prototype, "saySomething", null);
class Employee {
}
var p = new Person("remo", "jansen");
p.saySomething("I love playing", "halo");
