var conn = require('../../config/dbconn')();

module.exports = function(app){	
	
	app.get('/',function(request, response){		

		app.app.controllers.dataDeviceDB.dados_inserir(app, request, response);		
		console.log('index carregado');
		
	})
}
