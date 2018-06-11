var web_socket_clients = [];
module.exports.subscribe_check = function(app, request, msg, ws){
	var conn = app.config.dbconn();
	var dadosUsuario = new app.app.models.dados_usuariosDAO(conn);
	var utils = new app.app.models.utilsDAO(conn);

	dadosUsuario.validalogin(msg, function(error, result){
		
		if(!error && result.length > 0){								
			console.log("Cliente aceito: " + msg.nome_usuario);
		    ws.send(JSON.stringify({'msg':'conexão permitida'}))
			web_socket_clients.push({"ws":ws,"req":request,"nome_usuario":msg.nome_usuario,"topic":msg.topic});	
			
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

module.exports.send_topic_message = function(app, request){
	for(i = 0; i < web_socket_clients.length; i++){
		//console.log(web_socket_clients[i].req.connection.remoteAddress)
		if(web_socket_clients[i].nome_usuario == request.body.nome_usuario){
			if(web_socket_clients[i].topic == request.body.topic){
				console.log("ok")
			}
		}
	}
}

