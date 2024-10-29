import React, { useState } from "react";


const ControlledComponent = () => {


    //formData - single source of data , controls state of the input controls, helps validation, dynamic updates, form submission
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const{name,value} = event.target;
        console.log(event.target);
        setFormData({
            ...formData,
            [name]:value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form is submitted with data : "+formData.username, formData.email, formData.password);
    }

    return (

        <div>
            <h1> Controlled Component Example</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                         />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                         />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="text"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                         />
                </div>
                <button type="submit">Submit</button>
            </form>

             <input

                        type="text"
                        onChange={handleChange}
                        />


        </div>

    );

}

export default ControlledComponent;