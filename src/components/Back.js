import React from 'react';

class Back extends React.Component {
  render () {
    var backStyle = {
      color: 'blue'
    };

    return (
      <div styles = {backStyle}>
        <h5>Back</h5>
      </div>
    )
  }
}

module.exports = Back
