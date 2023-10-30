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
router.use('/firm', require('./firmRoute'))
router.use('/sale', require('./saleRoute'))
router.use('/purchase', require('./purchaseRoute'))



module.exports = router
