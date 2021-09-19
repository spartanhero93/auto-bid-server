const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const { MongoClient } = require('mongodb')
const mongoose = require('mongoose')
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mwk9e.mongodb.net/car_bid?retryWrites=true&w=majority`
const PORT = 3004

const userSchema = require('./models/test.js')
const User = mongoose.model('user', userSchema, 'current_cars')


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(uri)
  const db = mongoose.connections

  let Luis = new User({ username: 'Booby', created: Date.now()})
  await Luis.save()
  console.log(Luis)
}

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

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

app.post('/search', (req, res) => {
  console.log('user hit search')
  console.log(req.body)
  res.send({ data: true })
})

app.get('/explore', (req, res) => {
  console.log('user hit explore')
  res.send({ data: DB })
})

app.get('/test', (req, res) => {
  res.send({ data: 'Hello dude!' })
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
