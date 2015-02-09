var App = require('./app');
var Prematch = require('./components/prematch/Prematch.react');
var React = require('react');

var PrematchPage = React.createClass({
  render: function () {
    return (
      <App {...this.props}>
        <div className="content content_type_line">
          <Prematch {...this.props}/>
        </div>
      </App>
    )
  }
});


module.exports = {

  PrematchPage: PrematchPage,

  toString: function(args) {
    return React.renderToStaticMarkup(<PrematchPage {...args} />);
  },

  render: function(props) {
    window.React = React;
    React.render(<PrematchPage {...props} />, document.querySelector('.app'));
  }
};
