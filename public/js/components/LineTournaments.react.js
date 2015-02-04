var LineEvent = require('./LineEvent.react');
var React = require('react');

var LineTournaments = React.createClass({
  render: function () {
    var tournaments = {};
    this.props.tournaments && this.props.tournaments.forEach(function (tournament) {
      tournaments['l-t-' + tournament.id] =
        <div className="line-tournament">
          <div className="line-tournament__header">{tournament.name}</div>
          <table className="line_tournament__events">
            <tbody>
              {tournament.events.map(function (event) {
                var key = 'l-e-' + event.id;
                return (
                  <LineEvent key={key} event={event} />
                )
              })}
            </tbody>
          </table>
        </div>
    });

    return (
      <div className="line-tournaments">
        <div className="line-tournaments__contaier">
          {tournaments}
        </div>
      </div>
    )
  }
});

module.exports = LineTournaments;
