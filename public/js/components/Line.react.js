var React = require('react');
var LineFilterSports = require('./LineFilterSports.react');
var LineSports = require('./LineSports.react');

var Line = React.createClass({
  render: function () {
    return (
      <div className="line">
        <div className="line__container row">
          <div className="line__sport">
            <LineFilterSports />
          </div>
          <div className="line__main">
            <LineSports sports={this.props.sports} />
          </div>
          <div className="line__coupon"></div>
        </div>
      </div>
    )
  }
});

module.exports = Line;
