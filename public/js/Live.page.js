var App = require('./app');
var Live = require('./components/Live.react');
var React = require('react');

var LivePage = React.createClass({
  render: function () {
    return (
      <App {...this.props}>
        <Live {...this.props}/>
      </App>
    )
  }
});

module.exports = {

  LivePage: LivePage,

  toString: function(args) {
    return React.renderToStaticMarkup(<LivePage {...args} />);
  },

  render: function(props) {

    window.React = React;

    React.render(
      <Live {...props} />,
      document.querySelector('.app')
    );

  }
};
