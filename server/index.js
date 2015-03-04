var express         = require('express'),
    // General purpose imports
    path            = require('path'),
    async           = require('async'),
    // Express specific imports
    session         = require('express-session'),
    cookieParser    = require('cookie-parser'),
    bodyParser      = require('body-parser'),
    multer          = require('multer');

var routes      = require('./routes'),
    util        = require('./util'),
    log         = require('./log');

module.exports = function(done) {
    // Create the server instance
    var app = express();
    // Middleware
    // Serves our static assets
    app.use('/static', express.static(path.join(__dirname, '..', 'dist')));
    // Handle file uploads
    app.use(multer({
        dest: path.join(__dirname, '..', 'uploads'),
        rename: function(fieldname, filename) {
            return 'upload' + (new Date()).getTime() + filename;
        }
    }));
    // Parses cookies
    app.use(cookieParser());
    // Reads JSON request bodies
    app.use(bodyParser.json());
    // Reads formdata request bodies
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    // Enables cookie-based browser sessions
    app.use(session({
        resave: true,
        saveUninitialized: true,
        secret: util.env.sessionSecret
    }));
    // Perform setup
    async.series([
        function(callback) {
            // Perform server routing
            routes.route(app, callback);
        },
        function(callback) {
            // Start servicing the requests
            app.listen(util.env.serverPort, callback);
        }
    ], function(err) {
        if (err) {
            log.error('Server could not start', err);
            if (done) done(err);
        } else {
            log.info('Server is listening on ' + util.env.serverPort + '\n');
            if (done) done();
        }
    });
};
