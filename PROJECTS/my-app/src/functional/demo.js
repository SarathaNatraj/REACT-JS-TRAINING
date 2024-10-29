import { useState } from "react";


//Counter functional components

//function Demo(){ 
// return(
//)
//}
 const Demo = () => {

    const fruits=['Apple', 'Berry', 'Cherry'];
    const handleClick = () =>{
        console.log("inside the handle click");

        const name = 'Tiger'
    const age = 13
    console.log(`My cat is named ${name} and is 
        ${age} years old.`)

        const empname='Vishal';
        const skill='React';
        const empdetails = `My  name is ${empname}  and i am having 4+ years of exp in ${skill}`;
        console.log(empdetails);
    }

    const handleLoad = () =>{

      
    }

    return(
        <div onLoad={handleLoad}>

            <li>{fruits[0]}</li>

            <li>{fruits[1]}</li>
            <li>{fruits[2]}</li>

                <button onClick={handleClick}>Click Me</button>
        </div>

    );


 }

 export default Demo;