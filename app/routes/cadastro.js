module.exports = function(app){
	
	app.get('/cadastro',function(request, response){
		response.render("cadastro/cadastro.ejs");
	})

	app.get('/cadastro/recuperar',function(request, response){
		var connection = app.config.dbConn();
		var cadUser = new app.app.models.cadUserDAO(connection);

		// cadUser.cadastrar(dados, function(request, response){
		// 	response.render("cadastro/cad_user.ejs");
		// })

	})

	app.post('/cadastro/inserir',function(request, response){
		var connection = app.config.dbConn();
		var cadUser = new app.app.models.cadUserDAO(connection);

		cadUser.cadastrar(dados, function(error, result){
			response.render("cadastro/cad_user.ejs");
		})

	})	
}
