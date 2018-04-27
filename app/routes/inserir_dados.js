module.exports = function(app){
	
	app.get('/cadastrar_dispositivo',function(request, response){
		if(request.session.autorizado){
			response.render("dispositivos/cadastrar_dispositivo",{validacao:{}});
		}
	})


	app.get('/listar_dispositivo',function(request, response){
		if(request.session.autorizado){
			response.render("dispositivos/listar_dispositivo",{validacao:{}});
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
