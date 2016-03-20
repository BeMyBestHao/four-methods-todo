var AppDispatcher = require('./AppDispatcher.js');

module.exports  = {
  addNewItem: function (text) {
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_ITEM',
      text: text
    });
  },

};
