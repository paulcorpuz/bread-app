const Bakery = require('../../models/bakery');

module.exports = {
  create,
  delete: deleteReview,
};


// * C
async function create(req, res) {
  try {
    const bakeryId = req.params.id;
    const newReview = {
      content: req.body.content,
      rating: req.body.rating,
      user: req.user._id,
      userName: req.user.name,
      profilePic: req.user.profilePic,
    };
    const bakery = await Bakery.findById(bakeryId);
    bakery.reviews.push(newReview);
    await bakery.save();

    res.json(newReview);
  } catch (err) {
    res.status(400).json(err);
  }
}


// * D
async function deleteReview(req, res) {
  try {
    const bakeryId = req.params.bakeryId;
    const reviewId = req.params.reviewId;
    const bakery = await Bakery.findById(bakeryId);
    bakery.reviews.pull(reviewId);
    await bakery.save();

    res.json({ message: 'Review deleted successfully' });
  } catch (err) {
    res.status(400).json(err);
  }
}
