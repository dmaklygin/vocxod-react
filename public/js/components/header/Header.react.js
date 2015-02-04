var User = require('../User.react');
var React = require('react');

var Header = React.createClass({
  render: function () {
    return (
      <header className="header">
        <div className="header__logo">LOGOTYPE</div>

        <User />
      </header>
    )
  }
});

module.exports = Header;
