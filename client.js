var math = require('./lib/math');

var button = document.getElementById('randomButton');
var result = document.getElementById('result');
var apiHost = REA.config.apiHost;


button.addEventListener('click', function(){
  result.innerHTML = math.render(math.apiRequest(apiHost, 1000));
});
