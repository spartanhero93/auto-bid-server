const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3004

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.get('/test', (req, res) => {
  res.send({data: 'Hello dude!'})
})

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))