const crypto = require('crypto');

function dadosUsuario(connection){
	this._connection = connection;
}

dadosUsuario.prototype.validalogin = function(dados, callback){
	var secret = crypto.createHash('sha256').update(dados.senha).digest('hex');
	//console.log(secret)
	this._connection.query('select * from users where nome_usuario = ? and senha = ?', [dados.nome_usuario, secret], callback);
}

dadosUsuario.prototype.validaNomeUsuario = function(dados, callback, tipo){
	var query;
	if(tipo == 1){
		query = 'SELECT nome_usuario FROM users WHERE nome_usuario ="'+dados.nome_usuario+"'";
	}else{
		query = "SELECT nome_usuario FROM users WHERE nome_usuario ='"+dados.nome_usuario+"'and id !="+dados.id;
	}
	
	this._connection.query(query, callback);
}

dadosUsuario.prototype.validaEmail = function(dados, callback, tipo){
	var query;
	if(tipo == 1){
		query = 'SELECT email FROM users WHERE email ="'+dados.email+"'";
	}else{
		query = "SELECT email FROM users WHERE email ='"+dados.email+"'and id !="+dados.id;
	}
	this._connection.query(query, callback);
}

dadosUsuario.prototype.recuperar = function(dados, callback){
	this._connection.query('select * from users where id= ?', [dados], callback);
}

dadosUsuario.prototype.atualizar_dados_usuario = function(dados, callback){
	var query = "update users set nome ='"+dados.nome+"' and nome_usuario ='"+dados.nome_usuario;
	query += "' and email ='"+dados.email+"' where id = "+dados.id;
	this._connection.query(query, callback);
}

dadosUsuario.prototype.atualizar_senha_usuario = function(dados, callback){
	
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