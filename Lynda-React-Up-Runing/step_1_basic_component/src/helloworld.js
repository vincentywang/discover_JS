var HelloWorld = React.createClass({
		render: function() {
			return (
				<div>
					<h1>Hello World</h1>
					<p>This is some text</p>
				</div>	
				);
		}
	})
	ReactDOM.render(<HelloWorld />, document.body);