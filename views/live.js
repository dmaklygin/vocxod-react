/** @jsx React.DOM */

var DefaultLayout = require('./layout');
var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <DefaultLayout {...this.props}>
        <div className="app"></div>
        <script src="/js/line.page.js"></script>
      </DefaultLayout>
    )
  }
});
