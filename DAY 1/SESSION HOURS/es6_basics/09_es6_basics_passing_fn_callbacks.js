function testFn1(cb){
    console.log("Inside function 1");
    cb("Lokesh")
}

function testFn2(name){
    console.log("Inside function 2");
    console.log(name);
}

testFn1(testFn2)
