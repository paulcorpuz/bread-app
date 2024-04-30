const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
  content: { 
    type: String, 
    required: true 
  },
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
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zipCode: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
  },
  website: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
    categories: {
      type: String,
      enum: ["Bread", "Desserts", "Pastries", "Gluten-free", "Delivery", "Vegan"],
      default: "Bread",
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  rating: {
    type: Number,
    default: 0
  },
  reviews: [reviewSchema],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  googlePlaceId: {
    type: String,
  },
}, {
    timestamps: true
});

module.exports = mongoose.model('Bakery', bakerySchema);
