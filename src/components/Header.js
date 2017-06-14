import React from "react"

class Header extends React.Component {
  render() {
    return pug`
      div
        h1 My Component
        p This is my component using pug.
        a http://joserenteria.nyc
    `;
  }
}

// var Header = React.createClass({
//   render: function() {
//     return (
//       <div className="header">
//         { this.props.children }
//       </div>
//     )
//   }
// })

module.exports = Header;




// class Component extends React.Component {
//   render() {
//     return pug`
//       div
//         h1 My Component
//         p This is my component using pug.
//         a http://joserenteria.nyc
//     `;
//   }
// }
//
// module.exports = Component
