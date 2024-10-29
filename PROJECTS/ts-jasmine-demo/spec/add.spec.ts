import { add } from "../add";


//main block for the testing - describing the testing
describe("add", () => {
  var currentVal = 0

  beforeEach(function(){
    console.log(" before each");
   // console.log(currentVal);
    currentVal=5
    console.log(currentVal);

  });

  //it - individual test script/case fn
  it("should add two numbers", () => {
    console.log('add two nos ');
    
    //last statement will be comparing value
    // making call to fn (add), 
    //actual value - method return value 3  ===  3
    //actual === expected 
    //Matchers - jasmine it will have some builtin matcher, javascript fns, boolean comparision
    expect(add(1, 2)).toBe(3);

  });
  it("should add two numbers", () => {
    console.log('add two nos ');
    expect(add(1, 5)).toBe(6);

  });

  it("after each function", ()=>{
    expect(currentVal).toEqual(5);
  })

  afterEach(function(){
    console.log(" aft each");
    currentVal=0
    console.log(currentVal);
  });
});
