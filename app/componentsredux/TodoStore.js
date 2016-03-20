var Redux = require('redux');
var TodoReducer = require('./TodoReducer.js');

module.exports = Redux.createStore(TodoReducer);