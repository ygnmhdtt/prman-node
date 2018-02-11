exports.getBody = function(request) => {
  let body = [];
  request.on('data', (chunk) => {
      body.push(chunk);
  }).on('end', () => {
      body = Buffer.concat(body).toString();
  return body;
})};

let parse = (request) => {
  console.log(request);
  const arr = request.split("&");
};

let getUser = (request) => {
  if (this.text == "") {
    return this.userName;
  }
  return sr.text
}

// ToDo: Error Handling
let getText = (arr, target) => {
  return arr.filter((elem) => { elem == target })[0];
}

module.exports = getBody;
