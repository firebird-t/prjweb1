function dadosDispositivos(connection){
	this._connection = connection;
}

//this._connection.query('select nome_dispositivo, topic, descricao from devices where id_usuario ='+id, callback);
dadosDispositivos.prototype.getDataRecord_Devices_Messages = function(id, callback){		
		var query = 'select';
		query += '(select count(*) from devices where devices.id_usuario = '+id+' ) as quantidade,'
		query += '(select count(*) from messages, devices where devices.id_usuario ='+id+' and messages.device_id = devices.id) as registros'

		this._connection.query(query, callback);
}

dadosDispositivos.prototype.getDataRecordbyDate = function(id, callback){
		var query = 'select count(DAY(messages.datetime)) as x, DAYNAME(messages.datetime)  as y from devices as d';
		query += ' right join messages on d.id = messages.device_id'
		query += ' and d.id_usuario ='+id
		query += ' group by(DAY(messages.datetime)) order by(DAYNAME(messages.datetime))'

		this._connection.query(query, callback);
}

dadosDispositivos.prototype.getUserDevices = function(id, callback){
		var query = 'select id, nome_dispositivo, topic from devices where devices.id_usuario = '+id;
		this._connection.query(query, callback);
}

dadosDispositivos.prototype.getDataDevice = function(id, callback){
		var query = 'select * from devices right join messages on messages.device_id = devices.id where devices.id = '+id+' limit 50';
		this._connection.query(query, callback);
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
		this._connection.query('select id, topic from devices where id_usuario ='+ dados.id+' and topic = "'+topic+'"', callback);
}

dadosDispositivos.prototype.insert_topic_data = function(dispositivo, mensagem , callback){
		this._connection.query('insert into messages(device_id, topic, message, datetime) values('+dispositivo.id+',"'+mensagem.topic+'","'+mensagem.message+'",NOW())', callback);
}

dadosDispositivos.prototype.get_topic_message = function(device_id, topic){
		this._connection.query('select id, topic from messages where topic ="'+topic+'" ORDER BY id DESC LIMIT 1', callback);
}

module.exports = function(){
	return dadosDispositivos;
}

