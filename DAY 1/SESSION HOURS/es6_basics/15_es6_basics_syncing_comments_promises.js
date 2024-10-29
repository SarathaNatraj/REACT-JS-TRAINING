let comments = [
    { author:"Kanakaraj", commentBody:"Good Product"},
    { author:"Vijay", commentBody:"Bad Product"},
    { author:"Deepika", commentBody:"Decent Product"},
    { author:"Rahavendra", commentBody:"Great Product"},
]

function postComment(comment){
    let commentPromise = new Promise((resolve, reject)=> {
        let isEverythingOk = true
        if(isEverythingOk){
            comments.push(comment)
            resolve('Comment posted successfully...')
        }
        else{
            reject('Comment post failed...')
        }
    })
    return commentPromise
    
}

function getAllComments(){
    setTimeout(()=>{
        comments.forEach((comment)=>{
            console.log(comment.commentBody);
        })
    }, 3000)
}

let commentPromise = postComment({ author:"Priya", commentBody:"Damaged Product received"})
commentPromise.then(resp=>{
    getAllComments()
})
.catch(error=>{
    console.log(error);
})