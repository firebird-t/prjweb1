
module.exports =  function(app){
		app.get('/page1',function(request, response){
			response.render("page1.ejs");
		})
}