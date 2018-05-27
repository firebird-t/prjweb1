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
			response.render("dispositivos/cadastrar", {validacao : error});
		}else{
			response.render("dispositivos/listar", {validacao : {}});
		}
	})
}

module.exports.capturaDados = function(app, request, response){
	var conn = app.config.dbconn();
	var deviceDataModel = new app.app.models.dados_dispositivosDAO(conn);
	
	deviceDataModel.getData(request.session.user_id,function(error , result){
		response.render("home/home",{devices : result});
	})
}