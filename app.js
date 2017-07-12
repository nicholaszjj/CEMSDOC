var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , fs = require('fs')
  , path = require('path');
   
var app = express();
// all environments
app.set('port', process.env.PORT ||2000);
app.set('views', __dirname + '/views');
app.engine('.html', require('ejs').__express);  
app.set('view engine', 'html'); 
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser({uploadDir:"public/docs", keepExtensions : true, limit:100000000, defer:true }));
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
//路由
var files=fs.readdirSync("./routes");
for(var i in files){
	var name=files[i].replace(".js","")
	app.use("/"+name, require('./routes/'+name));
	
}

   app.use('/',require('./routes/index'));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});