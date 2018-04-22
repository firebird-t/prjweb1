module.exports = function(app){
	
	app.get('/inserir_dados',function(request, response){
		response.render("cadastro/inserir_dados.ejs");
	})

	app.post('/dados/inserir',function(request, response){
		var body = request.body;
		
		var conn = app.config.dbconn();
		var deviceDataModel = app.app.models.deviceData;

		deviceDataModel.insertData(body, conn, function(error , result){
			//response.render("home/index", {resposta : result});
			response.redirect("/");
		})
	})
}
