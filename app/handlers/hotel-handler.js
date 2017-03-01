"use strict"

const HotelService = require('../services/hotel-service')

/**
 * @swagger
 * resourcePath: /api
 * description: Handles Hotel operations
 */

 /**
   * @swagger
   * path: /api/hotel
   * operations:
   *   -  httpMethod: POST
   *      summary: Saves hotel into hotel database
   *      consumes:
   *        - application/json
   *      parameters:
   *        - name: body
   *          description: JSON Hotel object
   *          paramType: body
   *          required: true
   *          type: string
   */
let addHotel = (req, res, next) => {
    HotelService.addHotel(req.body).then(response => {
      res.json(response.statusCode, response.message)
    }).catch(err => {
      res.json(err.statusCode, err.message)
    })
    return next()
}

/**
  * @swagger
  * path: /api/hotel/{hotelId}
  * operations:
  *   -  httpMethod: GET
  *      summary: Gets an specific Hotel from database
  *      consumes:
  *        - application/json
  *      parameters:
  *        - name: hotelId
  *          description: Hotel Id set by mongoose
  *          paramType: path
  *          required: true
  *          type: string
  */
let getHotel = (req, res, next) => {
    HotelService.getHotelById(req.params.id).then(response => {
      res.json(response.statusCode, response.message)
    }).catch(err => {
      res.json(err.statusCode, err.message)
    })
    return next()
}

/**
  * @swagger
  * path: /api/hotels
  * operations:
  *   -  httpMethod: GET
  *      summary: Retrieves a complete Hotel list
  *
  */
let getHotels = (req, res, next) => {
    HotelService.getHotels().then(response => {
      res.json(response.statusCode, response.message)
    }).catch(err => {
      res.json(err.statusCode, err.message)
    })
    return next()
}

module.exports = {
  addHotel,
  getHotel,
  getHotels
}
