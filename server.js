var express = require('express')
var path = require('path')
var logger = require('morgan')
require('./app/models/db')

var pokemonRoutes = require('./app/routes/pokemonRoutes')


var app = express();

app.use(logger('dev'));


app.set('views', path.join(__dirname, '/app/views'))
app.set('view engine', 'pug')


app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/pokemon', pokemonRoutes)

app.listen(3000, function(){
  console.log('Application listening on port 3000')
})