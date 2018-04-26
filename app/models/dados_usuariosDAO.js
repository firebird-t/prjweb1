function dadosUsuario(connection){
	this._connection = connection;
}

dadosUsuario.prototype.cadastrar = function(dados, callback){
	var query = 'INSERT INTO users (nome, nome_usuario, email, senha) VALUES ';
	query += '("' + dados.nome+'","'+dados.nome_usuario+'","'+dados.email+'","'+dados.senha+'")';	
	this._connection.query(query, callback);
}

dadosUsuario.prototype.recuperar = function(dados, callback){
	this._connection.query('select * from users where id= ? and username = ?', [dados], callback);
}

dadosUsuario.prototype.validalogin = function(dados, callback){
	this._connection.query('select * from users where nome_usuario = ? and senha = ?', [dados.nome_usuario, dados.senha], callback);
}


module.exports = function(){
	return dadosUsuario;
}