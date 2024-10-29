import { divide } from './divide';


it("should return a division result", () => {
    // Arrange: prepare function arguments
    // and the expected division result.
    // In this example 10 / 2 === 5:
    const [a, b, expected] = [10, 2, 5];
    
    // Here we use array destructuring 
    // to assing `a === 10`, `b === 2`, 
    // and `expected === 5`.
    
    // Act: use the `divide` function 
    // to get an actual function result.
    const result = divide(a, b);
    
    // Assert: compare expected result
    // with a function result.
    expect(result).toEqual(expected);
  });

  describe("when trying to divide by 0", () => {
    it("should throw an error", () => {
      // Arrange: prepare an error 
      // that is expected to be thrown.
      const expectedError = new Error(
        "You can't divide by zero."
      );
      
	  // Act here is a callback inside of `exect`.
      // Arrange: check that the function call
      // will reult in the given error.
      expect(() => divide(1, 0)).toThrow(expectedError);
    });
  });