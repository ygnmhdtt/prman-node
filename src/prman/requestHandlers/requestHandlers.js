function prmanStart(request, response) {
  let slackRequest = require("./slack")
  let req = new slackRequest(request.body);
  req.init();

  // ToDo: Token Validation

  const user = req.getUser();

  // ToDo: getGithubUser
  // ToDo: getRepos
  // ToDo: getPRs

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello-world");
  response.end();
}

exports.prmanStart = prmanStart;
