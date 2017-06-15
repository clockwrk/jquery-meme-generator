import React from 'react'
import Steps from './Steps.js'
import Gallery from './Gallery.js'
import Terms from './Terms.js'
import Navigation from './Navigation.js'

class Options extends React.Component {
  render () {
    var optionsStyle = {
      backgroundColor: 'blue'
    };

    return (
      <div style = {optionsStyle}>
        <Steps></Steps>
        <Gallery></Gallery>
        <Terms></Terms>
        <Navigation></Navigation>
      </div>
    )
  }
}

module.exports = Options
