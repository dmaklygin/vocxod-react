var LineMixin = require('../Line.mixin');
var React = require('react');
var LineFilterSports = require('./LineFilterSports.react');
var LineSports = require('./LineSports.react');

var Prematch = React.createClass({
  mixins: [LineMixin],
  // current line version
  version: 0,
  // updating interval
  timeout: 60,
  // Request command to pull data from server
  command: 'line',

  render: function () {
    return (
      <div className="line">
        <div className="line__container row">
          <div className="line__sport">
            <LineFilterSports />
          </div>
          <div className="line__main">
            <div className="line__additional"></div>
            <div className="line__separator"></div>
            <LineSports sports={this.props.sports} />
          </div>
          <div className="line__coupon"></div>
        </div>
      </div>
    )
  }
});

module.exports = Prematch;
