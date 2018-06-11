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
			 if(!error && result.length > 0){			 	
			 	
			 	request.session.autorizado = true;
			 	request.session.user = result[0]['nome_usuario'];
			 	request.session.user_id = result[0]['id'];
			 	
			 	//Cookie de lembrança de login
			 	if(dados.remember != undefined && dados.remember == 'on'){
			 		response.cookie("lembrar_login","sim");
			 		response.cookie("autorizado","sim");
			 		response.cookie("dado_usuario",dados.nome_usuario);
			 	}

			 	//console.log('Usuário '+result[0]['nome']+' logado');	
			 	
			 	response.redirect('/home');
				return;
			 }else{
			 	console.log('Usuário não encontrado:', result);
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
						response.redirect("/perfil/dados");						
					})
				}
			})
		}
	],function(err, results){
		if(err){
			response.cookie("dados_atualizados","false");
			response.redirect("/perfil/dados");
		}
	})
}

module.exports.senha_reset = function(app, request, response){
	
	var connection = app.config.dbconn();
	var cadUser = new app.app.models.dados_usuariosDAO(connection);
	var body = request.body;
	var mailer = new app.app.controllers.mailer();
	
	//Verifica se o email existe
	cadUser.validaEmail(body, function(error, result){
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
								p+=c.charAt(Math.floor(Math.random()*64));
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
								mailer.send_mail(body.email, 'Link para redefinição de senha', token, result.insertId, function(err, info){
									if (err) {
									    console.log('Error occurred. ' + err.message);
									    return process.exit(1);
									}										
									console.log('Message sent: %s', info.messageId);
									//console.log('Preview URL: %s', nodemailer.getTestMessageUrl(result));
									// Preview only available when sending through an Ethereal account
									
									response.render('cadastro/reset',{validacao: [{'msg':'email enviado com sucesso'},{'erro':'false'}]});									
									
								});
								
						}else{
							callback(error,result);
						}
					})
				}
			],function(err, results){
				if(err){
					console.log(err);
					response.render('cadastro/reset',{validacao: [{'msg':err,'erro':'true'}]});
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

module.exports.valida_token = function(app, request, response){
	var connection = new app.config.dbconn();
	var utils = new app.app.models.utilsDAO(connection);

	utils.pesquisa_token(request.query.request_id, request.query.token_id, function(error, result){
		if(!error){
			if(result.length > 0 ){
				response.cookie("data",result[0].user_id);
				utils.atualiza_token(request.query.token_id, function(error, result){
					if(!error){
						response.render("cadastro/reset_password");
					}	
				})
				
			}else{
				response.render("cadastro/reset_password",{validacao : [{'msg':'Link inválido','erro':'true'}]});
			}
		}else{
			response.render("cadastro/reset_password",{validacao : [{'msg':'A página está inacessível','erro':'true'}]});
		}
	})
}

module.exports.troca_senha = function(app, request, response){
	var connection = new app.config.dbconn();
	var cadUser = new app.app.models.dados_usuariosDAO(connection);

	var body = request.body;

	request.assert('senha_nova', 'Senha inválida').trim().notEmpty();
	request.assert('senha_nova', 'as senhas não são iguais').trim().isEqual(body.senha_nova_conf);

	var erros = request.validationErrors();

	if (erros) {
		console.log(erros)
		response.render('cadastro/reset_password',{validacao: erros});
		return;
	}

	cadUser.atualizar_senha_usuario(body.senha_nova, response.cookie("data"), function(error, result){
		if(!error){
			response.clearCookie("data")
			//response.cookie("senha_atualizada","true");
			response.redirect('home/home');
		}else{
			//console.log(error);
			//response.cookie("senha_atualizada","false")
			response.redirect('home/home');
		}
	})
}

module.exports.foto_perfil = function(app, request, response){
	var path = require('path');
	var ext = ['jpg','png','jpeg'];
	var dir = './uploads';

	if (!fs.existsSync(dir)){
	    fs.mkdirSync(dir);
	}

	if (!request.files){
		return response.sendStatus(400)
	}
	   
	 
	  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
	  var arquivo_upl = request.files.arquivo;
	 
	  // Use the mv() method to place the file somewhere on your server
	  arquivo_upl.mv(dir+'/'+request.files.arquivo.name, function(err) {
	    if (err)
	      return response.status(500).send(err);
	 
	    response.send('Arquivo enviado com sucesso');
	  });
}