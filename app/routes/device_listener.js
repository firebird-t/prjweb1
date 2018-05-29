module.exports = function(app){
	app.post('/device/post',function(request, response){
		response.send('ok');
		app.app.controllers.dados_dispositivos.data_mgmt(request, response);
	})

	app.get('/device/get',function(request, response){
		response.send('ok');
		app.app.controllers.dados_dispositivos.data_mgmt(request, response);
	})
}