const express = require('express');
const exphbs = require('express-handlebars');
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

// <------->  Middlewares<------->

// <------->  Routes<------->
app.use(require('./routes/index.routes'));

// <------->  Static Files<------->

module.exports = app;
