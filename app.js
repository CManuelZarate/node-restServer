
require('dotenv').config();//.config para q tome todo miarch

const Server = require('./models/server');

const server = new Server();//instancia

server.listen();//lanzamos