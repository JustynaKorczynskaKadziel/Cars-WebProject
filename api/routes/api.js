const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const mongojs = require("mongojs");
var db = mongojs('cars', ['cars'])

//Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/cars', (err, db) => {
        if (err){
             return console.log(err);
        }
        var db = client.db('cars');
        closure;
    })
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get cars
router.get('/cars', (req, res) => {
    console.log("check api");
    db.cars.find((err, cars) =>{
        if(err) return next(err);
        response.data = cars;
        res.json(response);
        console.log(cars);
    });
});

module.exports = router;