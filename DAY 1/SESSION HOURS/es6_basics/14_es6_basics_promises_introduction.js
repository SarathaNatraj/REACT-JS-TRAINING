function meetUp(){
    let isAllGood = true
    let rp = new Promise((resolve, reject)=>{
        if(isAllGood){
            resolve("Ajay arrived on time, Lets continue the bike ride to the movie")
        }
        else{
            reject("Sorry I couldn't make it ontime, Please proceed with your task")
        }
    })
    return rp
}

let promise = meetUp()
promise.then(response=>{
    console.log(response);
})
.catch(error => 
    console.log(error))