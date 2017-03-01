"use strict"

const restify = require('restify')
const fs = require('fs')
const mongoose = require('mongoose')
const config = require('./app/config/config')
const app = restify.createServer()
const path = require('path')
let swagger = require('swagger-restify')

app.use(restify.bodyParser())
app.use(restify.CORS(config.cors));
const routes = require('./app/routes')(app)
swagger.init(app, config.swagger)

mongoose.connect(config.db, (err) => {
  if (err)
    return console.error("Error al conectar con la base de datos")

  app.listen(config.port, () => {
    console.log(`API Rest corriendo en http://localhost:${config.port}`)
  })
})
