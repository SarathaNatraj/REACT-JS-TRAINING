import React from "react";
import * as Sentry from '@sentry/react';
import { Logger, ILogObj } from "tslog";
const mainLogger = new Logger({ type: "pretty", name: "MainLogger" });
mainLogger.silly("foo bar");


interface Props{
  hasError:false
}
class BadCounter extends React.Component {
  logger:any = new Logger({ name: "myLogger" });
  state = {
    counter: 0,
  };

  constructor(props:any) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState({
      counter: this.state.counter + 1,
    
    });
    mainLogger.info("counter clicked")
  }
  
  render() {
   
    if (this.state.counter === 3) {
        mainLogger.error("error occured")
      // Simulate a JS error
      throw new Error('I crashed!');  
    }
  
    return(<div> 
      <h1>Simple Counter</h1>
      <h1 id="counter"  data-testid="counter">{this.state.counter}</h1>
      <button data-testid="increment" onClick={this.handleClick}>Increment</button> </div>);
  }
}

export default BadCounter;