module.exports.subscribe_check = function(app, request, msg, ws){
	var conn = app.config.dbconn();
	var dadosUsuario = new app.app.models.dados_usuariosDAO(conn);
	var valid_cad = false	
	
	dadosUsuario.validalogin(msg, function(error, result){
		
		if(!error && result.length > 0){								
			console.log("Cliente aceito: " + msg.nome_usuario);
		    ws.send(JSON.stringify({'msg':'aceito'}))
				
		}else{
		 	error ? console.log(error) : console.log(result);
		 	ws(JSON.stringify({'msg':'conexão inválida'})
		 	console.log("Cliente não aceito");
			ws.close();
		}	
	}), function(){
		return valid_cad
	}

}

module.exports.send_topic_message = function(app, request, response){

}