module.exports = function(app){
	app.post('/device/post',function(request, response){
		app.controllers.device_listener.gravaDadosDispositivos(request, response);
	})

	app.get('/device/get',function(request, response){
		app.controllers.device_listener.gravaDadosDispositivos(request, response);
	})
}