var http = require('http')
var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var routes = require('../Routes')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(routes)

const server = http.createServer(app)

module.exports = server
