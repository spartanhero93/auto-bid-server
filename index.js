const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const PORT = 3004
const {DB} = require('./DB/index')
const carSchema = require('./models/CarBid')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.post('/search', (req, res) => {
  console.log('user hit search')
  console.log(req.body)
  
  const foundItems = [];
  DB.forEach(obj => {
    for (const key in obj) {
      if (obj.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        if(element === req.body.userInput){
          foundItems.push(obj)
        }
      }
    }
  })
  res.send({data: foundItems})
})

app.get('/explore', (req, res) => {
  console.log('user hit explore')
  res.send({data: DB})
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
