module.exports = function(state,action){
	if(typeof state === 'undefined'){
		return ['first'];
	}
	switch(action.type){
		case 'add_todo': 
			return state.concat(action.text);
			break;
		default:
			return state;

	}
}