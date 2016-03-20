var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({
	render:function(){
		return (
				<li key={this.props.key}>{this.props.text}</li>
		)
	}
})