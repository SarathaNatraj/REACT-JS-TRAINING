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
const uuid_1 = require("uuid");
//passing constructor to decorator
function SetColorDecorator(constructor) {
    console.log("first class decorator");
    return class extends Car {
        constructor() {
            super();
            this.color = "blue";
        }
    };
}
function infoDeco1(constructor) {
    console.log(" info deco called");
}
function debugDeco1(constructor) {
    console.log(" debug deco called");
}
// Method Decorator
function ConfirmableMethod(target, key, descriptor) {
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
let Car = class Car {
    constructor() {
        console.log("calling class constructor");
        this.isFixed = true;
        this.color = "red";
    }
    //  @Confirmable('Are you super, super sure? There is no going back!')
    addTools(tool, tool1) {
        return this.color + " " + this.isFixed + " says: toppings available are " + tool + " " + tool1;
    }
};
__decorate([
    ConfirmableMethod
    //  @Confirmable('Are you super, super sure? There is no going back!')
    ,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", String)
], Car.prototype, "addTools", null);
Car = __decorate([
    infoDeco1,
    debugDeco1,
    SetColorDecorator,
    __metadata("design:paramtypes", [])
], Car);
const car = new Car();
console.log({
    isFixed: car.isFixed,
    color: car.color,
});
car.addTools('Lights', 'Audio system');
//usecase 2
function TimeStamp(target) {
    return class extends target {
        constructor() {
            super(...arguments);
            this.uuid = (0, uuid_1.v4)();
            this.created = new Date().toLocaleString("en-US");
        }
        hello(msg) { console.log(`Extended ${msg}`); }
    };
}
let ClockIn = class ClockIn {
};
ClockIn = __decorate([
    TimeStamp
], ClockIn);
let ClockOut = class ClockOut {
};
ClockOut = __decorate([
    TimeStamp
], ClockOut);
const ci = new ClockIn();
const ci2 = new ClockIn();
const co = new ClockOut();
console.log(ci);
console.log(ci2);
console.log(co);
console.log(ci.hasOwnProperty('uuid'));
console.log(ci.uuid);
ci.hello('World #2');
//usecase 3
function Override(target) {
    return class extends target {
        area(w, h) {
            return {
                w, h, area: w * h
            };
        }
    };
}
let Overridden = class Overridden {
    area(w, h) {
        return w * h;
    }
};
Overridden = __decorate([
    Override
], Overridden);
console.log(new Overridden().area(5, 6));
console.log(new Overridden().area(6, 7));
