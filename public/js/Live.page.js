var Live = require('./components/Live.react');
var React = require('react');
window.React = React;

React.render(
  <Live />,
  document.querySelector('.app')
);
