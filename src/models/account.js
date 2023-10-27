"use strict"

const {Schema, model} = require('mongoose')

const AccountSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    password: {
        type: String,
        trim: true,
        required: true,
    },

    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },

    first_name: {
        type: String,
        trim: true,
        required: true,
    },

    last_name: {
        type: String,
        trim: true,
        required: true,
    },

    is_active: {
        type: Boolean,
        default: true,
    },
    is_staff: {
        type: Boolean,
        default: false,
    },

    is_superadmin: {
        type: Boolean,
        default: false,
    }
},{ collection: 'accounts', timestamps: true })

/* ------------------------------------------------------- */
// Schema Configs:

const passwordEncrypt = require('../helpers/passwordEncrypt')

// save: Only Create
AccountSchema.pre(['save', 'updateOne'], function(next) {

    // get data from "this" when create;
    // if process is updateOne, data will receive in "this._update"
    const data = this?._update || this

    // const emailRegExp = new RegExp("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$")
    // const isEmailValidated = emailRegExp.test(data.email)
    // const isEmailValidated = RegExp("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$").test(data.email)
    const isEmailValidated = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email) // test from "data".

    if (isEmailValidated) {

        const isPasswordValidated = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&].{8,}$/.test(data.password)
    
        if (isPasswordValidated) {
            
            this.password = data.password = passwordEncrypt(data.password)

            this._update = data // updateOne will wait data from "this._update".
            next() // Allow to save.
        } else {
            
            next( new Error('Password not validated.') )
        }
    } else {
        
        next( new Error('Email not validated.') )
    }
})

/* ------------------------------------------------------- */
module.exports = model('Account', AccountSchema)