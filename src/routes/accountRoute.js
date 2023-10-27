"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | 
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/user:

const account = require('../controllers/accountController')

// URL: /accounts

router.route('/')
    .get(account.list)
    .post(account.create)

router.route('/:id')
    .get(account.read)
    .put(account.update)
    .patch(account.update)
    .delete(account.delete)

/* ------------------------------------------------------- */
module.exports = router