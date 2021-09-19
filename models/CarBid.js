const mongoose = require('mongoose')

const carBidSchema = new mongoose.Schema({
  carType: {
    type: String,
    required: true
  },
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  trim: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  startingBid: {
    type: Number,
    required: true
  },
  contactNumber: {
    type: Number, 
    required: true
  },
  color: {
    type: String,
    required: true
  },
  pictures: {
    type: [String],
    required: true
  }
})

module.exports = carBidSchema

const DB = [
  {
    carType: 'sedan',
    make: 'Honda',
    model: 'Civic',
    trim: 'touring',
    year: '2019',
    startingBid: '20000',
    contactNumber: '7047778987',
    color: 'Gray',
    pictures: [
      'https://upload.wikimedia.org/wikipedia/commons/1/19/Brazilian_Honda_Civic_touring_2017_%28cropped%29.jpg'
    ]
  },
  {
    carType: 'coupe',
    make: 'Toyota',
    model: '86',
    trim: 'standard',
    year: '2017',
    startingBid: '30000',
    contactNumber: '980123456',
    color: 'white',
    pictures: [
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/toyota-86-quick-review-lead-1594757313.jpg?crop=1xw:0.9948717948717948xh;center,top&resize=640:*'
    ]
  },
  {
    carType: 'coupe',
    make: 'Scion',
    model: 'TC',
    trim: 'standard',
    year: '2013',
    startingBid: '15000',
    contactNumber: '7816664541',
    color: 'black',
    pictures: [
      'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/10q3/357232/2011-scion-tc-first-drive-review-car-and-driver-photo-360983-s-original.jpg?fill=2:1&resize=1200:*'
    ]
  }
]