'use strict'

const Url = require('../models/url');
const isUrl = require('is-url');
const faker = require('faker');

exports.create = (req, res) => {

    if(isUrl(`http://${req.params.url}`)){

        return new Promise ((resolve, reject) => {
            Url.create({
                original_url: req.params.url,
                short_url: faker.random.uuid()
            }, (err, data) => {
                if(err){
                    return reject(err);
                }
                return resolve(data);
            });
        });
    } else {
        return 'Error, please insert web adress';
    }
}

exports.view = (req, res) => {
    return new Promise ((resolve, reject) =>{

        Url.findOne({
            short_url: req.params.shortUrl
        })
        .then((data) => {
            return res.redirect(`http://${data.original_url}`)
        })
        .then(resolve)
        .catch(reject);

    });
}