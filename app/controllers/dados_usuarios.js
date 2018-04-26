module.exports.verifica_dados_login = function(app, request, response){
		var conn = app.config.dbconn();
		var dadosUsuario = new app.app.models.dados_usuariosDAO(conn);

		var dados = request.body;

		request.assert('nome_usuario', 'Insira o login do usuário').notEmpty();
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
			 	console.log('Usuário logado');				 	
			 	
			 	request.session.autorizado = true;
			 	request.session.user = result[0]['nome_usuario'];
			 	request.session.user_id = result[0]['id'];

			 	response.redirect('/home');
				return;
			 }else{
			 	console.log('Usuário não encontrado');
			 	response.render('home/login',{validacao:{}});
			 }
		})
}
