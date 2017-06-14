import React from 'react'
import Preview from './Preview.js'
import Options from './Options'

class App extends React.Component {
  render() {
    var appStyle = {
      color: 'red'
    };
    
    return (
          <div style = {appStyle}>
            <h1> TEASED, TUGGED, FRIED, DYED </h1>
             <h2> Youve hurt your hair. Before the healing can begin, its time to say sorry. </h2>
             <div>
                <Preview></Preview>
                <Options></Options>
             </div>
            </div>
        );
    }
}

module.exports = App
