var React = require('react');

var LineFilterSports = React.createClass({

  getInitialState: function() {
    var groups = {};
    this.props.sports.forEach(function(sport) {
      groups[sport.group] || (groups[sport.group] = true);
    });

    return { groups: Object.keys(groups) };
  },

  render: function () {

    var _this = this, groups = {};
    this.state.groups.forEach(function(groupId) {
      var groupSports = _this.props.sports.filter(function(sport) { return sport.group == groupId });
      if (!groupSports.length) {
        return;
      }
      groups['sg-' + groupId] = (
        <div className="filter-sports__group">
          <div className="filter-sports__group-name">groupName{groupId}</div>
          {groupSports.map(function(sport) {
            return (
              <div className="filter-sports__item filter-sport">
                <div className="filter-sport__label">
                  <input className="filter-sport__checkbox" type="checkbox" />
                  <div className="filter-sport__name">{sport.name}</div>
                </div>
              </div>
            )
          })}
        </div>
      )
    });

    return (
      <div className="filter-sports">
        <div className="filter-sports__container">
          <div className="filter-sports__all-checker filter-sport filter-sport_type_all">
            <label className="filter-sport__label">
              <input className="filter-sport__checkbox" type="checkbox" />
              <div className="filter-sport__name">Все виды</div>
            </label>
          </div>
          <div className="filter-sports__separator"></div>
          <div className="filter-sports__items">
            {groups}
          </div>
        </div>
      </div>
    )
  }
});

module.exports = LineFilterSports;
