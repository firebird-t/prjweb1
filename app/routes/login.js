//var conn = require('../../config/dbconn')();

module.exports = function(app){	
	
	app.get('/login',function(request, response){		
		response.render('home/login')
	})

	app.post('/login/entrar',function(request, response){
		app.app.controllers.dados_usuarios.verifica_dados_login(app, request, response);
	})

}
