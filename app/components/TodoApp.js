var React = require('react');
var ReactDOM = require('react-dom');
var TodoForm = require('./TodoForm.js');
var TodoList = require('./TodoList.js');

module.exports = React.createClass({
	getInitialState:function(){
		return {list:['first']}
	},
	add:function(text){
		this.setState({
			list:this.state.list.concat([text])
		})
	},
	render:function(){
		return (
			<div>
				<h2>React Todo</h2>	
				<TodoForm add={this.add}/>
				<TodoList list={this.state.list}/>
			</div>
		)
	}
})