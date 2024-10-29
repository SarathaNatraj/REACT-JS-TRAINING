import React	from 'react';


class GreetingForm extends React.Component{
     
    constructor(props){
        super(props);
        
        this.state = {
            name:'',
            greeting:''
        };
    }

    handleChange = (event) =>{
        this.setState({name:event.target.value});

    }


    handleSubmit = () =>{
     //  event.preventDefault();
        this.setState({greeting : `Hello ${this.state.name} !`})
    }
    render(){
        return (
            <div>
                <h2>Greeting Form </h2>
                <form >
                    <label>
                        Name:
                        <input 
                            type='text'
                            value={this.state.name}
                            onChange={this.handleChange}
                            />
                    </label>
                    <button type="button" onClick={this.handleSubmit}>submit</button>

               </form>
                {this.state.name && <h3>{this.state.greeting}</h3>}



            </div>


        );


    }

}
export default GreetingForm;