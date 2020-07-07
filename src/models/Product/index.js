const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  qtd:{
    type: Number,
    required: true
  },
  produto:{ type: String, enum: ['Vendas', 'Servicos'], required: true }
})

module.exports = mongoose.model('product', ProductSchema)