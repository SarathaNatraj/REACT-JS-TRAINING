import { useState } from "react";
//Functional Components can not maintain state upto React 16.8, they  can be used with help of Hooks

//Counter functional components
 const Counter = (data) =>{
    const[count,setCount] = useState(0);
    const[greeting,setGreeting] = useState('No one has accessed!');
    const[message,setMessage] = useState('');


    const handleClick = () =>{
        console.log("inside the handle click");
        if(data.title == "Add"){
            setCount(count + 1);
            setGreeting("You Accessed the Counter Component - Increment");
            setMessage("No of Likes : "+count);
            var val; //varaible declaration
            console.log(val); //undefined
            val = 3; //assignment
            console.log(val); //3

            let radius=5; //variable initialisation
            console.log(radius);
            radius=6;
            console.log(" after change "+radius);

        }else{
            setCount(count - 1);
            setGreeting("You Accessed the Counter Component - Decrement");
            setMessage("No of Dislikes : "+count);
        }
        {
            //block scope variables
            let cue;
            cue='let variable demo';
            console.log(cue)
            var demo="test";
            console.log(demo);
        }
        console.log(demo);
        
    }

    return (
        <div className="counter" >
            <p>{message}</p>
            <p>{greeting}</p>

            <button onClick={handleClick}>Click Me</button>

        </div>
    );
}


export default Counter;