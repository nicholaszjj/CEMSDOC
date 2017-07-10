 var URL = require('url');
var docUI = function(req, res){
	var params = URL.parse(req.url, true).query;
    var flag =params.flag;
  res.render('docUI', { flag: flag });
};
module.exports=docUI;
