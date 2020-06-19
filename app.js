const server = require('./src/config/Server')
const port = process.env.PORT || 3000;

server.listen(port)