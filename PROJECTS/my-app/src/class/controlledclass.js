import React from "react";

class ControlledClass extends React.Component{

    //initailsation
    constructor(props){
        console.log(" constructor : component has been initialised.")
        super(props);
        this.state = {
            username: '',
          email: '',
        password: ''

        }
    }

     handleChange = (event) => {
        const{name,value} = event.target;
        console.log(event.target);
        this.setState({
            [name]:value
     })
    }


     handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form is submitted with data : "+this.state.username, this.state.email, this.state.password);
    }

    render(){
        return (

            <div>
                <h1> Controlled Class Component Example</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                             />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                             />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="text"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                             />
                    </div>
                    <button type="submit">Submit</button>
                </form>
    
                
    
            </div>
    
        );
    
    }

}

export default ControlledClass;