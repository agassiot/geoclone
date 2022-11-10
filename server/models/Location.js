const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const locationSchema = new Schema({
  lat: {
    type: Number,
    required: 'You need to leave a thought!',
    minlength: 1,
    maxlength: 280,
  },

  long: {
    type: Number,
    required: true,
    minlength: 1,
    maxlength: 280,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  
});

const location = model('location', locationSchema);

module.exports = location;
