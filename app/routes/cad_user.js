module.exports = function(app){
	app.get('/cadastro',function(request, response){
		response.render("cadastro/cad_user.ejs");
	})


	app.post('/inserir/cadastro',function(request, response){
		var connection = app.config.dbConn();
		var cadUser = new app.app.models.CadUserDAO;

	})	
}
