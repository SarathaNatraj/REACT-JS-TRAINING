import React, { Component } from 'react'

class ClassBasedComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }

      this.button3Clicked = this.button3Clicked.bind(this)
    }
    button1Clicked(){
        console.log("Button 1 clicked!");
        this.setState({
            count:this.state.count+1
        },
        ()=>{
            console.log(this.state.count);
        }
        )
    }

    button2Clicked(){
        console.log("Button 2 clicked!");
        this.setState({
            count:this.state.count+1
        },
        ()=>{
            console.log(this.state.count);
        }
        )
    }

    button3Clicked(){
        console.log("Button 3 clicked!");
        this.setState({
            count:this.state.count+1
        },
        ()=>{
            console.log(this.state.count);
        }
        )
    }

    button4Clicked = () => {
        console.log("Button 4 clicked!");
        this.setState({
            count:this.state.count+1
        },
        ()=>{
            console.log(this.state.count);
        }
        )
    }

  render() {
    return (
      <div>
          {this.state.count} <br/>
          <button onClick={this.button1Clicked.bind(this)}>Button1</button> <br/>
          <button onClick={()=>{ this.button2Clicked() }}>Button2</button> <br/>
          <button onClick={ this.button3Clicked }>Button3</button> <br/>
          <button onClick={ this.button4Clicked }>Button4</button> <br/>

      </div>
    )
  }
}

export default ClassBasedComponent