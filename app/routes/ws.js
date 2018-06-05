module.exports = function(app){
	
	app.ws('/echo', (ws, req) => {
	    ws.on('message', msg => {
	        ws.send(msg)
	    })

	    ws.on('close', () => {
	        console.log('WebSocket was closed')
	    })
	})
}