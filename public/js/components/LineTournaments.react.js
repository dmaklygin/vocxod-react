var React = require('react');

var LineTournaments = React.createClass({
  render: function () {
    var tournaments = {};
    this.props.tournaments.forEach(function (tournament) {
      tournaments['l-t-' + tournament.id] =
        <div className="line-tournament">
          <div className="line-tournament__header">{tournament.name}</div>
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
