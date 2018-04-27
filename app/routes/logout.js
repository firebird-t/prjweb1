module.exports = function(app){	
	
	app.get('/sair',function(request, response){
        request.session.destroy();
        console.log('Usuário Deslogado')
        response.redirect('/');        
	})	
}