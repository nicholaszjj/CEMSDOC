/**
 * New node file
 */
var formidable = require("formidable");  
var myfs = require('fs');  //node.js核心的文件处理模块
var uploadDoc=function(req,res,next){
	 var form = new formidable.IncomingForm({
	        encoding:"utf-8",
	        uploadDir:"public/docs",  //文件上传地址
	        keepExtensions:true , //保留后缀
	        maxFieldsSize:20 * 1024 * 1024//上传文件的最大大小 
	    });  
      form.parse(req, function(err, fields, files) {  
              console.log('fields',fields);//表单传递的input数据  
              console.log('files',files);//上传文件数据  
              //do somthing......  
              var changeName=files.resource.name;
              
             myfs.renameSync(files.resource.path,"public/docs/"+changeName);
      });  
}

module.exports = uploadDoc;