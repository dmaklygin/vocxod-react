var DefaultLayout = require('./layout');
var React = require('react');
module.exports = React.createClass({
  render: function() {
    return (
      <DefaultLayout>
        <h1>{this.props.message}</h1>
        <h2>{this.props.error}</h2>
      </DefaultLayout>
    )
  }
});
