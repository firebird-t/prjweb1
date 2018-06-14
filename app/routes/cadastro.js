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
		}else{
			response.redirect('/');
		}
	})

	app.post('/cadastro/atualizar/senha',function(request, response){
		if(request.session.autorizado){
			app.app.controllers.dados_usuarios.atualizar_senha(app, request, response);
		}else{
			response.redirect('/');
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

	app.get("/perfil/imagem", function(request, response){
		if(request.session.autorizado){
			response.render('cadastro/foto_perfil')
		}else{
			response.redirect('/');
		}
	})
	
	app.post("/cadastro/atualizar/foto", function(request, response){
		if(request.session.autorizado){
			app.app.controllers.dados_usuarios.foto_perfil(app, request, response)
		}else{
			response.redirect('/');
		}
	})

	app.get("/cadastro/foto/perfil", function(request, response){
		if(request.session.autorizado){
			app.app.controllers.dados_usuarios.foto_perfil_carregar(app, request, response)
		}else{
			response.redirect('/');
		}
	})
}
