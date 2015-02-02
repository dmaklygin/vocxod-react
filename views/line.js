/** @jsx React.DOM */
var DefaultLayout = require('./layout');
var Line = require('../public/js/components/Line.react');
var React = require('react');

module.exports = React.createClass({
  render: function() {
    var contentHtml = React.renderToString(<Line {...this.props}/>);
    var initScript = 'main(' + JSON.stringify(this.props) + ')';
    return (
      <DefaultLayout {...this.props}>
        <div className="app" dangerouslySetInnerHTML={{__html: contentHtml}}></div>
        <script src="/js/line.page.js"></script>

      </DefaultLayout>
    )
  }
});
