const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
// require the authorization middleware function
// const ensureLoggedIn = require('../../config/ensureLoggedIn');


// ? All paths start with '/api/users' in sever.js

// POST /api/users (create a user - sign up)
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);
// GET /api/users/check-token
router.get('/check-token', usersCtrl.checkToken);


// * U
// PUT /api/users/:id
router.put('/:id', usersCtrl.edit);





module.exports = router;