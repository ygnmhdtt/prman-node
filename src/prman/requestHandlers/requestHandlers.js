function prmanStart(request, response) {
  const s = require("../slack/slack");
  const req = s.getBody(request);
  const reqMap = s.parse(req)

  // ToDo: Token Validation

  const user = s.getUser(req);

  // ToDo: getGithubUser
  // ToDo: getRepos
  // ToDo: getPRs

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello-world");
  response.end();
}

exports.prmanStart = prmanStart;
