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
//usecase 2
function propertyDecorator(firstArgument, propertyName) {
    console.log({
        firstArgument,
        propertyName
    });
}
class User {
    constructor(email, username) {
        this.maxDailyUsage = 12;
        this.email = email;
        this.username = username;
    }
}
__decorate([
    propertyDecorator,
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    propertyDecorator,
    __metadata("design:type", Object)
], User.prototype, "maxDailyUsage", void 0);
const user = new User('p.shaddel@gmail.com', 'pshaddel');
//usecase 3
const propertyDecoratorTest = (target, propertyName) => {
    let currentAge = target[propertyName];
    Object.defineProperty(target, propertyName, {
        set: (newAge) => {
            if (newAge < 18) {
                return;
            }
            currentAge = newAge;
        },
        get: () => currentAge
    });
};
class PersonProp {
    constructor() {
        this.age = 28;
    }
}
__decorate([
    propertyDecoratorTest,
    __metadata("design:type", Object)
], PersonProp.prototype, "age", void 0);
const person = new PersonProp();
console.log(person.age); // 28
person.age = 16;
console.log(person.age); // 28 overriding prevented
person.age = 24;
console.log(person.age); // 24
