"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | 
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/sale:

const sale = require('../controllers/saleController')

// URL: /categories

router.route('/')
    .get(sale.list)
    .post(sale.create)

router.route('/:id')
    .get(sale.read)
    .put(sale.update)
    .patch(sale.update)
    .delete(sale.delete)

/* ------------------------------------------------------- */
module.exports = router