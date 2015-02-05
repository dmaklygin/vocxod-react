var LineTournaments = require('./LineTournaments.react');
var React = require('react');

var LineSports = React.createClass({

  render: function() {
    var sports = {};
    this.props.sports.forEach(function(sport) {
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
