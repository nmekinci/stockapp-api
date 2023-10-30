"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | 
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/purchase:

const purchase = require('../controllers/purchaseController')

// URL: /categories

router.route('/')
    .get(purchase.list)
    .post(purchase.create)

router.route('/:id')
    .get(purchase.read)
    .put(purchase.update)
    .patch(purchase.update)
    .delete(purchase.delete)

/* ------------------------------------------------------- */
module.exports = router