var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = "." + process.argv[3];

fs.readdir(dir, function callback (err, list) {
        if (err) {
        throw err;
    }
    list.forEach(function(filename){
        var ext1 = path.extname(filename);
        if (ext === ext1){
            console.log(filename);
        }
    });
});
