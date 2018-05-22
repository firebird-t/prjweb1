module.exports = function(app){	
	
	app.get('/sair',function(request, response){
        request.session.destroy();
        response.redirect('/');        
	})	
}