'use strict'

const Hapi = require('hapi');
const mongoose = require('mongoose');
const routes = require('./routes/index');

mongoose.connect('mongodb://localhost:27017/modern-api')
mongoose.connection.once('open', () => {
    console.log('connected to db')
})

const server = Hapi.server({
    port: 8000,
    host: 'localhost'
})

server.route(routes);

const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
}

init();