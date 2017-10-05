var mongoose = require('mongoose');
var Pokemon = mongoose.model('Pokemon')

var pokemonController = {

  index: function(req, res){
    Pokemon.find({}).exec(function(err, pokemon){
      res.render('pokemon/index', {
        pokemon: pokemon
      })
    })
  },

  show: function(req, res){
    Pokemon.findOne({_id: req.params.id}, function(err, pokemon){
      if(err){
        console.log(err)
      }else{
        console.log(req.params.name)
        res.send(pokemon.name)
      }
      
    })
    
  },

  edit: function(req, res){

  },

  create: function(req, res){


  },

  update: function(req, res){

  },

  destroy: function(req, res){

  }
}

module.exports = pokemonController;