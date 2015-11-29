var Note = React.createClass({
	render: function() {
		return (
			<div className="note"></div>
			);
	}
});

ReactDOM.render(<Note>Hello World</Note>, 
	document.getElementById('react-container'));