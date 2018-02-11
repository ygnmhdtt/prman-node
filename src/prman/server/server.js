var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    route(handle, pathname, request, response);
  }

  http.createServer(onRequest).listen(9000);
}

exports.start = start;
