'use strict'

const controller = require('../controller/index');
const Joi = require('joi');

module.exports = [
    {
        method: 'GET',
        path: '/new/{url}',
        handler: controller.create
    },
    {
        method: 'GET',
        path: '/short/{shortUrl}',
        handler: controller.view
    }
]