"use strict"

const {Schema, model} = require('mongoose')

const CategorySchema = new Schema({
   

    name: {
        type: String,
        trim: true,
        required: true,
    }

    
},{ collection: 'categories', timestamps: true })

module.exports = model('Category', CategorySchema)