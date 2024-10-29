import { add } from "../math";
import { subtract } from "../math";
import { multiply } from "../math";
import { divide } from "../math";

 /**
  * when you want to compare the number euqlity, greater than, less than use following matchers
  */

 test('two plus two', () => {
    const value = add(2,2);
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  /** 
   * For floating point equality, use toBeCloseTo instead of toEqual, 
   * because you don't want a test to depend on a tiny rounding error.
   */

  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    //This won't work because of rounding error
    //uncomment to see the value. 
    //when JS adds floating numbers you'd actually get 0.30000000000000004
    //expect(value).toBe(0.3);           

    expect(value).toBeCloseTo(0.3); // This works!.
  });

  test('Opposite of matcher',()=>{
    // Here we are testing if 5-4 is NOT equal to zero.
    expect(subtract(5,4)).not.toBe(0);
  });

