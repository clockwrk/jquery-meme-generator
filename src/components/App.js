import React from 'react'
import Preview from './Preview.js'
import Options from './Options'
import { Flex, Box } from 'reflexbox'

class App extends React.Component {
  render() {
    var appStyle = {
      textAlign: 'center'
    };

    return (
      <div style={appStyle} >
          <h1> TEASED, TUGGED, FRIED, DYED </h1>
          <h2> Youve hurt your hair. Before the healing can begin, its time to say sorry. </h2>
       <Flex>
          <Box px={2} w={1/2}><Preview></Preview></Box>
          <Box px={2} w={1/2}><Options></Options></Box>
        </Flex>
      </div>
        );
    }
}

module.exports = App
