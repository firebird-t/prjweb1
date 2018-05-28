//var http = require('http');
//Configuração do Servidor
var app = require('./config/server');

//var persistence = require('aedes-persistence');
var aedesPersistenceMongoDB = require('aedes-persistence-mongodb')

//Aedes Persistence
var persistence = aedesPersistenceMongoDB({url: 'mongodb://127.0.0.1:27017/aedes'})

//Emitter
var mqmongo = require('mqemitter-mongodb')

//Aedes Server
var aedes = require("aedes")({
	persistence:persistence
});

//MQTT Server
var aedes_server = require('net').createServer(aedes.handle);
var port = 1883

aedes.on('publish', function(packet, client) {
    console.log("published", packet.payload.toString());
});
aedes.on('client', function(client) {
    console.log('client connected', client.id);
});

aedes.on('subscribe', function (subscriptions, client) {
    console.log('client subscribe ', client.id, 'topic is', subscriptions);
})

//Mensagem de inicio
var msg = require("./mod_test");

app.listen(80, function(){
	console.log(msg());
});

aedes_server.listen(port, function () {
  console.log('Aedes Mqtt server started on port', port);
})
