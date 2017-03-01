"use strict"

let config = {
  basePath: "http://localhost",
  port: 3000,
  db: "mongodb://localhost:27017/hotel",
  swagger: {
    apiVersion: '1.0',
    swaggerVersion: '2.0',
    basePath: "http://localhost:3000",
    info: {
      title: 'Hotel Api',
      description: 'Hotel Api Test'
    },
    schemes: ['http'],
    apis: ['./app/handlers/hotel-handler.js'],
    produces: [
      'application/json',
      'text/xml'
    ],
    consumes: [
      'application/json',
      'text/xml'
    ],
    swaggerURL: '/api/docs',
    swaggerUI: './swagger',
    swaggerJSON : '/api-docs.json'
  },
  cors: {
    credentials: true,
    origins: ['http://localhost:8080']
  }
}

module.exports = config
