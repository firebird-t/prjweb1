//var conn = require('../../config/dbconn')();

module.exports = function(app){	
	
	app.get('/login',function(request, response){		
		response.render('home/login.ejs')
	})

	app.post('/login/entrar',function(request, response){
		app.app.controllers.dataUserController.verifica_dados_login(app, request, response);
	})



}
