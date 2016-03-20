var React = require('react');

module.exports = React.createClass({
	render:function(){
		return (
				<li key={this.props.key}>{this.props.text}</li>
		)
	}
})