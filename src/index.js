var server = require("./prman/server/server");
var router = require("./prman/router/router");
var requestHandlers = require("./prman/requestHandlers/requestHandlers");

var handle = {}
handle["/"] = requestHandlers.prmanStart;

server.start(router.route, handle);
