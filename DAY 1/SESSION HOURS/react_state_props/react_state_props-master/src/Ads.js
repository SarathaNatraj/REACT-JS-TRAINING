import React, { Component } from 'react'

class Ads extends Component {
  render() {
    return (
      <div>
          <h3>Ad details!</h3>
          <h4>Ad brand: {this.props.brand}, Budget: {this.props.budget}</h4>
      </div>
    )
  }
}

export default Ads