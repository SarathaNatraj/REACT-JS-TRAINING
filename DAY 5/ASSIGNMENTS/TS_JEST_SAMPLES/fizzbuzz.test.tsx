import { fizzbuzz } from './fizzbuzz';

describe('the Fizzbuzz game function', () => {
  it('should return a string from a given number', () => {
    // Arrange
    const input = 1;
    // Act
    const actual = fizzbuzz(input);
    // Assert
    const expected = '1';
    expect(actual).toBe(expected);
    expect(fizzbuzz(2)).toBe('2');
    // expect(fizzbuzz(3)).toBe('3');
    expect(fizzbuzz(4)).toBe('4');
  });
  it('For multiples of three return "Fizz" instead of the number', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
    expect(fizzbuzz(6)).toBe('Fizz');
    expect(fizzbuzz(9)).toBe('Fizz');
  });
  it('For multiples of five return "Buzz" instead of the number', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
    expect(fizzbuzz(10)).toBe('Buzz');
    //expect(fizzbuzz(15)).toBe('Buzz');
    expect(fizzbuzz(20)).toBe('Buzz');
  });
  it('For multiples of three and five return "FizzBuzz" instead of the number', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
    expect(fizzbuzz(30)).toBe('FizzBuzz');
    expect(fizzbuzz(60)).toBe('FizzBuzz');
  });
});