const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Cars = require('../models/cars');
const db = "mongodb://localhost:27017/cars";
mongoose.Promise = global.Promise;

//Connect
mongoose.connect(db, function(err) {
        if (err){
             console.log("Error:" + err);
        }else{
            console.log("Connection ok")
        }
});

//Get all cars
router.get('/cars', function(req, res){
    console.log('Get request for all cars');
    Cars.find({})
    .exec(function(err, cars){
        if(err){
            console.log("Error retrieving cars");
        }else{
            res.json(cars);
            console.log(cars);
        }
    })
})

module.exports = router;