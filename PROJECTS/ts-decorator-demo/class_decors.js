"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassType = void 0;
function simpleDecorator(target, context) {
    console.log("I am from simple decorator");
}
//@simpleDecorator
class ClassType {
    constructor() {
        console.log("I am from ctor");
    }
}
exports.ClassType = ClassType;
let instance = new ClassType();
