const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
  content: { type: String, required: true },
  rating: { 
    type: Number, 
    min: 1, 
    max: 5, 
    required: true 
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  // userName: String,
  // userAvatar: String,
}, {
  timestamps: true
});

const bakerySchema = new Schema({
  name: { type: String, required: true },
  address: { type: String },
  city: {type: String },
  state: { type: String },
  zipCode: { type: String },
  phoneNumber: { type: String },
  website: { type: String },
  imageUrl: {type: String },
  rating: {
    type: Number,
    default: 0
  },
  googlePlaceId: { type: String },
  reviews: [reviewSchema],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
    timestamps: true
});

module.exports = mongoose.model('Bakery', bakerySchema);
