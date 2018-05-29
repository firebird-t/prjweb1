module.exports = function(app){
	app.post('/device/post',function(request, response){
		console.log(request.body);
		//app.app.controllers.device_listener.gravaDadosDispositivos(request, response);
		response.send('ok');
	})

	app.get('/device/get',function(request, response){
		app.app.controllers.device_listener.gravaDadosDispositivos(request, response);
	})
}