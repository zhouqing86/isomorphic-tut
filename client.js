var math = require('./lib/math');

var button = document.getElementById('randomButton');
var result = document.getElementById('result');


button.addEventListener('click', function(){
  result.innerHTML = math.render(math.apiRequest(1000));
});
