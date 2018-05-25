var http = require('http');
//var express = require('express');

var server = http.createServer(function(request, response){

	token ;
	var filtro = request.url;

	console.log(token);

	switch(filtro){
		case '/page1':
			response.end("<html><meta charset='utf-8'><body><h1>Página 1</h1></body>");
			break;
		case '/page2':
			response.end("<html><meta charset='utf-8'><body><h1>Página 2</h1></body>");
			break;
		case '/page3':
			response.end("<html><meta charset='utf-8'><body><h1>Página 3</h1></body>");
			break;
		case '/page4':
			response.end("<html><meta charset='utf-8'><body><h1>Página 4</h1></body>");
			break;
		default:
			response.end("<html><meta charset='utf-8'><body><h1>Página Inicial</h1></body>");
	}

	

}).listen(80);