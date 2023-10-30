"use strict"

const {Schema, model} = require('mongoose')

const BrandSchema = new Schema({
   

    name: {
        type: String,
        trim: true,
        required: true,
    },
    image: {
        type: String,
        trim: true,
        required: true,
    },

    
},{ collection: 'brands', timestamps: true })

module.exports = model('Brand', BrandSchema)