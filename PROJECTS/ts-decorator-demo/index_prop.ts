//you can reference the type of an object property using the square bracket notation.

//class - 

type Foo = {
    a: string;
    b: number;
    1: null;
 }
 
 type AA = Foo["a"]; //string  - index property
 type BB = Foo["b"]; //number
 type ObjOne = Foo[1]; //null;
 
 

 interface Test {
    propA: number;
    propB: string;
}

function getProperty<T, K extends keyof T>(o: T, propertyName: K): T[K] {
    return o[propertyName]; // o[propertyName] is of type T[K] - index property
}

const test: Test = { propA: 1, propB: "b" };

console.log(getProperty(test, "propA")); //  1 test["propA"]
console.log(getProperty(test, "propB")); // b test["propB"]


interface States {
    [state: string]: boolean;//indexer property
}

let s: States = {'enabled': true, 'maximized':false};
console.log(s);
console.log(s['maximized']); //index property


interface States1 {
    //Indexer with other members
    [state: string]: any;
    screenName: String;
}

let s1: States1 = {screenName:"main"};
s1["enabled"] = true;
s1["maximized"] = false;
s1["width"]=300;
s1["height"]=200;
console.log(s1);