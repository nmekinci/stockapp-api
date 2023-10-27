"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | 
------------------------------------------------------- */
// Account Controller:

const Account = require('../models/accountModel')

module.exports = {
    list: async (req,res) => {
        /*
            #swagger.tags = ["Accounts"]
            #swagger.summary = "List Accounts"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
       const data = await res.getModelList(Account)

       res.status(200).send({
        error: false,
        details: await res.getModelListDetails(Account),
        data
       })
    },
    //CRUD 
    create: async (req,res) => {
        /*
            #swagger.tags = ["Accounts"]
            #swagger.summary = "Create an Account"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "first_name":".....",
                    "last_name":".....",
                    "is_active": true,
                    "is_staff": false,
                    "is_superadmin": false,
                }
            }
        */
            const data = await Account.create(req.body)

            res.status(201).send({
                error: false,
                data
            })
    },
    read: async (req, res) => {
        /*
            #swagger.tags = ["Accounts"]
            #swagger.summary = "Get Single Account"
        */

        const data = await Account.findOne({ _id: req.params.id })

        res.status(200).send({
            error: false,
            data
        })
    },
    update: async (req, res) => {
        /*
            #swagger.tags = ["Accounts"]
            #swagger.summary = "Update Account"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "first_name":".....",
                    "last_name":".....",
                    "is_active": true,
                    "is_staff": false,
                    "is_superadmin": false,
                }
            }
        */

        const data = await Account.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

        res.status(200).send({
            error: false,
            data,
            new: await Account.findOne({ _id: req.params.id })
        })
    },
    delete: async (req, res) => {
        /*
            #swagger.tags = ["Accounts"]
            #swagger.summary = "Delete Account"
        */

        const data = await Account.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })

    }

}