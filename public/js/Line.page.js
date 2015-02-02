var Line = require('./components/Line.react');
var React = require('react');
window.React = React;

module.exports = React.render(
    <Line />,
    document.querySelector('.app')
  );
