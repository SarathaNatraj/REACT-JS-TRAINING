import { useState } from "react";
import { MathDemo } from "./math";



// syntax for code splitting scenario
// import ("<module-name>"). then({ // statements to be executed})
const useMyHook = () => {
  const [count, setCount] = useState(0);
  console.log(MathDemo.add(5,7)); //  nomral way using module

  //code spliting 
  import ("./math").then(math =>{
    const res = MathDemo.add(8,7);
    console.log(res);
 
    })

 
  return {
    count,
        incrementCount: () => setCount(count + 1)
     };
};

 function Count  () {
  const { count, incrementCount } = useMyHook();

  return (
    <>
      <h1>Component with Dynamic Count</h1>
      <p>The count is {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </>
  );
};
export default Count;