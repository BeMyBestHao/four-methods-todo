var React = require('react');
var ReactDOM = require('react-dom');
var TodoApp = require('./components/TodoApp.js');
var TodoAppFlux = require('./componentsflux/TodoAppController.js');
var TodoAppReflux = require('./componentsreflux/TodoApp.js');
var TodoAppRedux = require('./componentsredux/TodoApp.js');
require('./style.css');

ReactDOM.render(
	<div className="todo">
		<TodoApp />
		<TodoAppFlux />
		<TodoAppReflux />
		<TodoAppRedux />
	</div>,
	document.getElementById('content')
)