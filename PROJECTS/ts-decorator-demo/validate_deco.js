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
exports.PostV = exports.IsLongerThan = void 0;
//npm i class-validator
const class_validator_1 = require("class-validator");
function IsLongerThan(property, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isLongerThan',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value, args) {
                    const [relatedPropertyName] = args.constraints;
                    const relatedValue = args.object[relatedPropertyName];
                    return typeof value === 'string' && typeof relatedValue === 'string' && value.length > relatedValue.length; // you can return a Promise<boolean> here as well, if you want to make async validation
                },
            },
        });
    };
}
exports.IsLongerThan = IsLongerThan;
class PostV {
    constructor(tit) {
        this.text = "WhatsApp";
        this.title = tit;
    }
}
exports.PostV = PostV;
__decorate([
    IsLongerThan('title', {
        /* you can also use additional validation options, like "groups" in your custom validation decorators. "each" is not supported */
        message: 'Text must be longer than the title',
    }),
    __metadata("design:type", String)
], PostV.prototype, "text", void 0);
let postV = new PostV('WhatsApp introduces screen sharing feature for video calls');
postV.title = 'Tech Post';
console.log(postV);
(0, class_validator_1.validate)(postV).then(errors => {
    console.log(errors);
});
