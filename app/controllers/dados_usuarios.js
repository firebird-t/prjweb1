//Async
async = require('async');
crypto = require('crypto');

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
			 	
			 	//Cookie de lembrança de login
			 	if(dados.remember != undefined && dados.remember == 'on'){
			 		response.cookie("lembrar_login","sim");
			 	}

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
		//console.log(result, request.session.user_id)
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

	async.series([
		function (callback) {
			cadUser.validaNomeUsuario(body, function (error, result) {
				if (result.length > 0) {
					callback('false', result)
				}else{
					callback(null, result)
				}
			}, 2);
		},
		function (callback) {
			cadUser.validaEmail(body,function(error, result){
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
				if(error) {
					callback('false', result)
				}
				else{
					cadUser.recuperar([request.session.user_id], function(error, result){
						response.cookie("dados_atualizados","true")
						//response.render("cadastro/meus_dados",{dados : result});
						response.redirect("/perfil/dados");
						
					})
				}
			})
		}
	],function(err, results){
		if(err){
			//erro_cadastro[nivel]["success"] = false;
			//response.render('cadastro/meus_dados',{validacao : [erro_cadastro[nivel]]});
			response.cookie("dados_atualizados","false");
			response.redirect("/perfil/dados");
		}
	})
}

module.exports.senha_reset = function(app, request, response){
	
	var connection = app.config.dbconn();
	var cadUser = new app.app.models.dados_usuariosDAO(connection);
	var body = request.body;

	console.log(body.email);
	//Verifica se o email existe
	cadUser.validaEmail(body, function(error, result){
		console.log(error);
		if(result.length > 0){
			
			//duração da validade do token
			var lifetime = 12;
			
			var token;

			//Instância da classe
			var utils = new app.app.models.utilsDAO(connection);

			async.series([
				function (callback) {
					token = (function(){
						g = function(){
							c='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
							p='';
							for(i=0;i<128;i++){
								p+=c.charAt(Math.floor(Math.random()*62));
							}
							return p;
						};
						
						p = g();
						while(!/[A-Z]/.test(p)||!/[0-9]/.test(p)||!/[a-z]/.test(p)){
									p=g();
								}return p;
							})()		 
					
					callback(null,null);
				},
				function (callback) {
					//Gravando Token
					utils.grava_token(result[0].id, token, lifetime, function(error, result){
						if(!error){
								app.app.controllers.mailer.mailer(body.email, 'Link para redefinição de senha', token, result.insertId);
								response.render('cadastro/reset',{validacao: [{'msg':'email enviado com sucesso'},{'erro':'false'}]});
						}else{
							callback(error,result);
						}
					})
				}
			],function(err, results){
				if(err){
					console.log(err);
				}
			})

			
		}else{
			response.render('cadastro/reset',{validacao: [{'msg':'email não encontrado','erro':'true'}]});
		}
	}, 1);

}

module.exports.atualizar_senha = function(app, request, response){
	var connection = app.config.dbconn();
	var cadUser = new app.app.models.dados_usuariosDAO(connection);
	var body = request.body;
	//body.senha_antiga
	//body.senha_nova
	//body.senha_nova_conf

	request.assert('senha_antiga', 'Senha inválida').trim().notEmpty();
	request.assert('senha_nova', 'Senha inválida').trim().notEmpty();
	request.assert('senha_nova', 'as senhas não são iguais').trim().isEqual(body.senha_nova_conf);

	var erros = request.validationErrors();

	if (erros) {
		console.log(erros)
		response.render('cadastro/senha',{validacao: erros});
		return;
	}

	cadUser.validaSenha(request.session.user_id, function(error, result){
		if(!error){
			var senha_comp_1 = result[0]["senha"];
			var senha_comp_2 = crypto.createHash('sha256').update(body.senha_antiga).digest('hex');
			if(senha_comp_1 == senha_comp_2){
				cadUser.atualizar_senha_usuario(body.senha_nova, request.session.user_id, function(error, result){
					if(!error){
						//console.log(result)
						response.cookie("senha_atualizada","true");
						response.redirect('/perfil/senha');
					}else{
						//console.log(error);
						response.cookie("senha_atualizada","false")
						response.redirect('/perfil/senha');
					}
				})
			}else{
				response.cookie("senha_atualizada","false")
				response.redirect('/perfil/senha');
			}
		}else{
			request.send(error);
		}
	})

}	