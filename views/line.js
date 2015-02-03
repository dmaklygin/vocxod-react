/** @jsx React.DOM */
var DefaultLayout = require('./layout');
var LineModule = require('../public/js/Line.page');
var React = require('react');

module.exports = React.createClass({
  render: function() {
    var data = {
      sports: this.props.sports
    };
    var contentHtml = LineModule.toString(data);
    var dataStr = JSON.stringify(data || {});

    return (
      <DefaultLayout {...this.props}>
        <div className="app" dangerouslySetInnerHTML={{__html: contentHtml}}></div>
        <script src="/js/line.page.js"></script>
        <script dangerouslySetInnerHTML={{__html: 'page.render(' + dataStr + ')'}} />
      </DefaultLayout>
    )
  }
});
