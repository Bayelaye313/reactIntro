import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Counter extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        <button>+</button>
        <span>0</span>
        <button>-</button>

        
      </div>
    )
  }
}
