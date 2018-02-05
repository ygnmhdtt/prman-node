function prmanStart(response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello-world");
  response.end();
}


exports.prmanStart = prmanStart;
