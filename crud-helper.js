// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user.model');
const Bakery = require('./models/bakery.model');
const Review = require('./models/review.model');

// Local variables will come in handy for holding retrieved documents
let user, bakery, review
let users, bakeries, reviews
