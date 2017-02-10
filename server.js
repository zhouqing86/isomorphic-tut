var http = require('http');
var fs = require('fs');
var math = require('./lib/math');

const PORT = 3333;


http.createServer(function(req, res) {
  if(req.url=='/index.html' || req.url=='/') {
    var indexPage = fs.readFileSync('index-template.html','utf8');
    var data = math.apiRequest(100)
    indexPage = indexPage.replace(/!!DATA!!/g, JSON.stringify(data));
    indexPage = indexPage.replace(/!!DISPLAYDATA!!/g, math.render(data));
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(indexPage);
    res.end();
  } else {
    var indexjs = fs.readFileSync('index.js','utf8');
    res.writeHead(200, {'Content-Type':'text/javascript; charset=UTF-8'});
    res.write(indexjs);
    res.end();
  }
}).listen(PORT, '127.0.0.1', function(){
  console.log('Server listen on ' + 3333);
});
