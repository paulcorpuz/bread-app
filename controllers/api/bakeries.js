// const User = require('../../models/user')
const Bakery = require('../../models/bakery');
const fetch = require('node-fetch');
const token = process.env.GOOGLE_PLACES_KEY;


module.exports = {
  create,
  index,
  show,
  edit,
  delete: deleteBakery,
  searchBakeries,
};


// look up google places doc on how to use images. additional types /categories -- missing data
// * C
async function create(req, res) {
  console.log('create working?')
  try {
    const bakeryData = {
      name: req.body.name || '',
      address: req.body.formatted_address || '',
      // phoneNumber: req.body.formatted_phone_number || '',
      // website: req.body.website || '',
      rating: req.body.rating || 0,
      googlePlaceId: req.body.place_id,
      // imageUrl: req.body.photo_reference || '',
      userId: req.user._id,
      userName: req.user.name,
    };
    
    const bakery = new Bakery(bakeryData);
    const savedBakery = await bakery.save();
    res.json(savedBakery);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add bakery', error });
  }
}


// * R (index)
async function index(req, res) {
  try {
    const bakeries = await Bakery.find({});
    res.json(bakeries);
  } catch (err) {
    res.status(400).json(err);
  }
}

// show renders specific bakery from mongo based on the req.params.id, aka the ID from the URL route (unique identifier) 
async function show(req, res) {
  try {
    const bakery = await Bakery.findById(req.params.id);
    res.json(bakery);
  } catch (err) {
    res.status(400).json(err);
  }
}








// * U
async function edit(req, res) {
  try {
    const bakery = await Bakery.findOneAndUpdate({ _id: req.params.id }, { text: req.body.editBakery }, { new: true });
    res.json(bakery);
  } catch (err) {
    res.status(400).json(err);
  }
}


// * D
async function deleteBakery(req, res) {
  try {
    const bakeryId = req.params.id;
    await Bakery.findByIdAndDelete(bakeryId);
    res.json({ message: 'Bakery removed successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to remove bakery', error });
  }
}


// * Search Bakeries ------
async function searchBakeries(req, res) {
  try {
    const searchQuery = req.query.query || 'bakeries in seattle';
    const location = req.query.location;
    const radius = req.query.radius;

    // Query ! for "Basic, Place Text Search data from Google"
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchQuery}&location=${location}&radius=${radius}&type=bakery&key=${token}`
    );
    console.log('---> from controller')
    const data = await response.json();
    console.log('---> Query Results #1', data)

    // Query 2 for "Place Detail data from Google"
    const placeIds = data.results.map(function(result) {
      return result.place_id;
    });
    console.log('---> Query Results #4 for place_id', placeIds)
    
    const detailsData = await Promise.all(placeIds.map(async function(placeId) {
      const detailsResponse = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?fields=name,formatted_address,opening_hours,delivery,current_opening_hours,formatted_phone_number,photos,website,rating&place_id=${placeId}&key=${token}`
      );
      return detailsResponse.json();
    }));
    console.log('---> Query Results #5 for Places Details', detailsData)
    res.json(data.results);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch bakeries' });
  }
}



// ? Notes -----

// Query for the photo reference
    // const photosReferences = data.results.map(function(result) {
    //   console.log(result.photos[0].photo_reference)
    //   return result.photos[0].photo_reference;
    // });
    // console.log('---> Query Results #2 for photo_reference(s)', photosReferences)

    // const PhotosData = await Promise.all(photosReferences.map(async function(photoReference) {
    //   const photosResponse = await fetch(
    //     `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoReference}&key=${token}`
    //   );
    //   return photosResponse.json();
    // }));
    // console.log('---> Query Results #3 for Photo Images', PhotosData)



// from Shopping Cart Lesson 1
// function findOneAndUpdate(filter, update, options) {}
// https://mongoosejs.com/docs/tutorials/findoneandupdate.html