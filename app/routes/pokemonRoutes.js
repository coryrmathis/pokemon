var express = require('express');
var router = express.Router()
var pokemonController = require('../controllers/pokemon');

router.get('/', pokemonController.index)
router.get('/:id', pokemonController.show)

module.exports = router;