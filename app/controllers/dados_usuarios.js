module.exports.verifica_dados_login = function(app, request, response){
		var conn = app.config.dbconn();
		var dadosUsuario = new app.app.models.dados_usuariosDAO(conn);

		var dados = request.body;

		request.assert('nome_usuario', 'Insira o login do usuário').trim().notEmpty();
		request.assert('senha', 'Insira a senha do usuário').notEmpty();

		var erros = request.validationErrors();
		
		if(erros){
			console.log('usuário e/ou senha faltando');
			//response.render("home/login",{validacao : erros});
			response.render("/",{validacao : erros});
			return;
		}
		
		dadosUsuario.validalogin(dados, function(error, result){
			 if(result.length > 0){			 	
			 	
			 	request.session.autorizado = true;
			 	request.session.user = result[0]['nome_usuario'];
			 	request.session.user_id = result[0]['id'];

			 	console.log('Usuário '+result[0]['nome']+' logado');	

			 	response.redirect('/home');
				return;
			 }else{
			 	console.log('Usuário não encontrado');
			 	response.render('home/login',{validacao:[{'msg':'Usuário não encontrado'}]});
			 }
		})
}

module.exports.recuperar_dados_cadastro = function (app, request, response) {
	var connection = app.config.dbconn();
	var cadUser = new app.app.models.dados_usuariosDAO(connection);
	cadUser.recuperar([request.session.user_id], function(error, result){
		console.log(result, request.session.user_id)
		response.render("cadastro/meus_dados",{dados : result});
	})
}

module.exports.atualiza_dados = function(app, request, response){
	var connection = app.config.dbconn();
	var cadUser = new app.app.models.dados_usuariosDAO(connection);
	var body = request.body;

	var nivel = 0;
	async.series([
		function (callback) {
			cadUser.validaNomeUsuario(body.nome_usuario, function (error, result) {
				if (result.length > 0) {
					callback('false', result)
				}else{
					callback(null, result)
				}
			});
		},
		function (callback) {
			cadUser.validaEmail(body.email,function(error, result){
				nivel++;
				if (result.length > 0) {
					callback('false', result)
				}else{
					callback(null, result)
				}
			});
		}, function (callback) {
			cadUser.atualizar(body, function(error, result){
				nivel++;
				if(error) {
					callback('false', result)
				}
				else{
					// request.session.autorizado = true;
					// request.session.nome = body.nome;
					// request.session.user = body.nome_usuario;
					// request.session.user_id = result.insertId;
					// response.redirect('/home');
				}
			})
		}
	],function(err, results){
		if(err){
			response.render('cadastro/perfil',{validacao : [erro_cadastro[nivel]]});
		}
	})
}