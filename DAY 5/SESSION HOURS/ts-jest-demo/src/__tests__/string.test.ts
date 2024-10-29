/**
  * use the toMatch matcher for testing the string matches.
  * toMatch uses REGULAR EXPRESSIONS
  */

test('if "UC Berkeley" contains "Berk"', () => {
   
    expect("UC Berkeley").toMatch(/Berk/);
   
  });

  // A bit complex example. 
  /**
   * IF YOU WANT TO LEARN MORE ABOUT REGEX
   * @see https://www.regular-expressions.info/
   */
  test('if .com email address is in valid form i.e string@xxx.com', () => {
   
    expect("abc@testing.com").toMatch(/[a-zA-z0-9]+@[a-zA-z0-9]+\.com/);
   
  });


  //Exact match
  test('string exact match', () => {
   
    //using toBe
    expect("abc@testing.com").toBe("abc@testing.com");
    //using toEqual
    expect("abc@testing.com").toEqual("abc@testing.com");
   
  });
