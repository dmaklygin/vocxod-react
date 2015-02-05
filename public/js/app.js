var Header = require('./components/header/Header.react');
var Footer = require('./components/footer/Footer.react');
var React = require('react');

var App = React.createClass({
  render: function () {
    return (
      <div className="app__container">
        <Header />
        {this.props.children}
      </div>
    )
  }
});

module.exports = App;
