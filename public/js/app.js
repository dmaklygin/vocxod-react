var Header = require('./components/header/Header.react');
var Footer = require('./components/footer/Footer.react');
var React = require('react');

var App = React.createClass({
  render: function () {
    return (
      <div className="application">
        <Header />
        <div>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
});

module.exports = App;
