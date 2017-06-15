import React from 'react';

class Back extends React.Component {
  render () {
    var backStyle = {
      color: 'pink'
    };

    return (
      <div style = {backStyle}>
        <h5>Back</h5>
      </div>
    )
  }
}

module.exports = Back
