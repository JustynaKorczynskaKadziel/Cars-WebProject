'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var carSchema = new Schema({
    make: String,
    model: String,
    plate: String,
    deliveryDate: String,
    deadline: String,
    clientFirstName: String,
    clientSurname: String,
    cost: Number,
    isFullyDamaged: Boolean,
    isCarRepaired: Boolean
    //assignedTo: Number
})

module.exports = mongoose.model('cars', carSchema, 'cars');