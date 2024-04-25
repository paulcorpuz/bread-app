const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// *** All paths start with '/api/users' ***

// GET /api/items
router.get('/', ensureLoggedIn, notesCtrl.index);
// POST /api/items/:id
router.post('/', ensureLoggedIn, notesCtrl.create);


module.exports = router;