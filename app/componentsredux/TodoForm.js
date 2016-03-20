var React = require('react');
var ReactDOM = require('react-dom');
var TodoActions = require('./TodoActions.js');
var TodoStore = require('./TodoStore.js');

module.exports = React.createClass({
	addbtn:function(){
		var value = this.refs.text.value;
		if(!value) {return;}
		TodoStore.dispatch(TodoActions(value));
		this.refs.text.value = '';
	},
	render:function(){
		return (
			<div>
				<input type="text" ref="text"/>
				<input type="button" value="add" onClick={this.addbtn}/>
			</div>
		)
	}
})