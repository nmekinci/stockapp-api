"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | 
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/:

// URL: /

router.use('/accounts', require('./accountRoute'))



module.exports = router
