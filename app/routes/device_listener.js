module.exports = function(app){
	app.post('/device/post',function(request, response){
		response.sendStatus(200);
		app.app.controllers.dados_dispositivos.data_mgmt(app, request, response);
	})

	app.get('/device/get',function(request, response){
		response.sendStatus(200);
		app.app.controllers.dados_dispositivos.data_mgmt(app, request, response);
	})
}