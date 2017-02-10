var http = require('http');
var fs = require('fs');

const PORT = 3333;
var indexPage = fs.readFileSync('index-template.html');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type':'text/html'});
  res.write(indexPage);
  res.end();
}).listen(PORT, '127.0.0.1', function(){
  console.log('Server listen on ' + 3333);
});
