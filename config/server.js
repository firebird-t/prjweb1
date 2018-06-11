var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var session = require('express-session');
var helmet = require('helmet');
var cookieParser = require('cookie-parser');
var ws = require('express-ws');
//var mosca = require('mosca');
//var cookieSession = require('cookie-session');
var morgan = require('morgan');
//var mongodb = require("mongodb");

//instância do express
var app = express();

//Express Web Socket
ws(app);

//Proteção contra ataques
app.use(helmet());

//Cookie Parser
app.use(cookieParser())

//Logger
app.use(morgan('dev'));

//Cookie Session
/*app.use(cookieSession({
  name: 'session',
  keys: [/* secret keys ],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))*/

//Configurações da sessão
app.use(session({
  secret: '1234567890!@#$%¨&*()_+qazxswedcvfrtgbnyujmkiolpç^~~;.',
  resave: false,
  saveUninitialized: false
}))

//Pastas estáticas
app.use(express.static('public'));

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
