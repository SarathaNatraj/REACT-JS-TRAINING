import React from 'react';
import logo from './logo.svg';
import './App.css';
import ExampleBoundary from './ExampleBoundary';
import BadCounter from './BadCounter';
import * as Sentry from '@sentry/react';


function App() {
  return (
    <Sentry.ErrorBoundary fallback={<p>This is a fallback</p>}>

    
        <BadCounter/>
    </Sentry.ErrorBoundary>
   );
}

export default App;
