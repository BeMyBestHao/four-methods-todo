var React = require('react');
var TodoForm = require('./TodoForm.js');
var TodoList = require('./TodoList.js');
var Reflux = require('reflux');
var TodoActions = require('./TodoActions.js');
var TodoStore = require('./TodoStore.js');

module.exports = React.createClass({
	getInitialState:function(){
		return {list:[]}
	},
	onStatusChange:function(list){
		this.setState({
			list:list
		})
	},
	componentDidMount:function(){
		this.unsubscribe = TodoStore.listen(this.onStatusChange);
		TodoActions.getAll();
	},
	componentWillUnMount:function(){
		this.unsubscribe();
	},
	render:function(){
		return (
			<div>
				<h2>React Reflux Todo</h2>	
				<TodoForm />
				<TodoList list={this.state.list}/>
			</div>
		)
	}
})