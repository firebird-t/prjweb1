module.exports.subscribe_check = function(app, request, msg, ws){
	var conn = app.config.dbconn();
	var dadosUsuario = new app.app.models.dados_usuariosDAO(conn);
	
	dadosUsuario.validalogin(msg, function(error, result){
		
		if(!error && result.length > 0){								
			console.log("Cliente aceito: " + msg.nome_usuario);
		    ws.send(JSON.stringify({'msg':'conexão permitida'}))
				
		}else{
		 	error ? console.log(error) : console.log(result);
		 	ws.send(JSON.stringify({'msg':'conexão proibida'}));
		 	console.log("Cliente não aceito");
			ws.close();
		}	
	})

}


module.exports.connectedClients = function(app, request, ws){

}

module.exports.send_topic_message = function(app, request, ws){

}

