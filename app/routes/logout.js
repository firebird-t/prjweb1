module.exports = function(app){	
	
	app.get('/sair',function(request, response){
        response.redirect('/');
        request.session.destroy();
	})	
}