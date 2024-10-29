"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foo_1 = require("../foo");
it('basic', () => {
    expect((0, foo_1.sum)()).toBe(0);
});
it('basic again', () => {
    expect((0, foo_1.sum)(1, 2)).toBe(3);
    console.log('add two nos in foo.ts');
});
it('basic with sum with 5 nos', () => {
    var sumOfVal = (0, foo_1.sum)(1, 2, 3, 4, 5);
    console.log(sumOfVal);
    expect(sumOfVal).toBe(15);
    console.log('sumOfVal');
});
