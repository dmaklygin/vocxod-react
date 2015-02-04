var React = require('react');
var LineEvent = React.createClass({

  getMainOutcomes: function() {

    return [
      { name: '1', mnemonic: 'coeff_FT_1', basis: null },
      { name: 'X', mnemonic: 'coeff_FT_X', basis: null },
      { name: '2', mnemonic: 'coeff_FT_2', basis: null },
      { name: '1X', mnemonic: 'coeff_DCFT_1X', basis: null },
      { name: '12', mnemonic: 'coeff_DCFT_12', basis: null },
      { name: 'X2', mnemonic: 'coeff_DCFT_X2', basis: null },

      { name: 'coeffs.fora.1', mnemonic: 'coeff_ODDS_FT_0ODDS_H', basis: 'coeff_ODDS_FT_0ODDS', isFora: true },
      { name: 'coeffs.fora.2', mnemonic: 'coeff_ODDS_FT_0ODDS_A', basis: 'coeff_ODDS_FT_0ODDS', isFora: true },

      { name: 'coeffs.total.tl', mnemonic: 'coeff_FT_TL', basis: 'coeff_FT_T' },
      { name: 'coeffs.total.tg', mnemonic: 'coeff_FT_TG', basis: 'coeff_FT_T' }
    ];
  },

  // @TODO !!! must move with function to service
  cf: function(event, mnemonic) {
    if (!event) { return false; }
    return (event.cse && event.cse[mnemonic]) || (event.cs && event.cs[mnemonic]) || false
  },

  getCF: function(event, mnemonic, isFora) {
    var result;

    if ((result = this.cf(event, mnemonic)) == false) {
      return '';
    }

    if (isFora && !result) {
      return '';
    }

    return result[2];
  },

  getBasisParentheses: function(event, outcome) {
    var cf = this.getCF(event, outcome.mnemonic);
    var basis = '' + this.getCF(event, outcome.basis, outcome.isFora);
    if (basis.length && outcome) {
      return '(' + basis + ')';
    }
    return '';
  },

  render: function() {
    var _this = this;
    var event = this.props.event;
    var outcomes = this.getMainOutcomes();
    return (
      <tr className="line-event">
        <td className="line-event__info">
          <div className="line-event__players">
            {event.home} VS {event.away}
          </div>
          <div className="line-event__description">

          </div>
        </td>
        <td className="line-event__counter">
          <div className="line-event__counter-container">
            0
          </div>
        </td>
        {outcomes.map(function(outcome) {
          return (
            <td className="line-event__cf" key={outcome.mnemonic}>
              <div className="line-event__cf-basis">{_this.getBasisParentheses(event, outcome)}</div>
              <div className="line-event__cf-value">{_this.getCF(event, outcome.mnemonic)}</div>
            </td>
          )
        })}
        <td>
        </td>
      </tr>
    )
  }
});


module.exports = LineEvent;