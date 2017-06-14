import React from 'react'
import Canvas from './Canvas.js'

class Preview extends React.Component {
  render () {
    return (
      <div className = 'preview'>Preview
        <Canvas></Canvas>
      </div>
    )
  }
}

module.exports = Preview
