"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | 
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/firm:

const firm = require('../controllers/firmController')

// URL: /categories

router.route('/')
    .get(firm.list)
    .post(firm.create)

router.route('/:id')
    .get(firm.read)
    .put(firm.update)
    .patch(firm.update)
    .delete(firm.delete)

/* ------------------------------------------------------- */
module.exports = router