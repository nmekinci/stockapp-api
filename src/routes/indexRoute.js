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
router.use('/firms', require('./firmRoute'))
router.use('/sales', require('./saleRoute'))
router.use('/purchases', require('./purchaseRoute'))
router.use('/products', require('./productRoute'))
router.use('/tokens', require('./tokenRoute'))



module.exports = router
