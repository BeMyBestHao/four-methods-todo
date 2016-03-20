var Reflux = require('reflux');
var TodoActions = require('./TodoActions.js');

module.exports = Reflux.createStore({
	items:['first'],
	listenables:[TodoActions],
	onGetAll: function(){
		this.trigger(this.items);
	},
	onAddItem: function(text){
		this.items.push(text);
		this.trigger(this.items);
	}
});