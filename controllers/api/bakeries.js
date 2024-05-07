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



// * C
async function create(req, res) {
  // console.log(req.body)
  try {
    const bakeryData = {
      googlePlaceId: req.body.place_id,
      name: req.body.name || '',
      address: req.body.formatted_address || '',
      priceLevel: req.body.price_level || 0,
      googRating: req.body.rating || 0,
      googUserRatingTotal: req.body.user_ratings_total || 0, 
      isOpen: req.body.opening_hours || {},
      businessStatus: req.body.business_status || '',

      phoneNumber: req.body.formatted_phone_number || '',
      website: req.body.website || '',
      delivery: req.body.delivery || false,
      takeOut: req.body.takeout || false,
      dineIn: req.body.dine_in || false,
      openingHours: req.body.current_opening_hours || {},
      editorialSummary: req.body.editorial_summary || {},

      userId: req.user._id,
      userName: req.user.name,
      photoURL: 'https://i.imgur.com/bR1vf6R.png',
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


// * R (show)
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
    const searchQuery = req.query.query || 'bakery';
    // const location = req.query.location;
    const latitude = parseFloat(req.query.latitude);
    const longitude = parseFloat(req.query.longitude);
    const radius = req.query.radius;

    // ? Query 1 for "Basic, Place Text Search data from Google"
    // const response = await fetch(
    //   `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchQuery}&location=${location}&radius=${radius}&type=bakery&key=${token}`
    // );
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${searchQuery}&location=${latitude},${longitude}&radius=${radius}&type=bakery&key=${token}`
    );
    console.log('---> from controller')
    const data = await response.json();
    // console.log('---> Query Results #1 for basic info', data)


    // ? map across 1st query for place_id
    const places = data.results.map(function(result) {
      return result
    });
    // console.log('---> Query Results #2 just for place_id', places)
    

    // ? Query 2 for "Place Detail" data from Google"
    const detailsData = await Promise.all(places.map(async function(place) {
      // console.log('---> TYLUS', places)
      const detailsResponse = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?fields=name,formatted_address,opening_hours,delivery,current_opening_hours,formatted_phone_number,photos,website,rating,editorial_summary,takeout,dine_in&place_id=${place.place_id}&key=${token}`
      );
      return detailsResponse.json();
    }));
    // console.log('---> Query Results #2 for more details', detailsData)

    // ? combine Query 1 (basic) and 2 (detail) to save into mongo 
    const combinedData = data.results.map((result) => {
      const detailData = detailsData.find((ddr) => ddr.result.name === result.name)    
      const additionalProperties = {
          website: detailData.result.website,
          formatted_phone_number: detailData.result.formatted_phone_number,
          current_opening_hours: detailData.result.current_opening_hours,
          editorial_summary: detailData.result.editorial_summary,
          takeout: detailData.result.takeout,
          dine_in:detailData.result.dine_in,

        }
      result ={...result, ...additionalProperties}
      console.log(result)
      return result
    }) 
  console.log('---> Combined Queries', combinedData)

    res.json(combinedData);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch bakeries' });
  }
}




// ? Notes and References -----
// from Shopping Cart Lesson 1
// function findOneAndUpdate(filter, update, options) {}
// https://mongoosejs.com/docs/tutorials/findoneandupdate.html

// ? Graveyard -----
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


  // https://developers.google.com/maps/documentation/places/web-service/search-text#:~:text=A%20Text%20Search%20returns%20information,bias%20that%20has%20been%20set.
  // needs longitude /latitude 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat 
  // to return floating point number.