import React from 'react'
import Canvas from './Canvas.js'

class Preview extends React.Component {
  render () {
    var previewStyles =  {
      backgroundColor: 'pink'
    }

    return (
      <div style = {previewStyles}>Preview
        <Canvas></Canvas>

      </div>
    )
  }
}

module.exports = Preview
