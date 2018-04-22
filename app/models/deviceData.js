function dadosDB(connection){
	this._connection = connection;
}

dadosDB.prototype.getData = function(callback){
		this._connection.query('select * from devices', callback);
}

dadosDB.prototype.insertData = function(body, callback){
		this._connection.query('insert into devices set ?', body, callback);
}

module.exports = function(){
	return dadosDB;
}

