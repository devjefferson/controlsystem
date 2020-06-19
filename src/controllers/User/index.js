const dbConnection = require('../../config/dbConnection')
module.exports = {
  list(req,res,next){
    dbConnection()
    res.json({User: "Rota de Listar User Funcionando"}).status(400)
  }
}