var fs = require('fs');
var count = -1;
var data = fs.readFileSync(process.argv[2], "utf-8");

data.split("\n").forEach(function(line, index, arr) {
		count++;
})

console.log(count);