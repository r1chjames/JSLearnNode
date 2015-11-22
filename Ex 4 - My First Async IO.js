var fs = require('fs');
var count = -1;
var content;

fs.readFile(process.argv[2], 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
    data.split("\n").forEach(function(line, index, arr) {
        count++;
})
console.log(count);
});