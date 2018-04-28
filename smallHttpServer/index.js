var server = require('./start');
var route = require('./route');


server.start(route.route);
