import React from 'react'
import Address from './Address'
import PropTypes from 'prop-types';


 function Employee(props) {
  return (
    <div>
        <h2>Employee Name: {props.empname}</h2>
        <h2>Salary: {props.salary}</h2>
        <Address street="North Street" city={5000}/>
        <Address />
    </div>
  )
}

Employee.propTypes = {
    empname: PropTypes.string,
    salary: PropTypes.number
}

Employee.defaultProps = {
    empname:"Default name",
    salary:"2000"
}

export default Employee
