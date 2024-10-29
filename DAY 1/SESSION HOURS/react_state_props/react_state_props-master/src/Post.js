import React, { Component } from 'react'
import LikeDislike from './LikeDislike'
import LikeOrDislike from './LikeOrDislike'

class Post extends Component {

 constructor(props) {
   super(props)
 
   this.state = {
      title:"Title of the Post",
      message:"All is well!!!"

   }
 }

 updateState(){
    this.setState({
        title: "Benefits of fruits",
        message: "Fruits are good for health!!!"
    })
 }

  render() {
    return (
      <div>
          <h2> {this.state.title} </h2>
          <h3> {this.state.message} </h3>
          <button onClick={()=> {this.updateState()}}>Change State</button>
          <input type="text" />
          <LikeDislike />
          <LikeOrDislike />
      </div>
    )
  }
}

export default Post