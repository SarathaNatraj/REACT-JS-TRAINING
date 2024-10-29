import React	from 'react';


class EmployeeClassState extends React.Component{

    

    constructor(props){
        super(props);
        console.log(props);
     //   console.log(this.props.name);

        this.state = {
            name:'Demo',
            skill:'Java',
            email:'Demo email'

        }
       
    }

    updateEmployee = (newName, newSkill, newEmail) => {
        this.setState({
            name:newName,
            skill:newSkill,
            email:newEmail
        });
    }
     

    render(){
        return(
        <div><p>Name : {this.state.name}</p>
        <p>Skill : {this.state.skill}</p>
        <p>Email : {this.state.email} </p>
        
        <button onClick={() => this.updateEmployee('Jane', 'React', 'Jane@gmail.com')}>Update Employee</button>
         </div>
        );
    }
}

export default EmployeeClassState;