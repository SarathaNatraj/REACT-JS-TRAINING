import React from "react";

function Button(props:any) {
    let { action, title } = props;
    return <button onClick={action}>{title}</button>;
}

export default Button;
