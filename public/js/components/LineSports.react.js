var React = require('react');

var LineSports = React.createClass({
  render: function () {
    var sports = {};
    this.props.sports.forEach(function(sport) {
      sports['line-sport-' + sport.id] =
        <div className="line-sport">
          <div className="line-sport__title">{sport.name}</div>
          <div className="line-sport__tournaments">
            tournaments...
          </div>
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
