const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
// require the authorization middleware function
// const ensureLoggedIn = require('../../config/ensureLoggedIn');


// *** All paths start with '/api/notes' ***

// GET /api/items
router.get('/', notesCtrl.index);
// POST /api/items/:id
router.post('/', notesCtrl.create);


module.exports = router;