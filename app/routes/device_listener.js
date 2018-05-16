module.exports = function(app){
	app.post('/device',function(request, response){
		app.controllers.device_listener.gravaDadosDispositivos(request, response);
	})

}