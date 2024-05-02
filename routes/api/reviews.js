const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../../controllers/api/reviews');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// ? All paths start with '/api/reviews' in sever.js

// * C
// POST /bakeries/:id/reviews (create review for a bakery)
router.post('/:id/reviews', ensureLoggedIn, reviewsCtrl.create);

// * D
// DELETE /reviews/id 
router.delete('/:bakeryId/:reviewId', ensureLoggedIn, reviewsCtrl.delete);


module.exports = router;