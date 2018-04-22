var conn = require('../../config/dbconn')();

module.exports = function(app){	
	
	app.get('/',function(request, response){		

		var conn = app.config.dbconn();
		var deviceDataModel = new app.app.models.deviceData(conn);
		
		deviceDataModel.getData(function(error , result){
			response.render("home/index.ejs",{devices : result});
		})
		
		console.log('index carregado');
		
	})
}
