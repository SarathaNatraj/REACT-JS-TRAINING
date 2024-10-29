let comments = [
    { author:"Kanakaraj", commentBody:"Good Product"},
    { author:"Vijay", commentBody:"Bad Product"},
    { author:"Deepika", commentBody:"Decent Product"},
    { author:"Rahavendra", commentBody:"Great Product"},
]

function postComment(comment){
    setTimeout(()=>{    
        comments.push(comment)
        getAllComments()
    }, 4000)
}

function getAllComments(){
    setTimeout(()=>{
        comments.forEach((comment)=>{
            console.log(comment.commentBody);
        })
    }, 1000)
}

postComment({ author:"Priya", commentBody:"Damaged Product received"})
