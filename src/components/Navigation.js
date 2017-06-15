import React from 'react'
import Continue from './Continue.js'
import Back from './Back.js'


class Navigation extends React.Component {
  render () {
    var NavigationStyle = {
      backgroundColor: 'green'
    };

    return (
      <div style = { NavigationStyle}>
        <Continue></Continue>
        <Back></Back>
      </div>
    )
  }
}

module.exports = Navigation
