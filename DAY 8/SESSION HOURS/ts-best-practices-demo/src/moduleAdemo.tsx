import React, { Component } from "react";

class ModuleADemo extends React.Component{

    handleClick = () =>{

        //code splitting we had imported the module
        import('./moduleA').then(({moduleA}) =>{
console.log('inside module');
        })
        .catch(err => {

        })
    }


    render(): React.ReactNode {
        return(
            <div>
                <button onClick={this.handleClick}>Load</button>
            </div>
        )

    }
}

export default ModuleADemo;