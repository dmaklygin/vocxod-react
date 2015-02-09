var React = require('react');
var LineMixin = require('../Line.mixin');
var LineSports = require('./../prematch/LineSports.react.js');

var Live = React.createClass({
  mixins: [LineMixin],
  // current line version
  version: 0,
  // updating interval
  timeout: 5,
  // Request command to pull data from server
  command: 'live',

  render: function () {
    return (
      <div className="line live">
        <div className="line__container row">
          <div className="line__sport">
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


module.exports = Live;
