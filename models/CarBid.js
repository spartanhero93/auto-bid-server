const mongoose = require('mongoose')

class CarSchema {
  constructor (
    carType,
    make,
    model,
    trim,
    year,
    startingBid,
    contactNumber,
    color,
    pictures
  ) {
    this.carType = carType
    this.make = make
    this.model = model
    this.trim = trim
    this.year = year
    this.startingBid = startingBid
    this.contactNumber = contactNumber
    this.color = color
    this.pictures = pictures
  }
}

module.exports = {
  CarSchema
}