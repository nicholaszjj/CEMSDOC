/**
 * New node file
 */

var myfs = require('fs'); 

var getUploadDocList= function(req, res, next) {
	
	var files=myfs.readdirSync("./public/docs");
        //把搜索值输出
       res.send(files);
   
    
};

module.exports = getUploadDocList;