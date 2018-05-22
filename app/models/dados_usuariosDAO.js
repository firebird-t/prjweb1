const crypto = require('crypto');

function dadosUsuario(connection){
	this._connection = connection;
}

dadosUsuario.prototype.validalogin = function(dados, callback){
	var secret = crypto.createHash('sha256').update(dados.senha).digest('hex');
	//console.log(secret)
	this._connection.query('select * from users where nome_usuario = ? and senha = ?', [dados.nome_usuario, secret], callback);
}

dadosUsuario.prototype.validaNomeUsuario = function(dados, callback){
	var query = 'SELECT nome_usuario FROM users WHERE nome_usuario ="'+dados+'"';
	this._connection.query(query, callback);
}

dadosUsuario.prototype.validaEmail = function(dados, callback){
	var query = 'SELECT email FROM users WHERE email ="'+dados+'"';
	this._connection.query(query, callback);
}

dadosUsuario.prototype.recuperar = function(dados, callback){
	this._connection.query('select * from users where id= ?', [dados], callback);
}

dadosUsuario.prototype.atualizar = function(dados, callback){
	var query = "update users set(nome, nome_usuario, email";
	
	if(dados.senha != ""){
		query += ",senha";
	}else{
		query += ")";
	}

	//this._connection.query('select * from users where id= ?', [dados], callback);
}

dadosUsuario.prototype.cadastrar = function(dados, callback){
	var secret = crypto.createHash('sha256').update(dados.senha).digest('hex');
	var query = 'INSERT INTO users (nome, nome_usuario, email, senha) VALUES ';
	query += '("' + dados.nome+'","'+dados.nome_usuario+'","'+dados.email+'","'+secret+'")';	
	this._connection.query(query, callback);
}


module.exports = function(){
	return dadosUsuario;
}