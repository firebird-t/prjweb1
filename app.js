//var http = require('http');
//Configuração do Servidor
var app = require('./config/server');
//var aedes_cfg = require('./config/aedes_cfg')
//var ws = require('./config/ws')

//events
app.on("publish", app.app.controllers.subscribe_controller.send_topic_message);

//Mensagem de inicio
var msg = require("./mod_test");

app.listen(80, function(){
	console.log(msg());
});


