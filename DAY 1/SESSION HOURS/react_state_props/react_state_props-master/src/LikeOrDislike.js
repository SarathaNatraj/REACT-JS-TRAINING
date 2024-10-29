import React, { Component } from 'react'

class LikeOrDislike extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         liked:"Disliked"
      }
    }
    likeDislike(){
        if(this.state.liked=="Disliked"){
            this.setState({
                liked: "Liked"
            })
        }
        else{
            this.setState({
                liked:"Disliked"
            })
        }
        
     }
   
  render() {
    return (
      <div>
          <div>Liked: {this.state.liked}</div>
          <button onClick={()=> this.likeDislike()}>Like</button>
      </div>
    )
  }
}

export default LikeOrDislike