var React           = require('react'),
    Router          = require('react-router');

var Calendar = React.createClass({

		render: function(){
			return(
				<div id="calendar" className="section">
					<iframe src="https://www.google.com/calendar/embed?src=a8bht391sjjnfodbmjbpvt6ngo%40group.calendar.google.com&ctz=America/New_York"
					  width="800" height="600" bgcolor="#BD8D46" frameBorder="0" scrolling="no"></iframe>
				 </div>
			);
		}

});

module.exports = Calendar;