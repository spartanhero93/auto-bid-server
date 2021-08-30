const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3004

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
  }
]

app.post('/search', (req,res) => {
  console.log('user hit search')
  console.log(req.body)
  res.send({data: true})
})

app.get('/explore', (req, res) => {
  console.log('user hit explore')
  res.send(DB)
})

app.get('/test', (req, res) => {
  res.send({data: 'Hello dude!'})
})


app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))