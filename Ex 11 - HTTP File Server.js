var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
  var file = fs.createReadStream(process.argv[3],'utf8');
  file.on('open', function(){
    file.pipe(response);
  })
})

server.listen(process.argv[2]);

