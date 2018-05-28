function utils(connection){
	this._connection = connection;
}

utils.prototype.grava_token = function(id, token, lifetime, callback){
	var query = "insert into tokens(user_id, activate_date, lifetime, token) values("+id+",NOW(),"+lifetime+",'"+token+"')";
	this._connection.query(query,callback);
}

utils.prototype.atualiza_token = function(token_id, callback){
	var query = "update tokens set used_date = NOW() where token_id="+token_id;
	this._connection.query(query,callback);
}

utils.prototype.pesquisa_token = function(request_id, token_id, callback){
	var query = "select * from tokens where token_id="+token_id+" and token='"+request_id+"' and used_date is null";
	this._connection.query(query,callback);
}

utils.prototype.ultimo_registro = function(callback){
	var query = "SELECT LAST_INSERT_ID()";
	this._connection.query(query, callback);
	//select * from tokens where now() < addtime(activate_date, concat(lifetime,":00:00"))
}


module.exports = function(){
	return utils;
}