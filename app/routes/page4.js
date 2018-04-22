module.exports = function(app){
	app.get('/page4',function(request, response){
		response.render("pages/page4.ejs");
	})
}

