//var http = require('http');
//Configuração do Servidor
var app = require('./config/server');

//var persistence = require('aedes-persistence');
var aedesPersistenceMongoDB = require('aedes-persistence-mongodb')

//Aedes Persistence
var persistence = aedesPersistenceMongoDB({url: 'mongodb://127.0.0.1:27017/aedes'})

//Emitter
var mqmongo = require('mqemitter-mongodb')

var emitter = mqmongo({
	url: 'mongodb://localhost:27017/aedes'
})

//Aedes Server
var aedes = require("aedes")({
	mq: emitter,
	persistence: persistence
});

//MQTT Server
var aedes_server = require('net').createServer(aedes.handle);
var port = 1883

aedes.on('client', client => {
    console.log(`Client [${client.id}] connected`);
})

aedes.on('clientDisconnect', client => {
    console.log(`Client [${client.id}] disconnected`);
})

aedes.on('clientError', (client, err) => {
    console.log(`Client [${client.id}] encountered error: ${JSON.stringify(err)}`);
})

aedes.on('publish', (packet, client) => {
    client ? console.log(`Client [${client.id}] published on ${packet.topic}: ${packet.payload}`)
        : console.log(`aedes published on ${packet.topic}: ${packet.payload}`);
})

aedes.on('subscribe', (subscriptions, client) => {
    var subscriptionArr = subscriptions.map(subscription => {
        return `${subscription['topic']} (${subscription['qos']})`;
    });
    client ? console.log(`Client [${client.id}] subscribed ${subscriptionArr}`)
        : console.log(`aedes subscribed ${packet.topic}: ${packet.payload}`);
})

aedes.on('unsubscribe', (unsubscriptions, client) => {
    client ? console.log(`Client [${client.id}] unsubscribe ${unsubscriptions}`) : '';
})

//Mensagem de inicio
var msg = require("./mod_test");

app.listen(80, function(){
	console.log(msg());
});

aedes_server.listen(port, function () {
  console.log('Aedes Mqtt server started on port', port);
})
