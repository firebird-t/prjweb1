//Async
async = require('async');

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

module.exports.atualizar_dados = function(app, request, response){
	var connection = app.config.dbconn();
	var cadUser = new app.app.models.dados_usuariosDAO(connection);
	var body = request.body;
	body["id"] = request.session.user_id;

	var erro_cadastro = [];
	erro_cadastro.push({ 'msg': 'usuário existente, insira outro','id':0 });
	erro_cadastro.push({ 'msg': 'email existente, insira outro','id':1 });
	erro_cadastro.push({ 'msg': 'falha ao atualizar as informações do usuário, tente novamente mais tarde','id':2 });

	var nivel = 0;
	console.log(body)
	async.series([
		function (callback) {
			cadUser.validaNomeUsuario(body, function (error, result) {
				console.log(error)
				if (result.length > 0) {
					callback('false', result)
				}else{
					callback(null, result)
				}
			}, 2);
		},
		function (callback) {
			cadUser.validaEmail(body,function(error, result){
				console.log(error)
				nivel++;
				if (result.length > 0) {
					callback('false', result)
				}else{
					callback(null, result)
				}
			}, 2);
		}, function (callback) {
			cadUser.atualizar_dados_usuario(body, function(error, result){
				nivel++;
				console.log(error)
				if(error) {
					callback('false', result)
				}
				else{
					response.render('cadastro/perfil',{validacao : {}});
				}
			})
		}
	],function(err, results){
		if(err){
			response.render('cadastro/meus_dados',{validacao : [erro_cadastro[nivel]]});
		}
	})
}

module.exports.senha_reset = function(app, request, response){
	var connection = app.config.dbconn();
	var cadUser = new app.app.models.dados_usuariosDAO(connection);
	var body = request.body;

	//Verifica se o email existe

	//Gera token  e grava no banco

	//Envia email com link para redefinição de senha

}

module.exports.atualizar_senha = function(app, request, response){
	var connection = app.config.dbconn();
	var cadUser = new app.app.models.dados_usuariosDAO(connection);
	var body = request.body;
	body["id"] = request.session.user_id;


}	