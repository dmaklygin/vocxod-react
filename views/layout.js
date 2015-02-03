/** @jsx React.DOM */
var React = require('react');
var DefaultLayout = React.createClass({
  render: function() {

    var _module = require('../public/js/' + this.props._module);

    if (!_module) {
      throw new Error('Module ' + this.props._module + ' is not found');
    }

    var clientModulePath = '/js/' + this.props._module;
    //dangerouslySetInnerHTML={{__html: _module.toString(this.props.data) }}
    return (
      <html lang="en">
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/app.css" />
        </head>
        <body>
          {this.props.children}
          <div className="app"></div>
          <script src={clientModulePath}></script>
          <script dangerouslySetInnerHTML={{__html: 'page.render(' + JSON.stringify(this.props.data || {}) + ')'}} />
        </body>
      </html>
    )
  }
});

module.exports = DefaultLayout;
