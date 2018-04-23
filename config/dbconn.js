var mysql = require('mysql');

var dbConn = function(){
		return conn = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password : 'db_node_01#',
		database: 'trabalho'});
}


module.exports = function(){
	return dbConn;
}