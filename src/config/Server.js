var AdminBroExpressjs = require('admin-bro-expressjs')
var http = require('http')
var express = require('express');
var bodyParser = require('body-parser')
var formidableMiddleware = require('express-formidable');

const dbConnection = require('./dbConnection')
const adminBro = require('../controllers/Admin')
const app = express();
const routes = require('../Routes')


app.use(formidableMiddleware());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

dbConnection()
app.use(routes)
const router = AdminBroExpressjs.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)

const server = http.createServer(app)

module.exports = server
