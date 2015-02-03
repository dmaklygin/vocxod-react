var React = require('react');
var LineFilterSports = require('./LineFilterSports.react');
var LineSports = require('./LineSports.react');
var API = require('../services/api');


var Line = React.createClass({

  version: 0,

  getInitialState: function() {
    return { sports: this.props.sports };
  },

  componentDidMount: function() {
    var _this = this;
    API.request('line', { line_version: this.version })
      .done(function (response) {
        _this.version = response.line_version;
        _this.updateTournaments(response.tournaments || []);
      });
  },

  updateTournaments: function (tournaments) {
    var _this = this;
    tournaments && tournaments.forEach(function (tournament) {
      var sport = _this.state.sports.filter(function (sport) { return sport.id == tournament.sport_id }).shift();
      if (sport) {
        sport.tournaments || (sport.tournaments = []);
        sport.tournaments.push(tournament);
      }
    });

    // Update state
    this.setState(this.state.sports);
  },

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
