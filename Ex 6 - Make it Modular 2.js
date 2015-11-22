var module = require('./Ex 6 - Make it Modular 1.js');

module(process.argv[2],process.argv[3], function(err , list){
	if(err) return console.log("Error:", err)

	for(var i = 0; i < list.length; i++){
	    console.log(list[i]);
	    }
    }
);

