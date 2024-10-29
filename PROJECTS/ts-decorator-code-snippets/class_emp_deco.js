"use strict";
function upperCase(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const result = originalMethod.apply(this, args);
        if (typeof result === 'string') {
            return result.toUpperCase();
        }
        return result;
    };
    return descriptor;
}
class User {
    constructor(name) {
        this.name = name;
    }
    // @upperCase
    getName() {
        return this.name;
    }
}
const user = new User("Suraj kumar");
console.log(user.getName());
