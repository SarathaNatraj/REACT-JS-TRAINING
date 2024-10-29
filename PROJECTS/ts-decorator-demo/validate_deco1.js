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
exports.Post = void 0;
const class_validator_1 = require("class-validator");
class BaseContent {
    constructor() {
        this.email = "xx";
        this.password = "aa";
    }
}
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], BaseContent.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BaseContent.prototype, "password", void 0);
class User extends BaseContent {
    constructor() {
        super(...arguments);
        this.name = "a";
        this.welcome = "h";
        this.password = "j";
    }
}
__decorate([
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(20),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.Contains)('hello'),
    __metadata("design:type", String)
], User.prototype, "welcome", void 0);
__decorate([
    (0, class_validator_1.MinLength)(5),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
let user = new User();
user.email = 'aa@gmail.com'; // inherited property
user.password = 'too short'; // password wil be validated not only against IsString, but against MinLength as well
user.name = 'Gowtham Ranganathan';
user.welcome = 'hello';
(0, class_validator_1.validate)(user).then(errors => {
    console.log(errors);
});
class Post {
    constructor() {
        this.title = "a";
        this.views = 0;
        this.nonWhitelistedProperty = 1;
    }
}
exports.Post = Post;
__decorate([
    (0, class_validator_1.Allow)(),
    __metadata("design:type", String)
], Post.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.Min)(2),
    __metadata("design:type", Number)
], Post.prototype, "views", void 0);
let post = new Post();
post.title = 'Hello world!';
post.views = 1;
post.nonWhitelistedProperty = 69;
post.anotherNonWhitelistedProperty = "something";
(0, class_validator_1.validate)(post).then(errors => {
    // post.nonWhitelistedProperty is not defined
    // (post as any).anotherNonWhitelistedProperty is not defined
    console.log(post);
    console.log(errors);
});
