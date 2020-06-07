const express = require('express');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');

const app = express();

// <------->  Settings  <------->
// Configuration Port
app.set('port', process.env.PORT || 3000);

// Set views, with path
app.set('views', path.join(__dirname, 'views'));

// Express-handlebars configuration for use mode views
app.engine(
  '.hbs',
  exphbs({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: 'main.hbs',
    extname: '.hbs',
  })
);
// Template engine configuration!!
app.set('view engine', '.hbs');

// <------->  Middlewares  <------->
app.use(morgan('dev'));

// Objecto to Json (Post)
app.use(express.json());
// Form sends data, understand it, but not accept images etc...(Methos of Express)
app.use(express.urlencoded({extended: false}));

// <------->  Routes  <------->
app.use(require('./routes/index.routes'));

// <------->  Static Files  <------->
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
