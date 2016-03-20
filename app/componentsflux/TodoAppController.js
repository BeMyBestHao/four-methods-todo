var React = require('react');
var TodoForm = require('./TodoForm.js');
var TodoList = require('./TodoList.js');
var ButtonActions = require('./ButtonActions.js');
var ListStore = require('./ListStore.js');

module.exports = React.createClass({
	getInitialState:function(){
		return {
			list:ListStore.getAll()
		};
	},
	add:function(text){
		ButtonActions.addNewItem(text);
	},
	componentDidMount:function(){
		ListStore.addChangeListener(this._onChange);
	},
	_onChange:function(){
		this.setState({
			list:ListStore.getAll()
		});
	},
	render:function(){
		return (
			<div>
				<h2>React Flux Todo</h2>	
				<TodoForm add={this.add}/>
				<TodoList list={this.state.list}/>
			</div>
		)
	}
})