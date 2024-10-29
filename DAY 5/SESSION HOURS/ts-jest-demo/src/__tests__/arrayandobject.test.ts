const myArray=['one','two','three','four'];

 test('if myArray contains three', () => {
   
    expect(myArray).toContain('three');
   
  });

 
  /**
   * you can also check if an object contains a specific key key value pair
   * using toMatchObject matcher
   */
  test('if object contain specific key value', () => {
   
    expect({ name: 'component name', type: 'form' }).toMatchObject({ name: 'component name'});
   
  });

  /**
   * you can test if object contains a specific property using 
   * toHaveProperty matcher
   */
  test('if object has a specific key or (key and value)', () => {
   
    //just property
    expect({ name: 'component name', type: 'form' }).toHaveProperty("name");

    //property and value
    expect({ name: 'component name', type: 'form' }).toHaveProperty("type","form");
   
  });



  //Exact or STRICT match
  test('object exact match', () => {
   
    //STRICT EQUAL
    expect({ name: 'component name', type: 'form' }).toStrictEqual({ name: 'component name', type: 'form' });
      
  });

  