import { multiply } from "../math";

test('simple mock',()=>{
    const mock = jest.fn();
    let result = mock();
    

    //wait a min so what is happening here...
    // well with the jest.fn we created a function that takes no args and returns undefined
    // want to test it? let do a console.log and also test it with toBeUndefined matcher
    console.log(result);
    expect(result).toBeUndefined();
    expect(mock).toHaveBeenCalled();

    //now let's pass an argument to the mock function
    result = mock('foo');
    expect(mock).toHaveBeenCalledTimes(2);
    expect(mock).toHaveBeenCalledWith("foo");
 });


 //Now let's change the implementation of the mock function

 test('simple mock with changed return value',()=>{
    const mock = jest.fn(() => 'bar');
    let result = mock();

    expect(result).toBe('bar');
 });

 //the mock implementation can also be done using mockImplementation call
 test('simple mock with changed return value',()=>{
    const mock = jest.fn().mockImplementation(() => "bar");
    let result = mock();

    expect(result).toBe('bar');
 });

 //some more mocking examples below
 test("mock implementation one time", () => {
    const mock = jest.fn().mockImplementationOnce(() => "bar");
  
    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
  
    expect(mock("baz")).toBe(undefined);
    expect(mock).toHaveBeenCalledWith("baz");
  });
  
  test("mock return value", () => {
    const mock = jest.fn();
    mock.mockReturnValue("bar");
  
    expect(mock("foo")).toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
  });
  
  test("mock promise resolution", () => {
    const mock = jest.fn();
    mock.mockResolvedValue("bar");
  
    expect(mock("foo")).resolves.toBe("bar");
    expect(mock).toHaveBeenCalledWith("foo");
  });

  //Now that we know what how are mock functions created let's look at their use.
  //most common use of mock functions is to inject dependency.
  const doAdd = (a, b, callback) => {
    callback(a + b);
  };
  
  test("calls callback with arguments added", () => {
    const mockCallback = jest.fn();
    doAdd(1, 2, mockCallback);
    expect(mockCallback).toHaveBeenCalledWith(3);

    const mockCallback2 = jest.fn();
    mockCallback2.mockReturnValue("x");
    expect(mockCallback2()).toEqual("x");
  });


  /**
   * There are three main types of module and function mocking in Jest:
   * I)       jest.fn: Mock a function
   * II)      jest.mock: Mock a module
   * III)     jest.spyOn: Spy or mock a function
   */
    
   // We have see jest.fn nonetheless let's see it again...say i have a function
   // which returns the remainder of a/b

   let getModulo = function(a,b){
        return a%b;
   } 

   /**
    * The most basic strategy for mocking is to reassign a function to the Mock Function. 
    * Then, anywhere the reassigned functions are used, the mock will be called instead of the original func
    */

    //reassigned getModulo to Mock
    getModulo = jest.fn();
    test("call modulo mock", () => {
        getModulo(1, 2);
        expect(getModulo).toHaveBeenCalledWith(1, 2);
      });


    //Spy or mock a function with jest.spyOn
    /**
     * Sometimes you only want to watch a method be called, 
     * but keep the original implementation. 
     * Other times you may want to mock the implementation, but restore the original later in the suite.
     * In these cases, you can use jest.spyOn.
     */
    //let say we have a function which uses console.log

    function myConsoleLog(msg){
       console.log(msg);
    }

    test("spying on console.log", () => {
        const con=jest.spyOn(console,'log');
        myConsoleLog('Hello');
        expect(con).toHaveBeenCalledWith('Hello');
    });

    // you may want to mock a function, but then restore the original implementation 

    test("spying on console.log and then restoring", () => {
        const con=jest.spyOn(console,'log');
        con.mockImplementation(()=>'i am being returned from console.logs mock');

        myConsoleLog('Hello');
        expect(console.log()).toBe('i am being returned from console.logs mock');
    });
