import React from 'react';
import ReactDOM from 'react-dom/client';

//props - pass values from one component to another component
//state - within class itself, you want to keep attributes , it is applicable to class components
class Car extends React.Component {
  constructor() {
    super();
    this.state = {color: "red", model :"SUV", brand:"Maruti"};
  }
  handleClick = () => {
    this.setState({color: "blue"});
    this.setState({model:"XUV"});
    this.setState({brand:"Kia"});
    


  }
  render() {
    return<div> <h2>I am a {this.state.color} {this.state.model}  {this.state.brand}  Car!</h2> 
        <br/>
        <button onClick={this.handleClick}>Change Car Details</button>
        </div>;
  }
}
export default Car;