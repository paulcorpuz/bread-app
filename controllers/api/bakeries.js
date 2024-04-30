// const User = require('../../models/user')
const Bakery = require('../../models/bakery');
const fetch = require('node-fetch');
const token = process.env.GOOGLE_PLACES_KEY;

module.exports = {
  // create,
  // index,
  // edit,
  // delete: deleteBakery,
  searchBakeries,
  getBakeries,
  addBakery,
  removeBakery,
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


async function searchBakeries(req, res) {
  try {
    const searchQuery = req.query.query || 'bakeries in seattle';
    const location = req.query.location;
    const radius = req.query.radius;

    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchQuery}&location=${location}&radius=${radius}&type=bakery&key=${token}`
    );

    const data = await response.json();
    res.json(data.results);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch bakeries' });
  }
}

async function getBakeries(req, res) {
  try {
    const bakeries = await Bakery.find({});
    res.json(bakeries);
  } catch (err) {
    res.status(400).json(err);
  }
}

// look up google places doc on how to use images
// look up google places doc on types/categories
async function addBakery(req, res) {
  try {
    const bakeryData = {
      name: req.body.name,
      address: req.body.formatted_address,
      city: req.body.city || '',
      state: req.body.state || '',
      zipCode: req.body.zip_code || '',
      phoneNumber: req.body.formatted_phone_number || '',
      website: req.body.website || '',
      rating: req.body.rating || 0,
      googlePlaceId: req.body.place_id,
    };

    const bakery = new Bakery(bakeryData);
    const savedBakery = await bakery.save();
    res.json(savedBakery);
  } catch (error) {
      res.status(500).json({ message: 'Failed to add bakery', error });
    }
  }


  async function removeBakery(req, res) {
    try {
      const bakeryId = req.params.id;
      await Bakery.findByIdAndDelete(bakeryId);
      res.json({ message: 'Bakery removed successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to remove bakery', error });
    }
  }


// from Shopping Cart Lesson 1
// function findOneAndUpdate(filter, update, options) {}
// https://mongoosejs.com/docs/tutorials/findoneandupdate.html
