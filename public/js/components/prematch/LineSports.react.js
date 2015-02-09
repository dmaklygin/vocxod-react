var LineTournaments = require('./LineTournaments.react.js');
var React = require('react');

var LineSports = React.createClass({

  checkSport: function(sport) {

    if (!sport.active) {
      return false;
    }

    if (!sport.tournaments || !sport.tournaments.length) {
      return false;
    }

    return true;
  },

  render: function() {
    var
      _this = this,
      sports = {};

    this.props.sports.forEach(function(sport) {

      if (!_this.checkSport(sport)) {
        return;
      }

      var classes = 'line-sport__title sport-bar sport-bar_t_' + sport.slug;
      sports['l-s-' + sport.id] = (
        <div className="line-sport line-sports__item">
          <div className={classes}>{sport.name}</div>
          <LineTournaments tournaments={sport.tournaments} />
        </div>
      )
    });
    return (
      <div className="line-sports">
        <div className="line-sports__container">
          {sports}
        </div>
      </div>
    )
  }
});
module.exports = LineSports;
