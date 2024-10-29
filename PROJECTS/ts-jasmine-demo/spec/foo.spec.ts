import { sum } from "../foo";

it('basic', () => {
  expect(sum()).toBe(0);
});

it('basic again', () => {

  
  expect(sum(1, 2)).toBe(3);
  console.log('add two nos in foo.ts');
});

it('basic with sum with 5 nos', () => {
  var sumOfVal= sum(1, 2,3,4,5);
  console.log(sumOfVal);
  expect(sumOfVal).toBe(15);
  console.log('sumOfVal');
});