//var http = require('http');
//Configuração do Servidor
var app = require('./config/server');

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
