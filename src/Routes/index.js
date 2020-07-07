var express = require('express')
var router = express.Router()
var User = require('../controllers/User')

router.get('/', User.list)
router.get('/c', User.create)


module.exports = router