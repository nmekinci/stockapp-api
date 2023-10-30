"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | StockApp-API
------------------------------------------------------- */
const express = require('express')
const app = express()

//npm i dotenv
//npm i express-async-errors
require('dotenv').config()
const HOST = process.env?.HOST || '127.0.0.1'
const PORT = process.env?.PORT || 8000

require('express-async-errors')

//*****configuration 
const {dbConnection} = require('./src/configs/dbConnection')
dbConnection()

//*****Middlewares
app.use(express.json())

//Authentication
app.use(require('./src/middlewares/authentication'))

//Logger
app.use(require('./src/middlewares/logger'))
//getModelList
app.use(require('./src/middlewares/findSearchSortPage'))


//******Routes
app.all('/',(req,res) => {
    res.send({
        error:false,
        message:'Welcome To StockApp-API',
        documents:{
            swagger:'/documents/swagger',
            redoc:'/documents/redoc',
            json:'/documents/json',
        },
        user:req?.user
    })
})
app.use(require('./src/routes/indexRoute'))

//******Error Handler
app.use(require('./src/middlewares/errorHandler'))

//******Run the Server
app.listen(PORT,HOST, ()=> console.log(`http://${HOST}:${PORT}`))

//SYNC (Must bealways in comment)
// require('./src/helpers/sync')()

