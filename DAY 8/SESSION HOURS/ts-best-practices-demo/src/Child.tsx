import { Component, ReactNode } from "react";
import React from "react";

interface Props{
    name:string
}

class Child extends React.PureComponent<Props>{

  
    render():ReactNode{
        console.log("Child render method");
        return(
        <div> 
            <h2>{this.props.name}</h2>
        </div>
        );

    }
    

}

export default Child;