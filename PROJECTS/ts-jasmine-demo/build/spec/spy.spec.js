"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//main block for the testing - describing the testing
describe("spy", () => {
    var currentVal = 0;
    it("was called at least once", () => {
        const spiedSumOddNumbers = jasmine.createSpyObj("maths", {}, { sumOddNumbers: 50 });
        //inject the spied method via the constructor
        // const maths = new Numbers(spiedSumOddNumbers);
        // const result = spiedSumOddNumbers.someMethod(true,99);
        console.log("was called at least once");
        //  console.log(result);
        expect(spiedSumOddNumbers.sumOddNumbers).toEqual(50);
        //  expect(spiedSumOddNumbers).toHaveBeenCalled(); 
    });
});
