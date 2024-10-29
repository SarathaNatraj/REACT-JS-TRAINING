function demoThrow(){
    throw new Error("Demo Error");
}

 /**
  * You can check if a function throws an exception using toThrow matcher
  * 
  */

 test('compiling android goes as expected', () => {
    expect(demoThrow).toThrow();
    expect(demoThrow).toThrow(Error);
  
    // You can also use the exact error message or a regexp
    expect(demoThrow).toThrow('Demo Error');
    expect(demoThrow).toThrow(/Demo/);
  });
