var React           = require('react'),
    Router          = require('react-router');

var About 			= require('./about'),
	Calendar		= require('./calendar'),
	FAQ 			= require('./faq');

var Home = React.createClass({
	render: function() {
		return (
			<div>
				<About />
				<Calendar />
				<FAQ />
			</div>
		);
	}
});

module.exports = Home;