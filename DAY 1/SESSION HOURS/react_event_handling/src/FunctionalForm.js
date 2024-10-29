import React, {useState} from 'react'
let commentArr = []

function FunctionalForm() {


    const [comment, setComment] = useState("")
    let myComment = "Initial comment"

    function listentComment(event){
        // console.log(event.target.value);
        myComment = event.target.value
    }

    function buttonClicked(event){
        commentArr.push(myComment)
        setComment(commentArr.toString())
    }


  return (
    <div>
        <br/>
        {comment}
        <input onChange={listentComment} type="text" placeholder='Input your comment'/> <br/>
        <button onClick={buttonClicked}>Post</button>
    </div>
  )
}

export default FunctionalForm