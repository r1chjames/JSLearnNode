var http = require('http');
var output = '';

http.get(process.argv[i], function callback(response) {
    response.on("data", function (data) {
        output += data.toString();
    });
    response.on('end', function () {
        console.log(output);
    });
});
