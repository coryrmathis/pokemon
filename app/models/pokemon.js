var mongoose = require('mongoose');

var pokemonSchema = new mongoose.Schema({
  name: String
})


mongoose.model('Pokemon', pokemonSchema)