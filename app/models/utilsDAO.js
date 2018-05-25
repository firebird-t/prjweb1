function utils(connection){
	this._connection = connection;
}

utils.prototype.grava_token = function(id, token, lifetime, callback){
	var query = "insert into tokens(user_id, activate_date, lifetime, token) values("+id+",NOW(),"+lifetime+",'"+token+"')";
	this._connection.query(query,callback);
}

utils.prototype.atualiza_token = function(id, token, lifetime, callback){
	var query = "update()";
	this._connection.query(query,callback);
}

utils.prototype.pesquisa_token = function(id, token, lifetime, callback){
	var query = "select()";
	this._connection.query(query,callback);
}

utils.prototype.ultimo_registro = function(callback){
	var query = "SELECT LAST_INSERT_ID()";
	this._connection.query(query, callback);
}


module.exports = function(){
	return utils;
}