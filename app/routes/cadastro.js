module.exports = function(app){
	
	app.get('/cadastro',function(request, response){
		response.render("cadastro/cadastro",{validacao:{}});
	})

	app.post('/cadastro/inserir',function(request, response){	
		app.app.controllers.cadastro_usuario.cadastrar_usuario(app, request, response);
	})

	app.post('/cadastro/atualizar/dados',function(request, response){
		app.app.controllers.cadastro_usuario.atualizar_dados(app, request, response);
	})

	app.post('/cadastro/atualizar/senha',function(request, response){
		app.app.controllers.cadastro_usuario.atualizar_dados(app, request, response);
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
			//app.app.controllers.dados_usuarios.recuperar_dados_cadastro(app, request, response);
			response.render('cadastro/senha')
		}else{
			response.redirect('/');
		}
	})

	app.get("/password/reset", function(request, response){
		response.render("cadastro/reset")
	})
}
