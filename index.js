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

const carBidSchema = require('./models/CarBid.js')
const CarBid = mongoose.model('carBid', carBidSchema, 'current_cars')


async function main() {
  await mongoose.connect(uri)
  // const db = mongoose.connections

  // let Luis = new User({ username: 'Booby', created: Date.now()})
  // await Luis.save()
  // console.log(Luis)

  let newCarBid = new CarBid({
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
  })
  await newCarBid.save()
  console.log(newCarBid)
}
main().catch(err => console.log(err));

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

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
