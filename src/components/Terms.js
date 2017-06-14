import React from 'react'

class Terms extends React.Component {


  render () {
    var termsStyle = {
      color: 'blue'
    };
    
    return (
      <div styles = {termsStyle}>
        <span>
          <input id="checkbox" type="checkbox"></input>
          <h5>I agree to the <a href="https://joserenteria"><u>terms & conditions</u></a></h5>
        </span>
      </div>
    )
  }
}

module.exports = Terms
