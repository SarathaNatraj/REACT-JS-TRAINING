import { useCallback, useState } from "react";
import  ChildFun  from "./ChildFun";



export function ParentFun(){
    const [count,setCount] = useState(0);

    const handler = useCallback(()=>{
        console.log("handler");
    },[]);
     const handleClick =  useCallback(()=>{
        console.log(count);
        setCount(count+1);
    },[count]);
    console.log("parent functional render");
    return(
        <div> 
            <button onClick={handleClick}>Increment</button>
            <h2>{count}</h2>
            <ChildFun name={"joe"} />
            
        </div>
        );


}