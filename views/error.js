var DefaultLayout = require('./layout');
var React = require('react');
module.exports = React.createClass({
  render: function() {
    return (
      <html lang="en">
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/app.css" />
        </head>
        <body>
          <h1>{this.props.message}</h1>
          <h2>{this.props.error}</h2>
        </body>
      </html>
    )
  }
});
