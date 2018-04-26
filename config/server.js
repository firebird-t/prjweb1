var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var session = require('express-session');
var helmet = require('helmet');

//instância do express
var app = express();

//Proteção contra ataques
app.use(helmet());

app.use(session({
  secret: 'teste teste',
  resave: false,
  saveUninitialized: false
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

app.use(expressValidator({
  customValidators: {
    isEqual: (value1, value2) => {
      return value1 === value2
    }
  }
}))

//Localizando rotas e models
consign()
	.include('./app/routes')
	.then('config/dbconn.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);

//
module.exports = app;
