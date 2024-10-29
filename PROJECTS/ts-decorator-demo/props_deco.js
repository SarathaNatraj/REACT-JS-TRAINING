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
exports.IceCreamComponent = void 0;
//usecase 1
class IceCreamComponent {
    constructor() {
        this.flavor = 'vanilla';
    }
}
exports.IceCreamComponent = IceCreamComponent;
__decorate([
    Emoji(),
    __metadata("design:type", Object)
], IceCreamComponent.prototype, "flavor", void 0);
const IceCream = new IceCreamComponent();
console.log(IceCream.flavor);
// Property Decorator
function Emoji() {
    return function (target, key) {
        let val = target[key];
        //definitions getter & setter
        const getter = () => {
            return val;
        };
        const setter = (next) => {
            console.log('adding flavor...');
            val = ` ${next + " hello "} `;
        };
        //Ends the property Decorator with this Object.defineProperty with args
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        });
    };
}
