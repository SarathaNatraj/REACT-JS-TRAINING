export function fizzbuzz(aNumber: number): string {
  if (isMultipleOf(15, aNumber)) {
    return 'FizzBuzz';
  }
  if (isMultipleOf(5, aNumber)) {
    return 'Buzz';
  }
  if (isMultipleOf(3, aNumber)) {
    return 'Fizz';
  }
  return aNumber.toString();
}
