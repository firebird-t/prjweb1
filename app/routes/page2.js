
module.exports = function(app){
	app.get('/page2',function(request, response){
		response.render("pages/page2.ejs");
	})	
}
