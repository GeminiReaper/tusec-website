var React           = require('react');

var Footer = React.createClass({

    render: function() {

        return ( 
    		<footer>
    			<span>Made with</span><span id="heart-icon"></span><span>by</span><span id="tusec-icon"></span><span>in Philadelphia</span>
            </footer>
        );
    }
});

module.exports = Footer;