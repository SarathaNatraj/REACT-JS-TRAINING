
import {Numbers} from '../spy'
//main block for the testing - describing the testing
describe("spy", () => {
  var currentVal = 0


it("was called at least once", () => {  
    const spiedSumOddNumbers:Numbers = jasmine.createSpyObj("maths",{},{sumOddNumbers:50})
    //inject the spied method via the constructor
    console.log("was called at least once");
    expect(spiedSumOddNumbers.sumOddNumbers).toEqual(50);
    
  }); 
});