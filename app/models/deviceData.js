module.exports = function(){

	this.getData = function(connection, callback){
		connection.query('select * from devices', callback);
	}


	this.insertData = function(body, connection, callback){
		connection.query('insert into devices set ?', body, callback);
	}

	return this;
}