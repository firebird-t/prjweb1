//var http = require('http');
//Configuração do Servidor
var app = require('./config/server');
var aedes = require("aedes")();

//MQTT Server
var aedes_server = require('net').createServer(aedes.handle);
var port = 1883


// var index = require('./app/routes/index')(app);
// var page1 = require('./app/routes/page1')(app);
// var page2 = require('./app/routes/page1')(app);
// var page3 = require('./app/routes/page1')(app);
// var page4 = require('./app/routes/page1')(app);

//Mensagem de inicio
var msg = require("./mod_test");

app.listen(80, function(){
	console.log(msg());
});

aedes_server.listen(port, function () {
  console.log('Aedes Mqtt server started on port', port);
})
