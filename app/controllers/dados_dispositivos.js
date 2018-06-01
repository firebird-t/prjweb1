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

	//Carrega quantidade de registros e quantidade de mensagens
	//Carrega Registro por data
	//Carrega Dispositivos do usuario	
	var results = [];
	deviceDataModel.getDataRecord_Devices_Messages(request.session.user_id, function(error , result){
		if(!error){
			results[0] = result[0];
				if(!error){
					deviceDataModel.getUserDevices(request.session.user_id, function(error, result){
						results[1] = result;
						response.render("home/home",{devices : results});
					})
				}	
		}else{
			console.log(error)
			response.render("home/home",{devices : result});	
		}
		
	})
}

module.exports.data_mgmt = function(app, request, response){
	var conn = app.config.dbconn();
	var deviceDataModel = new app.app.models.dados_dispositivosDAO(conn);
	var dadosUsuario = new app.app.models.dados_usuariosDAO(conn)
	
	var async = require('async');

	var erros = [];
	erros.push({ 'msg': 'Dados de login inválidos'});
	erros.push({ 'msg': 'Tópico inexistente, você deve cadastrar o tópico'});
	erros.push({ 'msg': 'Falha ao inserir/capturar as informações, tente novamente mais tarde'});
	
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
		async.waterfall([
			function (callback) {
				dadosUsuario.validalogin(request.body, function(error, result){
					 if(!error && result.length > 0){			
					 	callback(null, result);
					 }else{
					 	callback('null', result);
					 }
				})			
			},
			function (dados, callback) {
				deviceDataModel.get_topic_data(dados[0], request.body.topic ,function(error, result){
					if(!error && result.length > 0){
						callback(null, result);
					}else{
						callback('null')
					}
				})
			}, function (dados, callback) {
				deviceDataModel.insert_topic_data(dados[0], request.body, function(error, result){
					if(!error && result.affectedRows > 0){
						console.log('dado gravado')
					}else{
						console.log(error, result.affectedRows)
					}
				})
			}
			],function(err, result){
			if(err){
				response.sendStatus(403);	
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
		//testa autenticacao
		async.waterfall([
			function (callback) {
				dadosUsuario.validalogin(request.body, function(error, result){
					 if(!error && result.length > 0){			
					 	callback(null, result);
					 }else{
					 	callback('null', result);
					 }
				})			
			},
			function (dados, callback) {
				deviceDataModel.get_topic_data(dados[0], request.body.topic ,function(error, result){
					if(!error && result.length > 0){
						callback(null, result);
					}else{
						callback('null')
					}
				})
			}, function (dados, callback) {
				deviceDataModel.get_topic_message(dados[0], request.body, function(error, result){
					if(!error && result.length > 0){
						console.log('dado enviado')
					}else{
						console.log(error);
					}
				})
			}
			],function(err, result){
			if(err){
				response.sendStatus(403);	
			}
		})
		
	}
}

module.exports.dados_grafico_geral = function(app, request, response){
	var conn = app.config.dbconn();
	var deviceDataModel = new app.app.models.dados_dispositivosDAO(conn);
	var dadosUsuario = new app.app.models.dados_usuariosDAO(conn)

	deviceDataModel.getDataRecordbyDate(request.session.user_id, function(error, result){
		if(!error){
			response.setHeader('Content-Type', 'application/json');
			response.send(result)
		}
	})
}


module.exports.dados_grafico = function(app, request, response){
	var conn = app.config.dbconn();
	var deviceDataModel = new app.app.models.dados_dispositivosDAO(conn);
	var dadosUsuario = new app.app.models.dados_usuariosDAO(conn)

	deviceDataModel.getDataDevice(request.query.id, function(error, result){
		if(!error){
			response.send(result);
		}
	})
}


module.exports.info_dispositivos = function(app, request, response){
	var conn = app.config.dbconn();
	var deviceDataModel = new app.app.models.dados_dispositivosDAO(conn);
	var dadosUsuario = new app.app.models.dados_usuariosDAO(conn)

	deviceDataModel.getUserDevices(request.session.user_id, function(error, result){
		response.render("dispositivos/listar",{devices : result});
	})
}