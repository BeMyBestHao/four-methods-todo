var React = require('react');
var TodoForm = require('./TodoForm.js');
var TodoList = require('./TodoList.js');
var Reflux = require('redux');
var TodoActions = require('./TodoActions.js');
var TodoStore = require('./TodoStore.js');

module.exports = React.createClass({
	getInitialState:function(){
		return {list:TodoStore.getState()}
	},
	onStatusChange:function(list){
		this.setState({
			list:TodoStore.getState()
		})
	},
	componentDidMount:function(){
		var unsubscribe = TodoStore.subscribe(this.onStatusChange);
	},
	render:function(){
		return (
			<div>
				<h2>React Redux Todo</h2>	
				<TodoForm />
				<TodoList list={this.state.list}/>
			</div>
		)
	}
})