/** @jsx React.DOM */
var App = require('./app');
var React = require('react');

var IndexPage = React.createClass({
  render: function () {
    return (
      <App {...this.props}>
        <div className="main-page">
          Something Main Page
        </div>
      </App>
    )
  }
});

module.exports = {

  IndexPage: IndexPage,

  toString: function(args) {
    return React.renderToStaticMarkup(<IndexPage {...args} />);
  },

  render: function(props) {
    React.render(<IndexPage {...props} />, document.querySelector('.app'));
  }
};
