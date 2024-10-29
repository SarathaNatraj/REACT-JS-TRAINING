import React from 'react'

function FunctionalComponent() {

function buttonClicked(){
    console.log("External function used to handle the click event!");
}

  return (
    <div>
        <button onClick={ function(){ console.log("Button clicked!"); alert("You clicked the button")} } >Button 1</button>
        <button onClick={buttonClicked}>Button 2</button>
    </div>
  )
}

export default FunctionalComponent