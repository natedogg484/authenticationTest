const express = require('express');
const router = express.Router();

// calling on the movies controllers
const movieController = require('../app/api/controllers/movies');

// getting all movies in db
router.get('/', movieController.getAll);

// adding movie to db
router.post('/', movieController.create);

// dealing with specific movies
router.get('/:movieId', movieController.getById);
router.put('/:movieId', movieController.updateById);
router.delete('/:movieId', movieController.deleteById);

// exporting the above methods
module.exports = router;