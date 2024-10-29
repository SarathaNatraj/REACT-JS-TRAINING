import React from "react";


interface Props{
    name: string,
  //  child:MouseEvent
    
}

function ChildFun(props:Props){
    console.log("child render");
    return(
        <div> 
            <h2>{props.name}</h2>
        </div>
        );


}

export default React.memo(ChildFun);