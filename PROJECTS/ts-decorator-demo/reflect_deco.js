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
require("reflect-metadata");
const formatMetadataKey = "format";
function format(formatString) {
    return Reflect.metadata(formatMetadataKey, formatString);
}
function getFormat(target, propertyKey) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        let formatString = getFormat(this, "greeting");
        console.log(formatString.replace("%s", this.greeting));
    }
}
__decorate([
    format("Hello, %s"),
    __metadata("design:type", String)
], Greeter.prototype, "greeting", void 0);
let greeter = new Greeter("Alex");
greeter.greet();
