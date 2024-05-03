const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
  content: { type: String, required: true },
  rating: { 
    type: Number, 
    min: 1, 
    max: 5, 
    default: 5
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  userName:{ type: String },
  profilePic: { type: String },
}, {
  timestamps: true
});

const bakerySchema = new Schema({
  googlePlaceId: { type: String },
  name: { type: String },
  address: { type: String },
  priceLevel: { type: Number },
  googRating: { type: Number },
  googUserRatingTotal: { type: Number },
  openingHours:{ type: Object },
  businessStatus: { type: String },
  
  phoneNumber: { type: String },
  website: { type: String },
  delivery: { type: Boolean },

  reviews: [reviewSchema],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  userName:{ type: String },
}, {
    timestamps: true
});


module.exports = mongoose.model('Bakery', bakerySchema);