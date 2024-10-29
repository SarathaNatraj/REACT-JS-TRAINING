import React from 'react'
// import { ContextConsumer } from "./AppContext";
import AppContext from "./AppContext";

export default function ComponentC() {
    const context = React.useContext(AppContext);
    return (
        // <div>
        //     ComponentC
        //     <ContextConsumer>
        //         {
        //             (data) => {
        //                 return <h2>{data}</h2>
        //             }
        //         }
        //     </ContextConsumer>
        // </div>
        // <div>
        //     <AppContext.Consumer>
        //         {
        //             (data) => {
        //                 return <h2>{data}</h2>
        //             }
        //         }
        //     </AppContext.Consumer>
        // </div>
        <div>
            <h2>{context.name}</h2>
        </div>
    )
}
