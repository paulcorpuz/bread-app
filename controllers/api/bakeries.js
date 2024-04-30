const Bakery = require('../../models/bakery');
// const User = require('../../models/user')
const fetch = require('node-fetch');
const token = process.env.GOOGLE_PLACES_KEY;


module.exports = {
  // create,
  // index,
  // edit,
  // delete: deleteBakery,
  fetchBakeries,
  addBakery,
};


// * C
// async function create(req, res) {
//   try {
//     const newBakery = {
//       text: req.body.newBakery,
//       user: req.user._id
//     };
//     const bakery = await Bakery.create(newBakery);
//     res.json(bakery);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// }

// * R
// async function index(req, res) {
//   try {
//     const bakeries = await Bakery.find({});
//     res.json(bakeries);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// }

// * U
// async function edit(req, res) {
//   try {
//     const bakery = await Bakery.findOneAndUpdate({ _id: req.params.id }, { text: req.body.editBakery }, { new: true });
//     res.json(bakery);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// }

// * D
// async function deleteBakery(req, res) {
//   try {
//     // const note = await Note.findOneAndDelete({_id: req.params.id});
//     const note = await Note.findByIdAndDelete(req.params.id);
//     res.json(note);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// }


async function fetchBakeries(req, res) {
  try {
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=bakeries+in+seattle&key=${token}`);
    const bakery = await response.json();
    res.json(bakery);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get that bread (fetch bakeries)' });
  }
}

async function addBakery(req, res, next) {
  try {
    const bakeryData = req.body;
    const bakery = new Bakery(bakeryData);
    const savedBakery = await bakery.save();
    res.json(savedBakery);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add bakery', error });
  }
}









// from Shopping Cart Lesson 1
// function findOneAndUpdate(filter, update, options) {}
// https://mongoosejs.com/docs/tutorials/findoneandupdate.html
