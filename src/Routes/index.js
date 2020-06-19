var express = require('express')
var router = express.Router()
var User = require('../controllers/User')

router.get('/', User.list)




module.exports = router