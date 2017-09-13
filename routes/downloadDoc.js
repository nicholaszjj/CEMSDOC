/**
 * New node file
 */
var fs = require('fs'); 
var path = require('path');  
var downloadDoc = function(req, res){
	var filename=req.body.filename;
	var file="public/docs/"+filename; 
	  var stats = fs.statSync(file); 
	  
	  if(stats.isFile()){
		  res.set({
			   'Content-Type': 'application/octet-stream',
			   'Content-Disposition': 'attachment; filename='+filename,
			   'Content-Length': stats.size
			  });
			  fs.createReadStream(file).setEncoding('utf8').pipe(res);
			  
		 } else {
			 res.set({  
		            'Content-Type': 'text/html'
		        });  
		  res.end(404);
		 }
	 
	
    
};
module.exports=downloadDoc;