import { getHelloWorld } from './hello-world';

describe('the getHelloWorld function', () => {
  it('should return "Hello World!"', () => {
    const actual = getHelloWorld();
    const expected = 'Hello World!';
    expect(actual).toBe(expected);
  });
});

describe('the subject under test', () => {
  let sut;
  beforeEach(() => {
    // Arrange
    sut = undefined;
  });
  it('should do something', () => {
    // Act
    const actual = undefined;
    // Assert
    const expected = undefined;
    expect(actual).toStrictEqual(expected);
  });
});