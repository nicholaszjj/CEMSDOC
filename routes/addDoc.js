var express = require('express');
var router = express.Router();
var UUID = require('uuid');
 var URL = require('url');
//加载mysql模块
var mysql      = require('mysql');
//创建连接
var connection = mysql.createConnection({
host     : 'localhost',
user     : 'root',
password : '123456',
database : 'cemsdoc'
});
//执行创建连接 
connection.connect();
//SQL语句

var  sql = 'INSERT INTO cemsdoc_doc(id,name,content,flag) VALUES(?,?,?,?)';

var addDoc= function(req, res, next) {
	 
    //解析请求参数
    var params = URL.parse(req.url, true).query;
    var id = UUID.v1();
      var addSqlParams = [id, params.name, params.content,params.flag];
    //加
    connection.query(sql,addSqlParams,function (err, result) {
    	var msg="success";
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
        if(result.length>0){
        	msg="success";
        }
       res.send(msg);
    });
};

module.exports = addDoc;