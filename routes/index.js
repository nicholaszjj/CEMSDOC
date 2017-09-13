
/*
 * GET home page.
 */

var index = function(req, res){
  res.render('index', { title: "Nicholas's blog" });
};
module.exports=index;