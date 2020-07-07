const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sobrenome: String,
  phone:{
    type: String,
    required: true,
    unique: true
  },
  address:{
    street:{
      type: String,
      required: true,
    },
    number:{
      type: String,
      required: true,
    },
    city:{
      type: String,
      required: true,
    },
    zip:{
      type: String,
      required: true,
    }
  },
  surname:{
    type: String,
    required: true,
    unique: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  encryptedPassword:{
    type: String,
  },
  role: { type: String, enum: ['admin', 'restricted'], required: true },
  
})

UserSchema.pre('save', async function(next){
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash
  next()
})

module.exports = mongoose.model('user', UserSchema)