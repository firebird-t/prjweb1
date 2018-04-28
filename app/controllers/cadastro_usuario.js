
module.exports.cadastrar_usuario = function (app, request, response) {

	async = require('async');
	var connection = app.config.dbconn();
	var cadUser = new app.app.models.dados_usuariosDAO(connection);

	var body = request.body;
	var cadastro = false;
	var erro_cadastro = {};

	erro_cadastro[0] = { 'msg': 'usuário existente' };
	erro_cadastro[1] = { 'msg': 'email existente, insira outro' };

	request.assert('email', 'O campo email não pode ficar vazio').trim().notEmpty().isEmail();
	request.assert('nome_usuario', 'O campo nome de usuário não pode ficar vazio').trim().notEmpty();
	request.assert('senha', 'Senha inválida').trim().notEmpty();
	request.assert('senhav', 'Senha inválida').trim().notEmpty();
	request.assert('senha', 'as senhas não são iguais').trim().isEqual(body.senhav);

	var erros = request.validationErrors();

	if (erros) {
		response.send(erros);
		return;
	}

	//console.log(cadastro)

	async.series([
		function (callback) {
			cadUser.validaNomeUsuario(body.nome_usuario, function (error, result) {
				if (result.length > 0) {
					console.log('1');
					callback('false', result)
				}else{
					callback(null, result)
				}
			});
		},
		function (callback) {
			cadUser.validaEmail(body.email,function(error, result){
				if (result.length > 0) {
					console.log('2');
					callback('false', result)
				}else{
					callback(null, result)
				}
			});
		}, function (callback) {
			cadUser.cadastrar(body, function(error, result){
				if(error) {
					response.send('Falha ao cadastrar o usuário:' + error);
				}
				else{
					request.session.autorizado = true;
					request.session.nome = body.nome;
					request.session.user = body.nome_usuario;
					request.session.user_id = result.insertId;
					response.redirect('/home');
				}
			})
		}
	],function(err, results){
		if(err){
			response.send('Houve algo de ruim na requisição seu fdp no nível:' + result);
		}
	})

}

module.exports.recuperar_dados_cadastro = function (app, request, response) {
	var connection = app.config.dbconn();
	var cadUser = new app.app.models.dados_usuariosDAO(connection);

	// cadUser.cadastrar(dados, function(request, response){
	// 	response.render("cadastro/cad_user.ejs");
	// })
}

module.exports.checa_nome_usuario = function (app, request, response) {

	var v_name_user = new app.app.controllers.dados_usuariosDAO;
	var body = request.body;

	v_name_user.validaNomeUsuario(body, function (error, result) {

	});

}