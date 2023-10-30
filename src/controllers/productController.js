"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | 
------------------------------------------------------- */
// Product Controller:

const Product = require('../models/productModel')

module.exports = {
    list: async (req,res) => {
        /*
            #swagger.tags = ["Products"]
            #swagger.summary = "List Products"
            #swagger.description = `
                You can send query with endpoint for search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */
       const data = await res.getModelList(Product)

       res.status(200).send({
        error: false,
        details: await res.getModelListDetails(Product),
        data
       })
    },
    //CRUD 
    create: async (req,res) => {
        /*
            #swagger.tags = ["Products"]
            #swagger.summary = "Create an Product"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "category_id",
                    "brand_id",
                    "name":"test",
                    "quantity":0
                }
            }
        */
            const data = await Product.create(req.body)

            res.status(201).send({
                error: false,
                data
            })
    },
    read: async (req, res) => {
        /*
            #swagger.tags = ["Products"]
            #swagger.summary = "Get Single Product"
        */

        const data = await Product.findOne({ _id: req.params.id })

        res.status(200).send({
            error: false,
            data
        })
    },
    update: async (req, res) => {
        /*
            #swagger.tags = ["Products"]
            #swagger.summary = "Update Product"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "category_id",
                    "brand_id",
                    "name":"test",
                    "quantity":0
                }
            }
        */

        const data = await Product.updateOne({ _id: req.params.id }, req.body, { runValidators: true })

        res.status(200).send({
            error: false,
            data,
            new: await Product.findOne({ _id: req.params.id })
        })
    },
    delete: async (req, res) => {
        /*
            #swagger.tags = ["Products"]
            #swagger.summary = "Delete Product"
        */

        const data = await Product.deleteOne({ _id: req.params.id })

        res.status(data.deletedCount ? 204 : 404).send({
            error: !data.deletedCount,
            data
        })

    }

}