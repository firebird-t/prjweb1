module.exports = function(app){
	
	app.get('/inserir_dados',function(request, response){
		response.render("cadastro/inserir_dados.ejs",{validacao:{}});
	})

	app.post('/dados/inserir',function(request, response){
		app.app.controllers.dataDeviceDB.capturaDados(app, request, response);
	})
}
