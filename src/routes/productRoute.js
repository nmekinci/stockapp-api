"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | 
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/product:

const product = require('../controllers/productController')

// URL: /categories

router.route('/')
    .get(product.list)
    .post(product.create)

router.route('/:id')
    .get(product.read)
    .put(product.update)
    .patch(product.update)
    .delete(product.delete)

/* ------------------------------------------------------- */
module.exports = router