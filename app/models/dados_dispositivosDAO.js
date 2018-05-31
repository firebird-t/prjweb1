function dadosDispositivos(connection){
	this._connection = connection;
}

//this._connection.query('select nome_dispositivo, topic, descricao from devices where id_usuario ='+id, callback);
dadosDispositivos.prototype.getData = function(id, callback){
		this._connection.query('select nome_dispositivo, topic, descricao from devices where id_usuario ='+id, callback);
}

dadosDispositivos.prototype.insertData = function(session_id, body, callback){
		var query = 'insert into devices (id_usuario, nome_dispositivo, topic, ip, protocolo, data_criacao, descricao ) VALUES';
		query += '('+session_id+',"'+body.nome_dispositivo+'","'+body.topic+'","'+body.ip+'","'+body.protocolo+'", NOW(), "'+body.descricao+'")';
		this._connection.query(query, callback);
}

dadosDispositivos.prototype.get_all_topic_data = function(dados, callback){
		this._connection.query('select topic from devices where id_usuario ='+ dados.id, callback);
}


dadosDispositivos.prototype.get_topic_data = function(dados, topic, callback){
		console.log('select topic from devices where id_usuario ='+ dados.id+' and topic = "'+topic+'"')
		this._connection.query('select topic from devices where id_usuario ='+ dados.id+' and topic = "'+topic+'"', callback);
}

dadosDispositivos.prototype.insert_topic_data = function(dispositivo, mensagem , callback){
		this._connection.query('insert into device_data(device_id, topic, value, datetime) values('+dispositivo+',"'+mensagem.topic+'","'+messagem.message+'",NOW())', callback);
}

module.exports = function(){
	return dadosDispositivos;
}

