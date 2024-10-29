import React,{Suspense, lazy,Profiler} from 'react';
import logo from './logo.svg';
import './App.css';
//import { Count } from './trymodule';
//import { Login } from './Login';
import * as GreetingsComponents from './greeting';
import * as SampleComponents from './namedExpoAnother';
import Parent from './Parent';
import { ParentFun } from './ParentFun';
import CalculateFactorial from './CalculateFactorial';
import LocalStorage from './LocalStorage';
import Form from './Storage_Local';

//const Count = lazy(()=> import('./trymodule'));
const Count = React.lazy(()=>import('./trymodule'));
//when this gets load


const callback = (id: string,
  phase: "mount" | "update",
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number) => {
  console.log(
    "id " + id + 
    " startTime " + startTime + 
    " actualDuration " + actualDuration + 
    " baseDuration " + baseDuration + 
    " commitTime " + commitTime + 
    " phase " + phase 
    
  );
}
const Login = React.lazy(()=>import('./Login'))
//import ModuleADemo from './moduleAdemo';

function App() {
  return (
    <div className="App">
     {/* <Suspense>
      <Count/>
      </Suspense> */}
      {/* <Suspense fallback="<div> Loading... </div>">
      <Login/>
      </Suspense> */}
      {/* <GreetingsComponents.greeting/>
      <GreetingsComponents.sayHello/>
      <GreetingsComponents.goodBye/>
      <SampleComponents.Try/> */}
     {/* <Profiler id="Name" onRender={callback}>
       <CalculateFactorial/>
      </Profiler> */}

      <Form/>
    </div>
  );
}

export default App;
