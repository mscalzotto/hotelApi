'use strict'

const hotelHandler = require('../handlers/hotel-handler')
const fs = require('fs')

module.exports = (app) => {
  app.get('/', (req, res) => {
    let body = fs.readFileSync('./app/index.html', 'utf-8')
    res.writeHead({'Content-Type': 'text/html'})
    res.write(body)
    res.end()
  })

  app.get('/api/hotels', hotelHandler.getHotels)
  app.get('/api/hotel/:id', hotelHandler.getHotel)
  app.post('/api/hotel', hotelHandler.addHotel)
}
