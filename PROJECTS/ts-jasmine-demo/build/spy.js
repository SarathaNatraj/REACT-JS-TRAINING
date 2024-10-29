"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Numbers = void 0;
class Numbers {
    constructor(injectedSumOddNumbers) {
        this.onlyOdds = (num) => {
            let sum = 0;
            while (num >= 1) {
                if (num % 2 === 1) {
                    sum += num;
                }
                num--;
            }
            return sum;
        };
        this.sumOddNumbers = injectedSumOddNumbers;
    }
    someMethod(someFlag, num) {
        let result = 0;
        if (someFlag === true) {
            result = this.onlyOdds(num);
        }
        else {
            //do something else...
        }
        return result;
    }
}
exports.Numbers = Numbers;
