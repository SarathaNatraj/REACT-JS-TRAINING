import { useState,useMemo } from "react";

export function CalculateFactorial(){
    const[number, setNumber] = useState(1);
    const[inc,setInc] = useState(0);

    const  handleChange = (event:any) =>{
        setNumber(event.target.value);
    }
    const handleClick = () => setInc(inc => inc+1);

   const factorial = useMemo (() => factorialOf(number),[number]);
    //const factorial =  factorialOf(number);

    return(
        <div>
            Factorial of 
                <input type="text" placeholder="1" onChange={handleChange} />
            is {factorial} 
            <button onClick={handleClick}>Re-render</button>
        </div>
    )

    function factorialOf(n:any):any{
        console.log("factorial n called!")
        return n <= 0 ? 1 : n * factorialOf(n-1);
    }

}

export default CalculateFactorial;