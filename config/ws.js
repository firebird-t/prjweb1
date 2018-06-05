const WebSocket = require('ws');

const ws = new WebSocket.Server({ port: 8888 });

ws.on('connection', function connection(ws) {
	ws.isAlive = true;
  	ws.send('Hello');

  	ws.on('open', function open() {
  	  const array = new Float32Array(5);

  	  for (var i = 0; i < array.length; ++i) {
  	    array[i] = i / 2;
  	  }

  	  ws.send(array);
  	});

  	ws.on('message', function incoming(message) {
  	    console.log('received: %s', message);
  		ws.send("Mensagem recebida: "+message);
  	});

  	ws.on('close', () => {
    	console.log('connection closed by client');
  	});
});

