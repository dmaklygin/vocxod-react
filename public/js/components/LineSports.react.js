var LineTournaments = require('./LineTournaments.react');
var React = require('react');
var LineSports = React.createClass({
  version: 0,

  componentDidMount: function() {
    console.log('componentDidMount');
    var req = new XMLHttpRequest();
    req.open('GET', 'http://vocxod.com/api/index.php?command=live&line_version=' + this.version);
    req.onreadystatechange = function() {
      try {
        if (req.readyState == 4 && req.status == 200) {
          console.log(req);
        }
      } catch (e) {}
    };
  }, render: function() {
    var sports = {};
    this.props.sports.forEach(function(sport) {
      sports['l-s-' + sport.id] = <div className="line-sport">
        <div className="line-sport__title">{sport.name}</div>
        <LineTournaments tournaments={sport.tournaments} />
      </div>
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
