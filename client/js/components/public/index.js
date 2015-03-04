/** @jsx React.DOM */
var React           = require('react'),
    Router          = require('react-router');

var Header          = require('./header'),
    Footer          = require('./footer');

var RouteHandler    = Router.RouteHandler;

var PublicPageWrapper = React.createClass({
    mixins: [
        Router.State
    ],
    render: function() {
        // Get the route name
        var routeName =  'home';
        // Return the public page DOM
        return (
            <body>
                <Header />
                <main>
                <RouteHandler component="div" key={routeName}/>
                </main>
                <Footer />
            </body>
        );
    }
});

module.exports = PublicPageWrapper;