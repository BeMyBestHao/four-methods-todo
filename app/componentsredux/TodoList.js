var React = require('react');
var ReactDOM = require('react-dom');
var TodoItem = require('./TodoItem.js');

module.exports = React.createClass({
	render:function(){
		return (
			<ul>
			{this.props.list.map(function(item,key){
				return <TodoItem key={key} text={item} />
			})}
			</ul>
		)
	}
})