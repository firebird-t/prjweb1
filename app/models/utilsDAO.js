function utils(connection){
	this._connection = connection;
}

utils.prototype.grava_token = function(id, token, callback){
	var query = "insert into tokens(user_id, activate_date, lifetime, token) values()";
	this._connection.query(query,callback);
}

module.exports = function(){
	return utils;
}