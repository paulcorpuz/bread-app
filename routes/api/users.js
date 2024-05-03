const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// ? All paths start with '/api/users' in sever.js

// * C 
// POST /api/users (create a user - sign up)
router.post('/', usersCtrl.create);

// * login
// POST /api/users/login
router.post('/login', usersCtrl.login);

// * check-token
// GET /api/users/check-token
router.get('/check-token', usersCtrl.checkToken);

// * U
// PUT /api/users/:id
router.put('/:id', ensureLoggedIn, usersCtrl.edit);


module.exports = router;