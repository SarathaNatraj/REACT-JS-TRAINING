import React from "react";
import UserList from "./userlist";
import User from "./user";

const About = () =>{

    return (
        <div>
            <h2>About Me</h2>
            <p>this is about page.</p>
            <h3>My Friends</h3>
            <UserList/>
            <User/>
        </div>
    )
}

export default About;

