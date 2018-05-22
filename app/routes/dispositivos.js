module.exports = function(app){
	
	app.get('/dispositivos/cadastrar',function(request, response){
		if(request.session.autorizado){
			response.render("dispositivos/cadastrar_dispositivo",{validacao:{}});
		}
	})

	app.get('/dispositivos/listar',function(request, response){
		if(request.session.autorizado){
			response.render("dispositivos/listar_dispositivo",{validacao:{}});
		}
	})

	app.get('/dispositivos/status',function(request, response){
		if(request.session.autorizado){
			response.render("dispositivos/status",{validacao:{}});
		}
	})

	app.post('/dispositivos/inserir',function(request, response){
		if(request.session.autorizado){
			app.app.controllers.dados_dispositivos.dados_inserir(app, request, response);
		}else{
			response.send('Usuário não autorizado');
		}
	})
}
