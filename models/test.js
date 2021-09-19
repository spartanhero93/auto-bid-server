const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required']
  },
  created: {
    type: Date,
    required: [true, 'Date is required']
  }
})

module.exports = testSchema