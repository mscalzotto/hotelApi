"use strict"

const BluebirdPromise = require('bluebird')
const Mongoose = BluebirdPromise.promisifyAll(require('mongoose'))

const HotelSchema = Mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stars: { type: Number, required: true },
  amenities: { type: Array },
  mealplan: { type: String, required: true }
})

module.exports = Mongoose.model('Hotel', HotelSchema)
