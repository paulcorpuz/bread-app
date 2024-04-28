const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
// require the authorization middleware function
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// ? All paths start with '/api/notes' in sever.js

// * C
// POST /api/notes
router.post('/', ensureLoggedIn, notesCtrl.create);

// * R
// GET /api/notes
router.get('/', notesCtrl.index);

// * U
// PUT /api/notes/:id
router.put('/:id', ensureLoggedIn, notesCtrl.edit);

// * D
// DELETE /api/notes/:id
router.delete('/:id', ensureLoggedIn, notesCtrl.delete);


module.exports = router;