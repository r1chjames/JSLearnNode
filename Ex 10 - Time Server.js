var net = require('net')
var date = new Date();
var completeDate;

var server = net.createServer(function (socket) {
  completeDate = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
  
  console.log(completeDate);
  socket.write(completeDate);
  socket.end();
})
server.listen(process.argv[2]);

