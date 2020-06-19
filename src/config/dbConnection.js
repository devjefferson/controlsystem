const mongoose = require('mongoose')

const db = ()=>{
  return mongoose.connect('mongodb+srv://ndiesuper:ndiesuper@cluster0-ggcka.gcp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(_=>{
    return console.log('Mongo Conectou')
  })
  .catch(err=>{
    console.log(err)
  })
}

module.exports = () => {
  return db()
}