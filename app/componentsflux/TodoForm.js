var React = require('react');

module.exports = React.createClass({
	addbtn:function(){
		var value = this.refs.text.value;
		if(!value) {return;}
		this.props.add(value);
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