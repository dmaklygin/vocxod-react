/** @jsx React.DOM */
var DefaultLayout = require('./layout');
var LiveModule = require('../public/js/Live.page');
var React = require('react');

module.exports = React.createClass({
  render: function() {
    var data = {
      sports: this.props.sports
    };
    var contentHtml = LiveModule.toString(data);
    var dataStr = JSON.stringify(data || {});

    return (
      <DefaultLayout {...this.props}>
        <div className="app" dangerouslySetInnerHTML={{__html: contentHtml}}></div>
        <script src="/js/live.page.js"></script>
        <script dangerouslySetInnerHTML={{__html: 'page.render(' + dataStr + ')'}} />
      </DefaultLayout>
    )
  }
});
