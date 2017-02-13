function substract(a,b) {
  return a - b;
}

function randomInt(max) {
  return Math.round(Math.random() * max);
}

function add(a, b) {
  return a + b;
}

module.exports = {
  add: add,
  substract: substract,
  randomInt: randomInt,
  apiRequest: function(apiHost, max) {
    console.log('apiHost: ' + apiHost);
    const a = randomInt(max);
    const b = randomInt(max);
    return {a: a, b: b, result: a+b};
  },
  render: function(data) {
    return "a:" + data.a + "<br/>b:" + data.b + "<br/>result:" + data.result;
  }
}
