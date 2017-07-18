/**
 * New node file
 */

var uploadDoc=function(req,res,next){
     res.json({"result":{message:"文件上传成功!"}});
	
}

module.exports = uploadDoc;