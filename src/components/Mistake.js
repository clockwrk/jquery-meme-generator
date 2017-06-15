import React from 'react'

class Mistake extends React.Component {
  render () {
    var MistakenStyle = {
      backgroundColor: 'green'
    };

    return (
      <div styles = { MystakenStyle}>
      <img src={'http://placehold.it/400x20&text=slide1'} className="img-responsive"/>
      </div>
    )
  }
}

module.exports = Navigation
