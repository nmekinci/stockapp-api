"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS |
------------------------------------------------------- */
const { Schema,model } = require('../configs/dbConnection')
/* ------------------------------------------------------- *
{
  "userId": "65343222b67e9681f937f001",
  "token": "...tokenKey..."
}
/* ------------------------------------------------------- */
// Token Model:

const TokenSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
    }, 

    token: {
        type: String,
        trim: true,
        required: true,
        index: true,
    }, 

}, { collection: 'tokens', timestamps: true })

/* ------------------------------------------------------- */
module.exports = model('Token', TokenSchema)