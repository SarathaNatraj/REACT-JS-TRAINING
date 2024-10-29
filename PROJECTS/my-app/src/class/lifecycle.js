import React from "react";

class LifeCycle extends React.Component{

    //initailsation
    constructor(props){
        console.log(" constructor : component has been initialised.")
        super(props);
        this.state = {
            count:0,
            message:'',
            username:'',
            password:'',
            email:'h@gmail.com'
        };
    }

    //Mounting
    componentDidMount(){
        console.log(" componentDidMount : component has been mounted.")

      //  this.timerID = setInterval(()=> this.tick(), 1000);

    }

    //Updating 
    shouldComponentUpdate(nextProps, nextState){
        console.log(" shouldComponentUpdate : component has been update ?.")
        return nextState.count;
       // return nextState.count % 2 !=0;
    }

    componentDidUpdate(prevProps, prevState){
        console.log(" componentDidUpdate : component has been updated.");
        console.log("Previous state ",prevState);
        console.log("Previous props ",prevProps);
    }

    //Change in props based on the state variable update
    static getDerivedStateFromProps(nextProps,prevState ){
        console.log(" getDerivedStateFromProps : component getDerivedStateFromProps .");
        console.log(" getDerivedStateFromProps : ",nextProps.value);
        
        if(nextProps.value !== prevState.message){
            console.log(" getDerivedStateFromProps nextProps.value",nextProps.value);
            return {
                message: nextProps.value,
            }
        }
        return null;

    }
    getSnapshotBeforeUpdate(){
        console.log(" getSnapshotBeforeUpdate : component snapshot .");
    }

    //unMounting 
    componentWillUnmount(){
        console.log(" componentWillUnmount : component is about to be unmounted.")
        clearInterval(this.timerID);
    }

    tick(){
        this.setState((state) => ({
            count : state.count+1,
        }));
    }
    handleClick = () =>{
        this.setState({
            count : this.state.count +1
        });
    }

    handleChange = (event) => {
        const{name,value} = event.target;
        console.log(event.target.value);
        this.setState({
                      [name] : value
        });
    }
    render(){
        console.log("render : Component is being rendered");
        return(

            <div>
                <h1>LifeCycle Methods</h1>
                <p>Count : {this.state.count}</p>
                <button onClick={this.handleClick}>Click Me</button>
                <p>Email : {this.state.email}</p>

                <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        value={this.state.email}
                        name="email"
                        onChange={this.handleChange}
                         />
            </div>
        );
    }
}

export default LifeCycle;