var App = require('./app');
var Live = require('./components/live/Live.react');
var React = require('react');

var LivePage = React.createClass({
  render: function () {
    return (
      <App {...this.props}>
        <div className="content content_type_line">
          <Live {...this.props}/>
        </div>
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
    React.render(<LivePage {...props} />, document.querySelector('.app'));
  }
};
