
module.exports = function(app){
	app.get('/page3',function(request, response){
		response.render("pages/page3.ejs");
	})
}
