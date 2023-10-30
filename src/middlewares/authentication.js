"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | 
------------------------------------------------------- */
// app.use(authentication):

const User = require('../models/accountModel')
const Token = require('../models/tokenModel')

module.exports = async (req, res, next) => {


    const auth = req.headers?.authorization || null // Token ...tokenKey...
    const tokenKey = auth ? auth.split(' ') : null // ['Token', '...tokenKey...']

    if (tokenKey && tokenKey[0] == 'Token') {
        const tokenData = await Token.findOne({ token: tokenKey[1] })
        if (tokenData) req.user = await User.findOne({ _id: tokenData.userId })
    }

    next()
}