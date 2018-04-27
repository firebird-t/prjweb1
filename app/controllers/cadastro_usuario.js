module.exports.cadastrar_usuario = function(app, request, response){

	var connection = app.config.dbconn();
	var cadUser = new app.app.models.dados_usuariosDAO(connection);
	
	var body = request.body;

	request.assert('email', 'O campo email não pode ficar vazio').notEmpty().isEmail();
	request.assert('nome_usuario', 'O campo email não pode ficar vazio').notEmpty();
	request.assert('senha', 'Senha inválida').notEmpty();
	request.assert('senhav', 'Senha inválida').notEmpty();
	request.assert('senha', 'as senhas não são iguais').isEqual(body.senhav);

	var erros = request.validationErrors();

	if(erros){
		response.send(erros);
		return;
	}

	cadUser.cadastrar(body, function(error, result){
		if(error) {
			response.send('Falha ao cadastrar o usuário:' + error);
		}
		else{
			request.session.autorizado = true;
			request.session.nome = body.nome;
			request.session.user = body.nome_usuario;
			request.session.id_user = result.insertId;
			response.redirect('/home');
		}
		//response.redirect("cadastro/cadastro");
	})
}

module.exports.recuperar_dados_cadastro = function(app, request, response){
	var connection = app.config.dbconn();
	var cadUser = new app.app.models.dados_usuariosDAO(connection);

	// cadUser.cadastrar(dados, function(request, response){
	// 	response.render("cadastro/cad_user.ejs");
	// })

}