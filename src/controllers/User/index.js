const dbConnection = require('../../config/dbConnection')
const User = require('../../models/User')
module.exports = {
  async list(req,res,next){
    dbConnection()

    const usuario = await User.find({})
    const [{name, sobrename}] = usuario
    res.json({usuario: name }).status(400)
  },
  async create(req, res, next){
    
  }
}