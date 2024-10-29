import React	from 'react';


class CounterClass extends React.Component{
     
    constructor(props){
        super(props);
        this.state = {
            count : 0,
        };
    }

    
    handleClick = () =>{
        this.setState({
            count : this.state.count +1
        });
    }

    render(){
        return(
            <div className="counter" >
           <h2>You have clicked : {this.state.count} of times</h2>

            <button onClick={this.handleClick}>Click Me</button>

          </div>
        );
    }

}

export default CounterClass;