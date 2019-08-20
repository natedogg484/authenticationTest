const express = require('express');
const router = express.Router();

// calling on the users.js controller script
const userController = require('../app/api/controllers/users');

// calling on the methods created in the controller script
router.post('/register', userController.create);
router.post('/authenticate', userController.authenticate);

// exporting the functions of the router
module.exports = router;