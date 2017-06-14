import React from 'react'
import Steps from './Steps.js'
import Gallery from './Gallery.js'
import Terms from './Terms.js'

class Options extends React.Component {
  render () {
    var optionsStyle = {
      color: 'blue'
    };

    return (
      <div styles = {optionsStyle}>
        <Steps></Steps>
        <Gallery></Gallery>
        <Terms></Terms>
      </div>
    )
  }
}

module.exports = Options
