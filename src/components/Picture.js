import React from 'react'

class Picture extends React.Component {
  render () {
    return (
      <div className = 'picture'>
        <a href="http://placeholder.com"><img src="http://via.placeholder.com/140x100"/></a>
      </div>
    )
  }
}

module.exports = Picture
