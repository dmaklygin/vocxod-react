/** @jsx React.DOM */
var DefaultLayout = require('./layout');
var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <DefaultLayout {...this.props} _module="line.page.js" />
    )
  }
});
