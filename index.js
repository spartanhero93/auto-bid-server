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

// get some carData
async function postData(){
  const response = await fetch('http://localhost:3004/addEntry', {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        data: Array.from(document.querySelectorAll('.result-tile')).map(item => {
          const child = item.children[0]
          const title = child.getAttribute('aria-label').replace('View Car: ', '')
          const trimMillage = item.querySelector('.trim-mileage');
          const price = item.querySelector('.flex.items-end.font-bold.mb-4.text-2xl')
          const img = item.querySelector('img')
          return {
            carType: 'coupe',
            make: title.split(' ')[1],
            model: title.split(' ')[2],
            trim: trimMillage.children[0].textContent,
            year: title.split(' ')[0],
            startingBid: price.textContent,
            contactNumber: null,
            color: null,
            miles: trimMillage.children[1].textContent,
            pictures: img.src
          }
        })
      })
    })
}


app.post('/addEntry', (req, res) => {
  console.log(req.body)
})

app.get('/explore', (req, res) => {
  console.log('user hit explore')
  res.send({data: DB})
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
