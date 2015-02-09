var API = require('../services/api');

module.exports = {

  getInitialState: function() {

    this.props.sports.forEach(function(sport) {
      sport.tournaments || (sport.tournaments = []);
      sport.active = true;
    });

    return { sports: this.props.sports };
  },

  componentDidMount: function() {
    // Upload new data
    this.pullUpdates();
    // Create updating interval
    window.setInterval(this.pullUpdates.bind(this), this.timeout * 1000);
  },

  /**
   * Uploads line updates
   */
  pullUpdates: function() {
    var _this = this;

    API.request(this.command, { line_version: this.version })
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
        sport.tournaments.push(tournament);
      }
    });

    // Update state
    this.setState(this.state.sports);
  }
};