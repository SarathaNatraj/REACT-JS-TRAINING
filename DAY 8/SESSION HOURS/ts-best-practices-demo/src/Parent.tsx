import { Component, ReactNode } from "react";
import React from "react";
import Child from "./Child";
import { useState } from "react";

interface State{
    count:any
}

class Parent extends React.Component<{},State>{
    //const[count, setCount]= useState(count:0);
    state = {
        count : 0
    };

    constructor(props:any){
        super(props);
        this.state = {count : 0};
    }
    handleClick = () => {
        this.setState((prevState)=> {
            return {count : prevState.count + 1};
        })
    }


    render():ReactNode{
        console.log("Parent render method");
        return(
        <div> 
            <button onClick={this.handleClick}>Increment</button>
            <h2>{this.state.count}</h2>
            <Child name={"joe"}/>
        </div>
        );

    }
    

}

export default Parent;