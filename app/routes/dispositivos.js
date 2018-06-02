module.exports = function(app){
	
	//Página de cadastro de dispositivos
	app.get('/dispositivos/cadastrar',function(request, response){
		if(request.session.autorizado){
			response.render("dispositivos/cadastrar");
		}else{
			response.redirect('/');
		}
	})

	app.get('/dispositivos/listar',function(request, response){
		if(request.session.autorizado){
			app.app.controllers.dados_dispositivos.info_dispositivos(app, request, response,"dispositivos/listar")
		}else{
			response.redirect('/');
		}
	})

	app.get('/dispositivos/status/grafico',function(request, response){
		if(request.session.autorizado){
			app.app.controllers.dados_dispositivos.dados_grafico(app, request, response)
		}else{
			response.redirect('/');
		}
	})

	app.get('/dispositivos/status',function(request, response){
		if(request.session.autorizado){
			app.app.controllers.dados_dispositivos.info_dispositivos(app, request, response,"dispositivos/status")
			//;
		}else{
			response.redirect('/');
		}
	})

	app.get('/dispositivos/dados/grafico',function(request, response){
		if(request.session.autorizado){
			app.app.controllers.dados_dispositivos.dados_grafico_geral(app, request, response)
		}else{
			response.redirect('/');
		}
	})

	app.get('/dispositivos/dados/log',function(request, response){
		if(request.session.autorizado){
			app.app.controllers.dados_dispositivos.dados_log(app, request, response)
		}else{
			response.redirect('/');
		}
	})

	//Recebendo dados do formulário da página de cadastro de dispositivos
	app.post('/dispositivos/inserir',function(request, response){
		if(request.session.autorizado){
			app.app.controllers.dados_dispositivos.dados_inserir(app, request, response);
		}else{
			response.redirect('/');
		}
	})

	app.post('/dispositivos/excluir',function(request, response){
		if(request.session.autorizado){
			app.app.controllers.dados_dispositivos.excluir_dispositivo(app, request, response);
		}else{
			response.redirect('/');
		}
	})


	app.get('/dispositivos/dados/dispositivos',function(request, response){
		if(request.session.autorizado){
			app.app.controllers.dados_dispositivos.dados_por_dispositivos(app, request, response);
		}else{
			response.redirect('/');
		}
	})
}
