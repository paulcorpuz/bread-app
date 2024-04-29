// const express = require('express');
// const router = express.Router();
// const reviewsCtrl = require('../../controllers/api/reviews');
// // require the authorization middleware function
// const ensureLoggedIn = require('../../config/ensureLoggedIn');


// // ? All paths start with '/api/reviews' in sever.js

// // * C
// // POST /api/reviews
// router.post('/', ensureLoggedIn, reviewsCtrl.create);

// // * R
// // GET /api/reviews
// router.get('/', reviewsCtrl.index);

// // * U
// // PUT /api/reviews/:id
// router.put('/:id', ensureLoggedIn, reviewsCtrl.edit);

// // * D
// // DELETE /api/reviews/:id
// router.delete('/:id', ensureLoggedIn, reviewsCtrl.delete);


// module.exports = router;