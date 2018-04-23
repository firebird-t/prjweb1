module.exports = function(app){	
	
	// app.get('/home',function(request, response){		
	// 	response.render('home/home.ejs');
	// 	//app.app.controllers.dataDeviceDB.capturaDados(app, request, response);		
	// 	console.log('home carregada');
		
	// })

	app.get('/home',function(request, response){		
		response.render('home/home.ejs');
		//app.app.controllers.dataDeviceDB.capturaDados(app, request, response);		
		console.log('home carregada');
		
	})


	// app.get('/home/home',function(request, response){		
	// 	response.render('home/home');
	// 	//app.app.controllers.dataDeviceDB.capturaDados(app, request, response);		
	// 	console.log('index carregado');
		
	// })
}