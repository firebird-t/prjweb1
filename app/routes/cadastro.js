module.exports = function(app){
	
	app.get('/cadastro',function(request, response){
		response.render("cadastro/cadastro");
	})

	app.post('/cadastro/inserir',function(request, response){
		app.app.controllers.cadastro_usuario.cadastrar_usuario(app, request, response);
	})

	app.post('/cadastro/atualizar/dados',function(request, response){
		if(request.session.autorizado){
			app.app.controllers.dados_usuarios.atualizar_dados(app, request, response);
		}
	})

	app.post('/cadastro/atualizar/senha',function(request, response){
		if(request.session.autorizado){
			app.app.controllers.dados_usuarios.atualizar_senha(app, request, response);
		}
	})

	app.get("/perfil/dados", function(request, response){
		if(request.session.autorizado){
			app.app.controllers.dados_usuarios.recuperar_dados_cadastro(app, request, response);
		}else{
			response.redirect('/');
		}
	})

	app.get("/perfil/senha", function(request, response){
		if(request.session.autorizado){
			response.render('cadastro/senha')
		}else{
			response.redirect('/');
		}
	})

	//Página de reset de senha
	app.get("/password/reset", function(request, response){
		response.render("cadastro/reset");
	})

	//Recebendo dados do form da página de reset de senha
	app.post("/password/reset", function(request, response){
		//response.render("cadastro/reset")
		app.app.controllers.dados_usuarios.senha_reset(app, request, response);
	})
}
