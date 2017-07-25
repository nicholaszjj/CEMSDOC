/**
 * New node file
 */
//var formidable = require("formidable"); 
var multiparty = require("multiparty"); 

var myfs = require('fs');  //node.js核心的文件处理模块
var uploadDoc=function(req,res){
   
	//new formidable.IncomingForm	
	 var form =new multiparty.Form ({
	        encoding:"utf-8",
	        uploadDir:"public/temp",  //文件上传地址
	        keepExtensions:true , //保留后缀
	        multiples:true,
	        maxFieldsSize:20 * 1024 * 1024//上传文件的最大大小 
	    });  
      form.parse(req, function(err, fields, files) {  
              console.log('fields',fields);//表单传递的input数据  
              console.log('files',files);//上传文件数据  
              //do somthing......
          
              var changeNameArray=files.resource;
              changeNameArray.forEach(function(value,index,arry){
            	var changeName=value.originalFilename;
            	var  path=value.path;
            	 myfs.renameSync(path,"public/docs/"+changeName);
              })
              
            
       


           res.send("success");
             
             
      });  
     
   
}

module.exports = uploadDoc;