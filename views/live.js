/** @jsx React.DOM */
var Live = require('../public/js/components/Live.react');
var DefaultLayout = require('./layout');
var React = require('react');

module.exports = React.createClass({
  render: function() {
    var contentHtml = React.renderToString(<Live {...this.props}/>);
    return (
      <DefaultLayout {...this.props}>
        <div className="app" dangerouslySetInnerHTML={{__html: contentHtml}}></div>
        <script src="/js/live.page.js"></script>
      </DefaultLayout>
    )
  }
});
