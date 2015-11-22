module.exports = function(path, extension, callback){
	var fs = require('fs');
	var flist = [];
	fs.readdir(path, function(err, list){		
		if(err){
			return callback(err);
		}			

		for (var i =0; i< list.length; i++){
			  if(list[i].indexOf("." + extension) >-1){
				flist.push(list[i]);
				}						
		}		
		return	callback(null,flist)
	})
}