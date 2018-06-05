module.exports = function(app){
	
	app.ws('/ws', (ws, req) => {
	    ws.on('message', msg => {
			try{
				var mensagem  = JSON.parse(msg);
				if(mensagem["command"] == "subscribe"){
					console.log('um cliente inscrito')
					try{
						ws.send(JSON.stringify({'msg':'aceito'}))
					}catch(e){
						console.log(e)
					}
				}
			}catch(e){
				console.log(e)
			}
			
			
	    })

	    ws.on('close', () => {
	        console.log('WebSocket was closed')
		})
		
		ws.on('error',function(error){
			console.log(error)
		})
	})


}