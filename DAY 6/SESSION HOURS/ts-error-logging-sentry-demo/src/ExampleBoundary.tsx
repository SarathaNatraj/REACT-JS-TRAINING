import * as Sentry from '@sentry/browser';
import { Component, ReactNode } from 'react';
import { ErrorInfo } from 'react-dom/client';
import React from 'react';
import { FC } from 'react';
// Sentry.init({
//  dsn: "<https://63bbb258ca4346139ee533576e17ac46@sentry.io/1432138>"
// });
// should have been called before using it here
// ideally before even rendering your react app 


interface Props{
  //  hasError:boolean
}
interface State{
    error:boolean,
    children:ReactNode
}
class ExampleBoundary extends React.Component<Props,State> {
    
    constructor(props:any) {
        super(props);
        this.state = { error: false , children:''};
        
    }

    componentDidCatch(error:Error, errorInfo:ErrorInfo) {
      this.setState({ error:true });
    //  this.props.hasError=true;
    
      Sentry.withScope(scope => {
        Object.keys(errorInfo).forEach(key => {
          scope.setExtra(key, errorInfo);
        });
        Sentry.captureException(error);
      });
    }

    render() {
        if (this.state.error) {
            //render fallback UI
            return (
              <a onClick={() => Sentry.showReportDialog()}>Report feedback</a>
            );
        } 
            //when there's not an error, render children untouched
            return this.state.children;
        
    }
}

export default ExampleBoundary;