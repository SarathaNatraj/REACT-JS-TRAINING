import React, { useEffect, useState,useRef } from "react";


const Timer = () => {

    const[count,setCount]= useState(10);
    const intervalRef= useRef(null);

    //Effect for componentDidMount and componentDidUpdate
    useEffect(() => {

        console.log("Timer started ");
        console.log(" useEffect with no return ");
        //Start the timer
        intervalRef.current = setInterval(()=>{
            setCount((prevCount)=> prevCount - 1);
        }, 1000);

        return () =>{
            clearInterval(intervalRef.current);
            
        }
    },[]);

    //Effect to handle the componentDidUpdate for count changes
    useEffect(()=>{
        console.log(" useEffect with count return ");
        if( count === 0){
            clearInterval(intervalRef.current);
            console.log('Timer stopped');
            console.log("Timer has reached zero");
        }
    },[count]);

    return(
        <div>

            <h1>CountDown Timer</h1>
            <p> Time left: {count} seconds</p>
        </div>
    )






}

export default Timer;