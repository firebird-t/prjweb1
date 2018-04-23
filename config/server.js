var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var session = require('express-session');
var helmet = require('helmet');


var app = express();

//Proteção contra ataques
app.use(helmet());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

//Pastas estáticas
//app.use(express.static('./app/public'));

//Configurando Engine
app.set('view engine','ejs');

//Localizando Views
app.set('views','./app/views');

//Informando ao express para usar o body parser
app.use(bodyParser.urlencoded({extended: true}));

//Express Validator
app.use(expressValidator());

//Localizando rotas e models
consign()
	.include('./app/routes')
	.then('config/dbconn.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);

//
module.exports = app;
