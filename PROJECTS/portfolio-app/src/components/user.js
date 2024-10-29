import React from 'react';
import PropTypes from 'prop-types'


const User = ({name, age, email}) =>{

    return(
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </div>
    )

    
}

User.propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        
}

User.defaultProps = {
    name:"Demo User",
    age:18,
    email:"demo@gmail.com"
}

export default User;