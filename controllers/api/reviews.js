// const Bakery = require('../models/bakery');

// module.exports = {
//   create,
//   delete: deleteReview,
// };


// // * C
// async function create(req, res) {
//   try {
//     const newReview = {
//       content: req.body.newReview,
//       rating: req.body.rating,
//       user: req.user._id
//     };
//     const review = await Bakery.create(newReview);
//     res.json(review);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// }

// // * D
// async function deleteReview(req, res) {
//   try {
//     // const note = await Note.findOneAndDelete({_id: req.params.id});
//     const review  = await Bakery.findByIdAndDelete(req.params.id);
//     res.json(review);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// }
