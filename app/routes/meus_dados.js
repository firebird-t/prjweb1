module.exports = function(app){

	app.get("/meus_dados", function(request, response){
		if(request.session.autorizado){
			app.app.controllers.dados_usuarios.recuperar_dados_cadastro(app, request, response);
		}else{
			response.redirect('/');
		}
	})

}