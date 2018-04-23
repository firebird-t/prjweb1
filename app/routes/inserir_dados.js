module.exports = function(app){
	
	app.get('/inserir_dados',function(request, response){
		response.render("dispositivos/inserir_dados.ejs",{validacao:{}});
	})

	app.post('/dispositivos/inserir',function(request, response){
		app.app.controllers.dataDeviceDB.dados_inserir(app, request, response);
	})
}
