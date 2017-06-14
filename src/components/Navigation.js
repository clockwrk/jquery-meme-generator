import React from 'react'
import Continue from './Continue.js'

class Navigation extends React.Component {
  render () {
    return (
      <div className = "navigation">
        <Continue></Continue>
        <Back></Back>
      </div>
    )
  }
}

module.exports = Navigation
