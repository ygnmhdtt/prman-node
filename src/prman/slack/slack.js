exports.getBody = function(request) => {
  let body = [];
  request.on('data', (chunk) => {
      body.push(chunk);
  }).on('end', () => {
      body = Buffer.concat(body).toString();
  return body;
})};

const parse = (request) => {
  console.log(request);
  const arr = request.split("&");
  return arr;
};

const getUser = (map) => {
  if (this.text == "") {
    return this.userName;
  }
  return sr.text
}

// ToDo: Error Handling
const getText = (arr, target) => {
  return arr.filter((elem) => { elem == target })[0];
}

module.exports = getBody;
