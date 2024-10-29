function extractData({sid, sname, location}){
    // let student = {
    //     sid:sid,
    //     sname: sname,
    //     location:location
    // }

    let student = {
        sid,
        sname,
        location
    }

    // console.log(sid);
    // console.log(sname);
    // console.log(location);

    console.log(student.sid);
    console.log(student.sname);
    console.log(student.location);
}


extractData({
    sid:1234,
    sname:"Varun",
    location:"Mumbai"
})
