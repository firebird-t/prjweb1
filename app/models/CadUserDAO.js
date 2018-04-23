function dataUser(connection){
	this._connection = connection;
}

dataUser.prototype.cadastrar = function(dados, callback){
	this._connection.query('insert into users set ?', dados, callback);
}

dataUser.prototype.recuperar = function(dados, callback){
	this._connection.query('select * from users where id= ? and username = ?', [dados], callback);
}

dataUser.prototype.validalogin = function(dados, callback){
	this._connection.query('select * from users where nome_usuario = ? and senha = ?', [dados.nome_usuario, dados.senha], callback);
}


module.exports = function(){
	return dataUser;
}