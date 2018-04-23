//var conn = require('../../config/dbconn')();

module.exports = function(app){	
	
	app.get('/',function(request, response){		
		response.render('home/login');
		//app.app.controllers.dataDeviceDB.capturaDados(app, request, response);		
		console.log('index carregado');
		
	})

	
}