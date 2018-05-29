// var ws = require('websocket-stream');
// var httpServer = require('http').createServer()
// var wsPort = 8888;

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
    /*mq: emitter,*/
    persistence: persistence
});

//Web Socket
// ws.createServer({
//   server: httpServer
// }, aedes.handle)

// httpServer.listen(wsPort, function () {
//   console.log('websocket server listening on port', wsPort)
// })

//MQTT Server
var aedes_server = require('net').createServer(aedes.handle);
var port = 1883

aedes.on('clientError', function (client, err) {
  console.log('client error', client.id, err.message, err.stack)
})

aedes.on('connectionError', function (client, err) {
  console.log('client error', client, err.message, err.stack)
})

aedes.on('publish', function (packet, client) {
  if (client) {
    console.log('message from client', client.id)
  }
})

aedes.on('subscribe', function (subscriptions, client) {
  if (client) {
    console.log('subscribe from client', subscriptions, client.id)
  }
})

aedes.on('client', function (client) {
  console.log('new client', client.id)
})

aedes_server.listen(port, function () {
    console.log('mqtt server started on port', port);
})