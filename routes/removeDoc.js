/**
 * New node file
 */
var myfs = require('fs'); 
var removeDoc = function(req, res){
	var path=req.body.path;
	
	myfs.unlinkSync("public/docs/"+path);
	
	res.send("success");
};
module.exports=removeDoc;
