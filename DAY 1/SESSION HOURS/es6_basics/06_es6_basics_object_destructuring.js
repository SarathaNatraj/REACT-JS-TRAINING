let student = {
    sid:"123",
    sname:"Ajay",
    location:"Chennai"
}

let studentNames = ["Ajay", "Arul", "Geeta", "Deepika", "Arun", "Sundeep"]

// Older approach

// let sid = student.sid
// let sname = student.sname
// let location = student.location

//Better and enhanced es6 approach
let {sid, sname, location} = student

console.log(sid);
console.log(sname);
console.log(location);

// let name1 = studentNames[0]
// let name2 = studentNames[1]

let [name1,, name3, ...names] = studentNames
console.log(name1);
console.log(name3);

console.log(names);