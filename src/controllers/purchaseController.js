"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | 
------------------------------------------------------- */
// Purchase Controller:

const Purchase = require('../models/purchaseModel')

module.exports = {
    list: async (req,res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "List Purchases"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
       const data = await res.getModelList(Purchase)

       res.status(200).send({
        error: false,
        details: await res.getModelListDetails(Purchase),
        data
       })
    },
    //CRUD 
    create: async (req,res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Create an Purchase"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "user_id",
                    "brand_id",
                    "product_id",
                    "firm_id",
                    "quantity":0,
                    "price":123,
                    "price_total":123
                }
            }
        */
            const data = await Purchase.create(req.body)

            res.status(201).send({
                error: false,
                data
            })
    },
    read: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Get Single Purchase"
        */

        const data = await Purchase.findOne({ _id: req.params.id })

        res.status(200).send({
            error: false,
            data
        })
    },
    update: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Update Purchase"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "user_id",
                    "brand_id",
                    "product_id",
                    "firm_id",
                    "quantity":2,
                    "price":123,
                    "price_total":123
                }
            }
        */

        const data = await Purchase.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

        res.status(200).send({
            error: false,
            data,
            new: await Purchase.findOne({ _id: req.params.id })
        })
    },
    delete: async (req, res) => {
        /*
            #swagger.tags = ["Purchases"]
            #swagger.summary = "Delete Purchase"
        */

        const data = await Purchase.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })

    }

}