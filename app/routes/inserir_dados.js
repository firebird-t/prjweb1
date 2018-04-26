module.exports = function(app){
	
	app.get('/inserir_dados',function(request, response){
		if(request.session.autorizado){
			response.render("dispositivos/inserir_dados.ejs",{validacao:{}});
		}
	})

	app.post('/dispositivos/inserir',function(request, response){
		if(request.session.autorizado){
			app.app.controllers.dados_dispositivos.dados_inserir(app, request, response);
		}
	})
}
