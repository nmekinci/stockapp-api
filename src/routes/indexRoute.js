"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | 
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/:

// URL: /

router.use('/accounts', require('./accountRoute'))
router.use('/brands', require('./brandRoute'))
router.use('/categories', require('./categoryRoute'))



module.exports = router
