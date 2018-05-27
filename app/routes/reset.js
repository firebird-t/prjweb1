module.exports = function(app){
	
	//Página de reset de senha
	app.get("/password/reset", function(request, response){
		response.render("cadastro/reset");
	})

	//Recebendo dados do form da página de reset de senha
	app.post("/password/reset", function(request, response){
		app.app.controllers.dados_usuarios.senha_reset(app, request, response);
	})

	app.get('/password/request/reset', function(request, response){
		app.app.controllers.dados_usuarios.valida_token(app, request, response);
	})
}