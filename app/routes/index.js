//var conn = require('../../config/dbconn')();

module.exports = function(app){	
	
	app.get('/',function(request, response){
	
		if(request.session.autorizado){
			response.redirect('/home');
		}else{
			response.render('home/login',{validacao:{}});
		}
		
	})

	app.get('index',function(request, response){		
		if(request.session.autorizado){
			response.redirect('/home');
		}else{
			response.render('home/login');
		}
	})

	app.get('/index',function(request, response){		
		if(request.session.autorizado){
			response.redirect('/home');
		}else{
			response.render('home/login');
		}
	})


	
}