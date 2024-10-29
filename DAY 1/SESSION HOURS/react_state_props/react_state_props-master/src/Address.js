import React from 'react'
import PropTypes from 'prop-types';

function Address(props) {
  return (
    <div>
        <h3>{props.street}</h3>
        <h3>{props.city}</h3>
    </div>
  )
}

Address.defaultProps = {
    street:"South Street",
    city:"Thanjavur"
}

Address.propTypes = {
    street: PropTypes.string,
    city: PropTypes.string
}

export default Address