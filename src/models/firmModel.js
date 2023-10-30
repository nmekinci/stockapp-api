"use strict"

const {Schema, model} = require('mongoose')

const FirmSchema = new Schema({
   

    name: {
        type: String,
        trim: true,
        required: true,
    },
    phone: {
        type: String,
        trim: true
    },
    adress: {
        type: String,
        trim: true,
        required: true,
    },
    image: {
        type: String,
        trim: true,
        required: true,
    },

    
},{ collection: 'Firms', timestamps: true })

module.exports = model('Firm', FirmSchema)