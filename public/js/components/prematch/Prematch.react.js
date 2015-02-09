var LineMixin = require('../Line.mixin');
var React = require('react');
var LineFilterSports = require('./LineFilterSports.react');
var LineSports = require('./LineSports.react');

var Prematch = React.createClass({

  propTypes: {
    // Main Collection
    sports: React.PropTypes.array
  },

  mixins: [LineMixin],
  // current line version
  version: 0,
  // updating interval
  timeout: 60,
  // Request command to pull data from server
  command: 'line',

  changeFilter: function() {
    this.state.sports.forEach(function(sport) {
      sport.active = !sport.active;
    });
    this.setState(this.state);
  },

  render: function () {
    return (
      <div className="line">
        <div className="line__container row">
          <div className="line__sport">
            <LineFilterSports sports={this.state.sports} />
          </div>
          <div className="line__main">
            <div onClick={this.changeFilter}>Фильтр</div>
            <div className="line__additional"></div>
            <div className="line__separator"></div>
            <LineSports sports={this.state.sports} />
          </div>
          <div className="line__coupon"></div>
        </div>
      </div>
    )
  }
});

module.exports = Prematch;
