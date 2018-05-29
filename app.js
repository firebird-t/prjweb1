//var http = require('http');
//Configuração do Servidor
var app = require('./config/server');
var aedes_cfg = require('./config/aedes_cfg')

//Mensagem de inicio
var msg = require("./mod_test");

app.listen(80, function(){
	console.log(msg());
});


