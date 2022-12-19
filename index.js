const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const PORT = 3004

class Car {
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

// let newCarBid = {
//   carType: 'sedan',
//   make: 'Honda',
//   model: 'Civic',
//   trim: 'touring',
//   year: '2019',
//   startingBid: '20000',
//   contactNumber: '7047778987',
//   color: 'Gray',
//   pictures: [
//   'https://upload.wikimedia.org/wikipedia/commons/1/19/Brazilian_Honda_Civic_touring_2017_%28cropped%29.jpg'
// ]
// }
// console.log(newCarBid)

const honda = new Car(
  'sedan',
  'Honda',
  'Civic',
  'touring',
  '2019',
  '20000',
  '7047778987',
  'Gray',
  ['https://upload.wikimedia.org/wikipedia/commons/1/19/Brazilian_Honda_Civic_touring_2017_%28cropped%29.jpg']
)

console.log(honda)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.post('/search', (req, res) => {
  console.log('user hit search')
})

app.get('/explore', (req, res) => {
  console.log('user hit explore')
  res.send({data: [honda]})
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
