function dataUser(connection){
	this._connection = connection;
}

dataUser.prototype.cadastrar = function(dados, callback){
	this._connection.query('insert into cadastro set ?', dados, callback);
}

dataUser.prototype.recuperar = function(callback){
	this._connection.query('select * from cadastro where id= ? and username = ?',callback);
}


module.exports = function(){
	return dataUser;
}