const mongoose = require('mongoose')

const AdminSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true
  },
  username:{
    type: String,
    required: true
  },
  password:{
    type:String,
    required: true
  },
  birthday: String,
  createAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('admin', AdminSchema)