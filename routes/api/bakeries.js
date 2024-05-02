const express = require('express');
const router = express.Router();
const bakeriesCtrl = require('../../controllers/api/bakeries');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// ? All paths start with '/api/bakeries' in server.js

// * C "add bakery"
// POST /api/bakeries
router.post('/', ensureLoggedIn, bakeriesCtrl.create);


// * R "get bakeries"
// GET /api/bakeries
router.get('/', bakeriesCtrl.index);

// * U
// PUT /api/bakeries/:id
router.put('/:id', ensureLoggedIn, bakeriesCtrl.edit);

// * D
// DELETE /api/bakeries/:id
router.delete('/:id', ensureLoggedIn, bakeriesCtrl.delete);


// * Fetch -search Google Places API
router.get('/search', bakeriesCtrl.searchBakeries);




// * R "get (specific) bakery details"
// GET /bakeries/:id
router.get('/:id', bakeriesCtrl.show)



module.exports = router;