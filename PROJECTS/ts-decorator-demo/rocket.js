"use strict";
function WithFuel(target, context) {
    if (context.kind === "class") {
        return class extends target {
            constructor() {
                super(...arguments);
                this.fuel = 50;
            }
            isEmpty() {
                return this.fuel == 0;
            }
        };
    }
}
//@WithFuel
class Rocket {
}
const rocket = new Rocket();
console.log(rocket.fuel);
console.log(`Is the rocket empty? ${rocket.isEmpty()}`);
//@WithFuel
class Rocket1 {
    constructor() {
        this.fuel = 75;
    }
}
const rocket1 = new Rocket1();
console.log(rocket1.fuel);
