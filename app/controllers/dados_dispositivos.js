module.exports.dados_inserir = function(app, request, response){

	var body = request.body;
	var conn = app.config.dbconn();
	var deviceDataModel = new app.app.models.dados_dispositivosDAO(conn);

	request.assert('nome_dispositivo', 'Nome do dispositivo é obrigatório').notEmpty();
	//request.assert('ip', 'O Endereço de ip do dispositivo é obrigatório').notEmpty();
	//request.assert('protocolo', 'O protocolo de acesso ao dispositivo é obrigatório').notEmpty();

	var erros = request.validationErrors();
	console.log(body);

	if(erros){
		response.render("dispositivos/cadastrar" , {validacao : erros});
		return;
	}

	
	deviceDataModel.insertData(request.session.user_id, body, function(error , result){
		if(error){
			console.log(error);
			response.render("dispositivos/cadastrar", {validacao : [{'msg':error}]});
		}else{
			response.render("dispositivos/listar", {validacao : {}});
		}
	})
}

module.exports.capturaDados = function(app, request, response){
	var conn = app.config.dbconn();
	var deviceDataModel = new app.app.models.dados_dispositivosDAO(conn);
	
	deviceDataModel.getData(request.session.user_id,function(error , result){
		console.log(result.length);
		response.render("home/home",{devices : result});
	})
}

module.exports.data_mgmt = function(app, request, response){
	var conn = new app.config.dbconn();
	var deviceDataModel = new app.app.models.dados_dispositivosDAO(conn);
	var dadosUsuario = new app.app.models.dados_usuariosDAO(conn);

	var async = require('async');
	
	/*-----Unsubscribe----*/


	/*-----Disconnect-----*/


	/*-----Clean----------*/

		//http://docs.oasis-open.org/mqtt/mqtt/v3.1.1/os/mqtt-v3.1.1-os.html
	/*-----Publish------*/
	//Verificar dados de autorizacao
	//Se dados checarem 
	//Verificar se dados de chegada que são ncessários estão completos
	//Inserir dados
	
	if(request.body.command == 'publish'){
		//testa autenticacao
		async.waterfall([
			function (callback) {
				dadosUsuario.validalogin(request.body, function(error, result){
					 if(result.length > 0){			 	
					 	
					 }else{
					 	response.status(403).render();
					 }
				})			
			},
			function (arg1, arg2, callback) {
				deviceDataModel.get_topic_data(request.body,function(error, result){
					if(result.length > 0){

					}
				})
			}, function (callback) {
				
			}
			],function(err, results){
			if(err){
				
			}
		})
	}

	/*-----Subscribe-----*/
	//Verificar dados de autorizacao
	//Se dados checarem 
	//Verificar se dados de chegada que são ncessários estão completos
	//Liberar dados
	else if(request.body.command == 'subscribe'){
		//testa autenticacao
		async.waterfall([
			function (callback) {
				dadosUsuario.validalogin(request.body, function(error, result){
					 if(result.length > 0){			 	
					 	
					 }else{
					 	response.status(403).render();
					 }
				})			
			},
			function (arg1, arg2, callback) {
				deviceDataModel.get_topic_data(request.body,function(error, result){
					if(result.length > 0){

					}
				})
			}, function (callback) {
				
			}
			],function(err, results){
			if(err){
				
			}
		})
		
	}
}
