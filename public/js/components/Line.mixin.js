var API = require('../services/api');

module.exports = {

  getInitialState: function() {
    return { sports: this.props.sports };
  },

  componentDidMount: function() {
    var _this = this;

    window.setInterval(function() {
      API.request(_this.command, { line_version: _this.version })
        .done(function (response) {
          _this.version = response.line_version;
          _this.updateTournaments(response.tournaments || []);
        });
    }, this.timeout * 1000);
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
  }
};