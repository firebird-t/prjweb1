module.exports = function(app){	
	

	app.get('/home',function(request, response){	

		if(request.session.autorizado){

			var pesquisa_dispositivos = app.app.controllers.dados_dispositivos.capturaDados(app, request, response);
			response.render('home/home', {dispositivos :  pesquisa_dispositivos});
			console.log('home carregada');			
		}else{
			response.send('Usuário não autorizado');
		}	
	})

}