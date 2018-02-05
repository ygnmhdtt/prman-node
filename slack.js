var Request = function(body) {
  this.body = body;
};

// ToDo: Error Handling
Request.prototype.init = function() {
  const arr = this.body.split("&");
  this.token = getText(arr, "token");
  this.teamID = getText(arr, "team_id");
  this.teamDomain =  getText(arr, "team_domain");
  this.channelID = getText(arr, "channel_id");
  this.channelName = getText(arr, "channel_name");
  this.userID = getText(arr, "user_id");
  this.userName = getText(arr, "user_name");
  this.command = getText(arr, "command");
  this.text = getText(arr, "text");
  this.responseURL = getText(arr, "response_url");
};

Request.prototype.getUser = function() {
  if (this.text == "") {
    return this.userName;
  }
  return sr.text
}

// ToDo: Error Handling
let getText = function(arr, target) {
  return arr.filter(function(elem) { elem == target })[0];
}

module.exports = Request;
