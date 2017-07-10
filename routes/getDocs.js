var express = require('express');
var router = express.Router();
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

var getDocs= function(req, res, next) {
    //解析请求参数
    var params = URL.parse(req.url, true).query;
    var flag=params.flag;
    if(flag=="0"){
    	var sql='SELECT * FROM cemsdoc_doc';
    	  //查
        connection.query(sql,function (err, result) {
            if(err){
              console.log('[SELECT ERROR] - ',err.message);
              return;
            }
            //把搜索值输出
           res.send(result);
        });
    }else{
    	var  sql = 'SELECT * FROM cemsdoc_doc where flag=?';
      var addSqlParams = [params.flag];
    //查
    connection.query(sql,addSqlParams,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
        //把搜索值输出
       res.send(result);
    });
    }
};

module.exports = getDocs;