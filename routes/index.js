
/*
 * GET home page.
 */

var index = function(req, res){
  res.render('index', { title: 'CEMS前端文库' });
};
module.exports=index;