module.exports = function(app){
	
	app.get('/cadastro',function(request, response){
		response.render("cadastro/cadastro",{validacao:{}});
	})

	// app.get('/cadastro/recuperar',function(request, response){
	// 	app.app.controllers.cadastro_usuario.recuperar_dados_cadastro(app, request, response);
	// })

	app.post('/cadastro/inserir',function(request, response){	
		app.app.controllers.cadastro_usuario.cadastrar_usuario(app, request, response);
	})

	app.post('/cadastro/atualizar',function(request, response){
		app.app.controllers.cadastro_usuario.atualizar_dados(app, request, response);
	})
}
