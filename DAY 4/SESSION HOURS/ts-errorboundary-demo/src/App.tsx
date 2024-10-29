import * as React from 'react'
import ReactDOM from 'react-dom'
import {ErrorBoundary} from 'react-error-boundary'

function ErrorFallback(error:Error) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{color: 'red'}}>{error.message}</pre>
    </div>
  )
}

interface MessageProps {
  subject: string;
}


function Greeting(props:MessageProps){
  return <div>Hello {props.subject.toUpperCase()}</div>
}

function Farewell(props:MessageProps){
  return <div>Hello {props.subject.toUpperCase()}</div>
}



export const App = () => {
  return (
    <div>
      {<Greeting />}
      {<Farewell />}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
