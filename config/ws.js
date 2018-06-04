/*Web Socket*/
var ws = require('websocket-stream');
var websocket_server = require('http').createServer()
var wsPort = 8888;

//Web Socket
ws.createServer({
  server: websocket_server
}, ws_handle)

websocket_server.listen(wsPort, function () {
  console.log('WebSocket iniciado na porta', wsPort)
})

function ws_handle(stream, request) {
  // `request` is the upgrade request sent by the client.
  fs.createReadStream('bigdata.json').pipe(stream)
}