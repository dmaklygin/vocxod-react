var App = require('./app');
var Line = require('./components/Line.react');
var React = require('react');

var LinePage = React.createClass({
  render: function () {
    return (
      <App {...this.props}>
        <Line {...this.props}/>
      </App>
    )
  }
});


module.exports = {

  LinePage: LinePage,

  toString: function(args) {
    return React.renderToStaticMarkup(<LinePage {...args} />);
  },

  render: function(props) {
    window.React = React;
    React.render(<LinePage {...props} />, document.querySelector('.app'));
  }
};
