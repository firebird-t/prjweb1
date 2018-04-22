module.exports.dados_inserir = function(app, request, response){

	var body = request.body;

	request.assert('nome', 'Nome do dispositivo é obrigatório').notEmpty();
	request.assert('ip', 'O Endereço de ip do dispositivo é obrigatório').notEmpty();
	request.assert('protocolo', 'O protocolo de acesso ao dispositivo é obrigatório').notEmpty();

	var erros = request.validationErrors();
	
	if(erros){
		response.render("cadastro/inserir_dados.ejs" , {validacao : erros});
		return;
	}

	var conn = app.config.dbconn();
	var deviceDataModel = new app.app.models.deviceData(conn);

	deviceDataModel.insertData(body, function(error , result){
		//response.render("home/index", {resposta : result});
		response.redirect("/");
	})
}

module.exports.capturaDados = function(app, request, response){
	var conn = app.config.dbconn();
	var deviceDataModel = new app.app.models.deviceData(conn);
	
	deviceDataModel.getData(function(error , result){
		response.render("home/index.ejs",{devices : result});
	})
}