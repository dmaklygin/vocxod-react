var React = require('react');
var LineFilterSports = require('./LineFilterSports.react');
var LineSports = require('./LineSports.react');

var Live = React.createClass({
  render: function () {
    return (
      <div className="live">
        <div className="live__container row">
          <div className="live__sport">
            <LineFilterSports />
          </div>
          <div className="live__main">
            <LineSports sports={this.props.sports} />
          </div>
          <div className="live__coupon"></div>
        </div>
      </div>
    )
  }
});

module.exports = Live;
