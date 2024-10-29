import React	from 'react';


class EmployeeClass extends React.Component{

    name=' ';
    constructor(props){
        super(props);
        console.log(props);
       
     //   console.log(this.props.name);
       
    }
     

    render(){
        return(
        <div><p>Name : {this.props.name}</p>
        <p>Skill : {this.props.skill}</p>
        <p>Email : {this.props.email} </p> </div>
        );
    }
}

export default EmployeeClass;