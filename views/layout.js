var React = require('react');
var DefaultLayout = React.createClass({
  render: function() {
    return (
      <html lang="en">
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/app.css" />
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    )
  }
});

module.exports = DefaultLayout;
