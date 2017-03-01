'use strict'

const BluebirdPromise = require('bluebird')
const Hotel = require('../models/hotel')

module.exports =  {
  getHotels: () => {
    return new BluebirdPromise((resolve, reject) => {
      Hotel.find({}, {__v:0}, (err, hotels) => {
        if (err) {
          return reject({statusCode: 500, message: err})
        } else if (hotels.length === 0) {
          return reject({statusCode: 204, message: "No hotels found"})
        }
        return resolve({statusCode: 200, message: hotels})
      })
    })
  },
  getHotelById: (hotelId) => {
    return new BluebirdPromise((resolve, reject) => {
      Hotel.findById(hotelId, {__v:0}, (err, hotel) => {
        if (err) {
          return reject({statusCode: 400, message:err.message})
        } else if (hotel === null) {
          return reject(
            {statusCode: 204, message: `No hotel found with id ${hotelId}`}
          )
        }
        return resolve({statusCode: 200, message: hotel})
      })
    })
  },
  addHotel: (body) => {
    return new BluebirdPromise((resolve, reject) => {
      let hotelModel = new Hotel(body)
      hotelModel.save((err, hotel) => {
        if (err) {
          let message = err.name + ' :: ' + err.message
          return reject({statusCode: 500, message: message})
        }
        return resolve({statusCode: 200, message: hotel})
      })
    })
  }
}
