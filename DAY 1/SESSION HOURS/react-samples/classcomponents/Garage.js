import React from "react";

class Engine extends React.Component {
    render() {
      return <h2>I am a Engine!</h2>;
    }
  }
  class Break extends React.Component{
    render(){
        return <h2>I am Break!</h2>
    }
  }
  
  class Bus extends React.Component {
    render() {
      return (
        <div>
        <h1>What my Bus have?</h1>
        <Engine />
        <Break/>
        </div>
      );
    }
  }
  export default Bus;