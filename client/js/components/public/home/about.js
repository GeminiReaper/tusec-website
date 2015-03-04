var React           = require('react'),
    Router          = require('react-router');

var About = React.createClass({

		render: function(){
			return(
				<div id="about" className="section">
					<a href="register" target ="_blank"><button> Register </button></a>
				</div>
			);
		}

});

module.exports = About;